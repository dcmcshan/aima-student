# AIMA Assignment Devcontainer

This devcontainer is used when students open their assignment repo in GitHub Codespaces or in Cursor with Dev Containers.

## AIMA Exercise Forms extension

After the container is created, the **AIMA Exercise Forms** extension is installed from [InquiryInstitute/aima-exercise-forms](https://github.com/InquiryInstitute/aima-exercise-forms) (v0.1.0). It provides a sidebar view to work through exercises in `exercises/chNN/*.md` with a form-like UI.

If no release exists yet, the install step is skipped (`|| true`). To pin a different version, edit the `postCreateCommand` URL in `devcontainer.json` (e.g. `v0.2.0` and `aima-exercise-forms-0.2.0.vsix`).
