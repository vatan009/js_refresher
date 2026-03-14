#!/usr/bin/env python3
from pathlib import Path
import sys

PDF_PATH = Path(__file__).resolve().parents[1] / 'next-gen-js-summary.pdf'
OUT_TXT = Path(__file__).resolve().parents[1] / 'next-gen-js-summary.txt'
README = Path(__file__).resolve().parents[1] / 'README.md'

try:
    from pypdf import PdfReader
except Exception as e:
    print('Missing dependency pypdf. Please run: pip install pypdf')
    sys.exit(2)

if not PDF_PATH.exists():
    print(f'PDF not found at {PDF_PATH}')
    sys.exit(1)

reader = PdfReader(str(PDF_PATH))
text_parts = []
for p in reader.pages:
    try:
        text_parts.append(p.extract_text() or '')
    except Exception:
        text_parts.append('')
full_text = '\n\n'.join(text_parts).strip()

# Save raw extract
OUT_TXT.write_text(full_text, encoding='utf-8')

# Create a simple summary: first 3 non-empty paragraphs or first 1000 chars
paras = [p.strip() for p in full_text.split('\n\n') if p.strip()]
summary = ''
for i in range(min(3, len(paras))):
    summary += paras[i] + '\n\n'
if not summary:
    summary = (full_text[:1000] + '...') if full_text else 'No extractable text.'

readme_contents = f"""# JS Refresher — Extracted Summary

Source PDF: next-gen-js-summary.pdf

## Short summary (auto-extracted)

{summary}

---

## Full extracted text

Saved to: next-gen-js-summary.txt

## How this README was generated

A small Python script `tools/extract_and_summarize_pdf.py` used `pypdf` to extract text from the PDF and produced this README and a plain-text extract.

### To reproduce locally

1. Install the dependency:

```
python -m pip install --user pypdf
```

2. Run the extractor from the `js_refresher` folder:

```
python tools/extract_and_summarize_pdf.py
```

"""

README.write_text(readme_contents, encoding='utf-8')
print('Done: generated README and text extract.')
