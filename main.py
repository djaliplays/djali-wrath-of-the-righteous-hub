"""
!! WARNING

Does not work together with includes macro, breaks it, workaround is only
allows macros plugin to work on select pages.

Will look into this (and macro itself) later.
Just had claude make me this macro.
It has a couple issues, for now it's working okay.


mkdocs-macros-plugin module.

Provides a `youtube()` macro for embedding a clickable thumbnail + title +
collapsible summary for a YouTube video, without loading a live iframe
player for every video on a page (handy for a page that lists many videos).

Setup
-----
1. pip install mkdocs-macros-plugin
2. mkdocs.yml:

     plugins:
       - macros

     extra_css:
       - stylesheets/youtube.css

   This file must sit next to mkdocs.yml (mkdocs-macros-plugin looks for
   main.py at the project root by default; set `module_name` under the
   macros plugin config if you'd rather put it somewhere else).

Usage (in any .md page)
------------------------
    {{ youtube("dQw4w9WgXcQ", "Some Build Guide", "Covers the basics of...") }}

`id` accepts a bare 11-character video ID, or any common YouTube URL
(watch?v=, youtu.be/, embed/, shorts/) — paste whichever you have.
`summary` is optional and rendered through Markdown, so you can use
**bold**, links, etc. inside it.
"""

import re

import markdown as _markdown

_YOUTUBE_URL_RE = re.compile(
    r"(?:youtube\.com/(?:watch\?v=|embed/|v/|shorts/)|youtu\.be/)([A-Za-z0-9_-]{11})"
)
_BARE_ID_RE = re.compile(r"^[A-Za-z0-9_-]{11}$")


def _extract_id(value: str) -> str:
    value = value.strip()
    if _BARE_ID_RE.match(value):
        return value
    match = _YOUTUBE_URL_RE.search(value)
    if match:
        return match.group(1)
    raise ValueError(f"youtube macro: couldn't find a video ID in {value!r}")


def define_env(env):

    @env.macro
    def youtube(id, title, summary="", thumb="hqdefault"):
        video_id = _extract_id(id)
        thumb_url = f"https://img.youtube.com/vi/{video_id}/{thumb}.jpg"
        watch_url = f"https://www.youtube.com/watch?v={video_id}"

        summary = (summary or "").strip()
        summary_block = ""
        if summary:
            summary_html = _markdown.markdown(summary)
            summary_block = f"""
    <details class="video-card__summary">
      <summary>Summary</summary>
      <div class="video-card__summary-body">
{summary_html}
      </div>
    </details>"""

        return f"""<div class="video-card" markdown="0">
  <a class="video-card__thumb" href="{watch_url}" target="_blank" rel="noopener">
    <img src="{thumb_url}" alt="{title}" loading="lazy">
    <span class="video-card__play"></span>
  </a>
  <div class="video-card__body">
    <a class="video-card__title" href="{watch_url}" target="_blank" rel="noopener">{title}</a>{summary_block}
  </div>
</div>"""
