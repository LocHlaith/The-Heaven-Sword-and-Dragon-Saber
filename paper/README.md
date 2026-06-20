# 科普作品说明文档

- `main.tex`：ElegantPaper 主文档。
- `reference.bib`：研究、技术与提示词方法文献。
- `generated/`：从游戏数据自动生成的剧情图文、题目脚注、人物图录、代表性提示词与关卡资料总表。
- `generate-content.js`：读取 `js/game-data*.js` 与代表性提示词并更新 `generated/`。
- `prepare-images.py`：从仓库原始 PNG 生成论文专用的等比例压缩图。
- `assets/`：论文编译使用的 36 幅人物图与 180 幅关卡图副本，原始图片仍保存在仓库 `images/`。
- `科普作品说明文档.pdf`：最终提交版 PDF。

在本文件夹运行：

```powershell
.\build.ps1
```

脚本会准备论文图片、重新抽取游戏数据，依次执行 XeLaTeX、Biber、XeLaTeX、XeLaTeX，并生成最终 PDF。

直接编译 `main.tex` 只会更新 `main.pdf`；运行 `build.ps1` 才会在编译完成后将 `main.pdf` 覆盖复制为 `科普作品说明文档.pdf`。
