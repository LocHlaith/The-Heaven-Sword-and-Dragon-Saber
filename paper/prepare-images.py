from pathlib import Path

from PIL import Image, ImageOps


PROJECT_ROOT = Path(__file__).resolve().parent.parent
PAPER_ROOT = PROJECT_ROOT / "paper"
ASSET_ROOT = PAPER_ROOT / "assets"


def convert_image(source: Path, target: Path, max_width: int, quality: int) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
        return

    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        if image.width > max_width:
            height = round(image.height * max_width / image.width)
            image = image.resize((max_width, height), Image.Resampling.LANCZOS)
        image.save(
            target,
            format="JPEG",
            quality=quality,
            optimize=True,
            progressive=True,
            subsampling="4:2:0",
        )


def prepare_characters() -> int:
    count = 0
    for route in ("zhaomin", "zhouzhiruo"):
        source_dir = PROJECT_ROOT / "images" / "characters" / route
        for source in sorted(source_dir.glob("portrait_*.png")):
            target = ASSET_ROOT / "characters" / route / f"{source.stem}.jpg"
            convert_image(source, target, max_width=1400, quality=84)
            count += 1
    return count


def prepare_levels() -> int:
    count = 0
    for route in ("zhaomin", "zhouzhiruo"):
        route_dir = PROJECT_ROOT / "images" / "levels" / route
        for source in sorted(route_dir.glob("level_*/frame_*.png")):
            relative = source.relative_to(PROJECT_ROOT / "images" / "levels")
            target = (ASSET_ROOT / "levels" / relative).with_suffix(".jpg")
            convert_image(source, target, max_width=1280, quality=80)
            count += 1
    return count


if __name__ == "__main__":
    character_count = prepare_characters()
    level_count = prepare_levels()
    print(f"已准备人物图 {character_count} 幅、关卡图 {level_count} 幅。")
