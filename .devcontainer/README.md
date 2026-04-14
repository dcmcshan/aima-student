# AIMA Assignment Devcontainer

This devcontainer is used when students open their assignment repo in GitHub Codespaces or in Cursor with Dev Containers.

**Create** runs `scripts/bootstrap-codespace.sh`: installs the AIMA Exercise Forms VSIX, creates a Python **`.venv`**, installs `requirements-book.txt` (Jupyter Book + **JupyterLab**), and runs **`jupyter-book build .`** so `_build/html` exists.

**Start** runs `scripts/codespace-start-services.sh`: serves the book on **8765**, starts **JupyterLab** on **8888** (token `aima`), and opens **`slides/AIMA-course.ipynb`** in the editor (Jupyter Slides welcome) so README is not the default focus.

## AIMA Exercise Forms extension

The **AIMA Exercise Forms** extension is installed from [InquiryInstitute/aima-exercise-forms](https://github.com/InquiryInstitute/aima-exercise-forms). It provides a sidebar view to work through exercises in `exercises/chNN/*.md` with a form-like UI.

If no release exists yet, the install step is skipped (`|| true`). To pin a different version, edit the URL in `scripts/bootstrap-codespace.sh`.
