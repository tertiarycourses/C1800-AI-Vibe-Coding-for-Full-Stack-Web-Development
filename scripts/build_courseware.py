#!/usr/bin/env python3
"""Compatibility entry point for the high-depth v2 generator."""
from build_courseware_v2 import build_labs_and_md, build_guide, build_ppt, build_lp, all_labs, OUT

if __name__ == '__main__':
    OUT.mkdir(exist_ok=True)
    markdown = build_labs_and_md()
    build_guide(markdown)
    build_ppt()
    build_lp()
    print('courseware generated:', sum(1 for _ in all_labs()), 'labs')
