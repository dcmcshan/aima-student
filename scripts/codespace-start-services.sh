#!/usr/bin/env bash
# Started from the devcontainer postStart hook: static Jupyter Book + JupyterLab in the Codespace.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PY="${ROOT}/.venv/bin/python"
JUP="${ROOT}/.venv/bin/jupyter"

if [[ -d "${ROOT}/_build/html" && -x "${PY}" ]]; then
  nohup "${PY}" -m http.server 8765 --bind 127.0.0.1 --directory "${ROOT}/_build/html" >> /tmp/aima-jb-http.log 2>&1 &
fi

if [[ -x "${JUP}" ]]; then
  # Private per-user Codespace: simple token. Change for shared or public hosts.
  nohup "${JUP}" lab \
    --ip=0.0.0.0 \
    --port=8888 \
    --no-browser \
    --ServerApp.token=aima \
    --ServerApp.allow_origin='*' \
    >> /tmp/jupyter-lab.log 2>&1 &
fi

# Open Jupyter Slides welcome notebook in the editor (replaces README as the first thing you see).
if command -v code >/dev/null 2>&1 && [[ -f "${ROOT}/slides/AIMA-course.ipynb" ]]; then
  (
    sleep 8
    code -r "${ROOT}/slides/AIMA-course.ipynb" 2>/dev/null || true
  ) &
fi
