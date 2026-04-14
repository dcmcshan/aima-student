# AIMA student workspace

Use this repository for **Artificial Intelligence: A Modern Approach** exercises. Open it in **GitHub Codespaces** (recommended) or clone locally.

## Jupyter Slides (opens first — instead of README)

After the container starts, **`slides/AIMA-course.ipynb`** opens in the editor. Cells use **slideshow metadata** (`slide`, `subslide`, …). Use the **Jupyter Slide Show** commands (e.g. *Switch Slide Type*, *Edit Slide Type*) from the Command Palette to adjust layout, or export with `jupyter nbconvert … --to slides` when you need Reveal/HTML.

## Jupyter Book (static site)

The dev container builds a **Jupyter Book** (`jupyter-book build .`) into **`_build/html`** and serves it on **port 8765**. Open it from the **Ports** view (you’ll get a notification; it no longer auto-steals focus from the welcome notebook).

## JupyterLab (in the Codespace)

After create, **JupyterLab** is started on **port 8888** (see `scripts/codespace-start-services.sh`). Open the forwarded port from the **Ports** view; when prompted for a token, use **`aima`** (set for convenience in private Codespaces only).

From a terminal you can also run:

```bash
.venv/bin/jupyter lab --ip=0.0.0.0 --port=8888 --no-browser --ServerApp.token=aima
```

- **Thebe:** use **Live Code** in the built site (Binder kernel). See the **Thebe demo** page in the book TOC (`docs/thebe-demo.md` source).
- **Regenerate:** `npm run docs:generate` updates `docs/` and `_toc.yml`, then `npm run book:build` (or `bash scripts/bootstrap-codespace.sh` in a fresh environment).

**Jupyter Slide Show (authoring):** the **Jupyter Slide Show** extension (`ms-toolsai.vscode-jupyter-slideshow`) is included so you can tag notebook cells as *Slide* / *Sub-slide* when you author `.ipynb` content; `jupyter nbconvert --to slides` is the usual export path. The **canonical reading/runtime surface** for this repo remains the **same Jupyter Book HTML** plus Thebe, not a separate Reveal bundle.

**Browse in the repo:** [docs/README.md](docs/README.md) — chapter index; your answers still go in [`exercises/chNN/`](exercises/).

## Start here

1. Open this repo on GitHub → **Code** → **Codespaces** → **Create codespace on main**.
2. Wait for setup; **`slides/AIMA-course.ipynb`** should open automatically (replacing README as the landing experience). Use **Ports** to open **8765** (book) or **8888** (JupyterLab) as needed.
3. Edit the markdown under `exercises/chNN/`, fill the `<!-- answer -->` blocks, commit, and push.

## Assignments by chapter

Exercises live in `exercises/ch01/` … `exercises/ch26/`. Open the folder that matches your assignment.

| Ch | Folder |
|---:|--------|
| 1 | [exercises/ch01/](exercises/ch01/) |
| 2 | [exercises/ch02/](exercises/ch02/) |
| 3 | [exercises/ch03/](exercises/ch03/) |
| 4 | [exercises/ch04/](exercises/ch04/) |
| 5 | [exercises/ch05/](exercises/ch05/) |
| 6 | [exercises/ch06/](exercises/ch06/) |
| 7 | [exercises/ch07/](exercises/ch07/) |
| 8 | [exercises/ch08/](exercises/ch08/) |
| 9 | [exercises/ch09/](exercises/ch09/) |
| 10 | [exercises/ch10/](exercises/ch10/) |
| 11 | [exercises/ch11/](exercises/ch11/) |
| 12 | [exercises/ch12/](exercises/ch12/) |
| 13 | [exercises/ch13/](exercises/ch13/) |
| 14 | [exercises/ch14/](exercises/ch14/) |
| 15 | [exercises/ch15/](exercises/ch15/) |
| 16 | [exercises/ch16/](exercises/ch16/) |
| 17 | [exercises/ch17/](exercises/ch17/) |
| 18 | [exercises/ch18/](exercises/ch18/) |
| 19 | [exercises/ch19/](exercises/ch19/) |
| 20 | [exercises/ch20/](exercises/ch20/) |
| 21 | [exercises/ch21/](exercises/ch21/) |
| 22 | [exercises/ch22/](exercises/ch22/) |
| 23 | [exercises/ch23/](exercises/ch23/) |
| 24 | [exercises/ch24/](exercises/ch24/) |
| 25 | [exercises/ch25/](exercises/ch25/) |
| 26 | [exercises/ch26/](exercises/ch26/) |

Details on the question/answer format: [exercises/README.md](exercises/README.md).

## Tools in Codespaces

The dev container installs the **AIMA Exercise Forms** VS Code extension so you can work through exercises from the sidebar when available.
