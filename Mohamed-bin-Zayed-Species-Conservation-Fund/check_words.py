"""Count words in each word-limited answer of an MBZ field-by-field draft.
Usage: python3 check_words.py Gustaf.md"""
import re, sys
text = open(sys.argv[1], encoding="utf-8").read()
parts = re.split(r"\n(?=\*\*\d[\d.]* |\*\*Project title|\*\*Previous relationship)", text)
ok = True
for part in parts:
    m = re.search(r"\(max (\d+) words\)", part.split("\n")[0])
    if not m:
        continue
    limit = int(m.group(1))
    body = "\n".join(l[1:] for l in part.split("\n") if l.startswith(">"))
    body = re.sub(r"[*_`]", "", body)
    n = len(body.split())
    flag = "OK " if n <= limit else "TOO LONG"
    ok &= n <= limit
    print(f"{flag} {n:>4}/{limit:<4} {part.split(chr(10))[0][:60]}")
sys.exit(0 if ok else 1)
