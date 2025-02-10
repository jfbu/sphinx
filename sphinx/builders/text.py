"""Plain-text Sphinx builder."""

from __future__ import annotations

from typing import TYPE_CHECKING

from docutils.io import StringOutput

from sphinx.builders import Builder
from sphinx.locale import __
from sphinx.util import logging
from sphinx.util.osutil import _last_modified_time
from sphinx.writers.text import TextTranslator, TextWriter

if TYPE_CHECKING:
    from collections.abc import Iterator, Set

    from docutils import nodes

    from sphinx.application import Sphinx
    from sphinx.util.typing import ExtensionMetadata

logger = logging.getLogger(__name__)


class TextBuilder(Builder):
    name = 'text'
    format = 'text'
    epilog = __('The text files are in %(outdir)s.')

    out_suffix = '.txt'
    allow_parallel = True
    default_translator_class = TextTranslator

    current_docname: str | None = None

    def init(self) -> None:
        # section numbers for headings in the currently visited document
        self.secnumbers: dict[str, tuple[int, ...]] = {}

    def get_outdated_docs(self) -> Iterator[str]:
        for docname in self.env.found_docs:
            if docname not in self.env.all_docs:
                yield docname
                continue
            targetname = self.outdir / (docname + self.out_suffix)
            try:
                targetmtime = _last_modified_time(targetname)
            except Exception:
                targetmtime = 0
            try:
                srcmtime = _last_modified_time(self.env.doc2path(docname))
                if srcmtime > targetmtime:
                    yield docname
            except OSError:
                # source doesn't exist anymore
                pass

    def get_target_uri(self, docname: str, typ: str | None = None) -> str:
        return ''

    def prepare_writing(self, docnames: Set[str]) -> None:
        self.writer = TextWriter(self)

    def write_doc(self, docname: str, doctree: nodes.document) -> None:
        self.current_docname = docname
        self.secnumbers = self.env.toc_secnumbers.get(docname, {})
        destination = StringOutput(encoding='utf-8')
        self.writer.write(doctree, destination)
        out_file_name = self.outdir / (docname + self.out_suffix)
        out_file_name.parent.mkdir(parents=True, exist_ok=True)
        try:
            with open(out_file_name, 'w', encoding='utf-8') as f:
                f.write(self.writer.output)
        except OSError as err:
            logger.warning(__('error writing file %s: %s'), out_file_name, err)

    def finish(self) -> None:
        pass


def setup(app: Sphinx) -> ExtensionMetadata:
    app.add_builder(TextBuilder)

    app.add_config_value('text_sectionchars', '*=-~"+`', 'env', types=frozenset({str}))
    app.add_config_value('text_newlines', 'unix', 'env', types=frozenset({str}))
    app.add_config_value('text_add_secnumbers', True, 'env', types=frozenset({bool}))
    app.add_config_value('text_secnumber_suffix', '. ', 'env', types=frozenset({str}))

    return {
        'version': 'builtin',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
