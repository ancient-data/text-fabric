URLS=[
"tf/index.html",
"tf/advanced/index.html",
"tf/advanced/options.html",
"tf/advanced/condense.html",
"tf/advanced/sections.html",
"tf/advanced/unravel.html",
"tf/advanced/render.html",
"tf/advanced/zipdata.html",
"tf/advanced/links.html",
"tf/advanced/volumes.html",
"tf/advanced/display.html",
"tf/advanced/text.html",
"tf/advanced/repo.html",
"tf/advanced/settings.html",
"tf/advanced/app.html",
"tf/advanced/search.html",
"tf/advanced/find.html",
"tf/advanced/tables.html",
"tf/advanced/highlight.html",
"tf/advanced/helpers.html",
"tf/advanced/data.html",
"tf/tools/index.html",
"tf/tools/release.html",
"tf/tools/nbconvert.html",
"tf/tools/pdocs.html",
"tf/tools/xmlschema.html",
"tf/tools/checkdiffs.html",
"tf/clean.html",
"tf/core/index.html",
"tf/core/computed.html",
"tf/core/otypefeature.html",
"tf/core/fabric.html",
"tf/core/locality.html",
"tf/core/oslotsfeature.html",
"tf/core/api.html",
"tf/core/text.html",
"tf/core/nodefeature.html",
"tf/core/nodes.html",
"tf/core/timestamp.html",
"tf/core/edgefeature.html",
"tf/core/helpers.html",
"tf/core/prepare.html",
"tf/core/data.html",
"tf/fabric.html",
"tf/lib.html",
"tf/dataset/index.html",
"tf/dataset/nodemaps.html",
"tf/dataset/modify.html",
"tf/server/index.html",
"tf/server/web.html",
"tf/server/command.html",
"tf/server/monitor.html",
"tf/server/kernel.html",
"tf/server/servelib.html",
"tf/server/serve.html",
"tf/server/start.html",
"tf/server/wrap.html",
"tf/about/index.html",
"tf/about/releasesold.html",
"tf/about/datasharing.html",
"tf/about/use.html",
"tf/about/variants.html",
"tf/about/datamodel.html",
"tf/about/background.html",
"tf/about/code.html",
"tf/about/optimizations.html",
"tf/about/manual.html",
"tf/about/searchdesign.html",
"tf/about/apps.html",
"tf/about/volumes.html",
"tf/about/browser.html",
"tf/about/usefunc.html",
"tf/about/releases.html",
"tf/about/clientmanual.html",
"tf/about/fileformats.html",
"tf/about/searchusage.html",
"tf/about/install.html",
"tf/about/faq.html",
"tf/about/displaydesign.html",
"tf/about/tests.html",
"tf/about/corpora.html",
"tf/capable.html",
"tf/search/index.html",
"tf/search/spin.html",
"tf/search/semantics.html",
"tf/search/graph.html",
"tf/search/relations.html",
"tf/search/search.html",
"tf/search/syntax.html",
"tf/search/searchexe.html",
"tf/search/stitch.html",
"tf/app.html",
"tf/parameters.html",
"tf/cheatsheet.html",
"tf/volumes/index.html",
"tf/volumes/collect.html",
"tf/volumes/extract.html",
"tf/client/index.html",
"tf/client/make/index.html",
"tf/client/make/build.html",
"tf/client/make/gh.html",
"tf/client/make/help.html",
"tf/convert/index.html",
"tf/convert/app/index.html",
"tf/convert/app/app.html",
"tf/convert/variants.html",
"tf/convert/tf.html",
"tf/convert/walker.html",
"tf/convert/recorder.html",
"tf/convert/tei.html",
"tf/convert/mql.html",
"tf/writing/index.html",
"tf/writing/transcription.html",
"tf/writing/greek.html",
"tf/writing/arabic.html",
"tf/writing/hebrew.html",
"tf/writing/syriac.html",
"tf/writing/neoaramaic.html"
];
INDEX=[
{
"ref":"tf",
"url":0,
"doc":"![logo](images/tf.png)  Text-Fabric A corpus of ancient texts and (linguistic) annotations represents a large body of knowledge. Text-Fabric makes that knowledge accessible to programmers and non-programmers. Text-Fabric is machinery for processing such corpora as annotated graphs. It treats corpora and annotations as data, much like big tables, but without loosing the rich structure of text, such as embedding and multiple representations. It deals with text in a state where all markup is gone, but where the complete logical structure still sits in the data. Whether a corpus comes from plain texts, OCR output, databases, XML, TEI: Text-Fabric has support to convert it to single column files, where each file corresponds with a  feature of the text. The Python library  tf can be used to collect a bunch of features and display it as an annotated text. What ties the features together are natural numbers, that serve to anchor the elementary positions in the text as well as the relevant structures within the text. When Text-Fabric loads a dataset of features, you can instruct it to get the features from anywhere. That means it supports workflows where annotations are produced by third parties and can be used against the original corpus,  without additional work . It also facilitates mappings between ongoing versions of the corpus, so that annotations made on older versions can be ported to newer versions without redoing the annotation creation.  Straight to  .  Release notes ( tf.about.releases )  Install ( tf.about.install )  FAQ ( tf.about.faq )  Browser ( tf.about.browser )  Search Client ( tf.about.clientmanual ) simplified ( tf.about.manual )  Use ( tf.about.use )  Volumes and collections ( tf.about.volumes )  Search ( tf.about.searchusage )  API ( tf.cheatsheet )  Corpora ( tf.about.corpora )  Data sharing ( tf.about.datasharing )  Data Structures and Algorithms ( tf.about.datamodel ,  tf.about.searchdesign ,  tf.about.displaydesign )  File Format ( tf.about.fileformats ,  tf.about.optimizations )  Converting to TF ( tf.convert.walker ,  tf.convert.mql )  Exporting data and reimporting it with enrichments ( tf.convert.recorder )  Dataset manipulation ( tf.dataset.modify and  tf.dataset.nodemaps.Versions )  Crossing versions of datasets ( tf.dataset.nodemaps )  Code Organisation ( tf.about.code )  Author  Author : [Dirk Roorda](https: pure.knaw.nl/portal/en/persons/dirk-roorda) Cite Text-Fabric as [DOI: 10.5281/zenodo.592193](https: doi.org/10.5281/zenodo.592193).  Acknowledgements Text-Fabric is a matter of putting a few good ideas by others into practice. While I wrote most of the code, a product like Text-Fabric is unthinkable without the contributions of avid users that take the trouble to give feedback and file issues, and have the zeal and stamina to hold on when things are frustrating and bugs overwhelming, and give encouragement when they are happy. In particular thanks to  Cale Johnson  Camil Staps  Christian H\u00f8ygaard-Jensen  Christiaan Erwich  Cody Kingham  Ernst Boogert  Eliran Wong  Gyusang Jin  James Cu\u00e9nod  Johan de Joode  Kyoungsik Kim  Martijn Naaijer  Oliver Glanz  Stephen Ku  Willem van Peursen  2022-now  2014-2022 Special thanks to Henk Harmsen for nudging me into a corner where I was exposed to the Hebrew Text Database, and for letting me play there for almost longer than could be defended. And to Andrea Scharnhorst for understanding and encouragement on this path.  More resources Tutorials:  [BHSA](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/start.ipynb)  [DSS](https: nbviewer.jupyter.org/github/etcbc/dss/blob/master/tutorial/start.ipynb)  [OldBabylonian](https: nbviewer.jupyter.org/github/Nino-cunei/oldbabylonian/blob/master/tutorial/start.ipynb)  [OldAssyrian](https: nbviewer.jupyter.org/github/Nino-cunei/oldassyrian/blob/master/tutorial/start.ipynb)  [Uruk](https: nbviewer.jupyter.org/github/Nino-cunei/uruk/blob/master/tutorial/start.ipynb)  [Q'uran](https: nbviewer.jupyter.org/github/q-ran/quran/blob/master/tutorial/start.ipynb)  and more via  tf.about.corpora .  - Papers:  [Coding the Hebrew Bible](https: doi.org/10.1163/24523666-01000011)  [Parallel Texts in the Hebrew Bible, New Methods and Visualizations ](https: arxiv.org/abs/1603.01541)  [The Hebrew Bible as Data: Laboratory - Sharing - Experiences](https: www.ubiquitypress.com/site/chapters/10.5334/bbi.18/) (preprint: [arxiv](https: arxiv.org/abs/1501.01866  [LAF-Fabric: a data analysis tool for Linguistic Annotation Framework with an application to the Hebrew Bible](https: arxiv.org/abs/1410.0286)  [Annotation as a New Paradigm in Research Archiving](https: arxiv.org/abs/1412.6069)  - Presentations: [Hands on with Dead Sea Scrolls, Old Babylonian Tablets, and the Q'uran](https: nbviewer.jupyter.org/github/annotation/tutorials/blob/master/lorentz2020/start.ipynb) (Lorentz Leiden 2020) [Text-Fabric in Context](https: www.slideshare.net/dirkroorda/tf-incontext) (Lorentz Leiden 2020) [Data Analysis in Ancient Corpora](https: www.slideshare.net/dirkroorda/ancient-corpora-analysis) (Cambridge 2019, with Cody Kingham) [Text-Fabric as IKEA logistics](https: nbviewer.jupyter.org/github/etcbc/lingo/blob/master/presentations/Copenhagen2018.ipynb) (Copenhagen 2017) Here is a motivational [presentation](http: www.slideshare.net/dirkroorda/text-fabric), given just before [SBL 2016](https: global-learning.org/mod/forum/discuss.php?d=22) in the Lutheran Church of San Antonio."
},
{
"ref":"tf.advanced",
"url":1,
"doc":" Advanced API A higher level API so that users can get the corpus data in a simple way and can display materials of their corpus in an intuitive way. There are many scenarios in which you can work with the advanced API: in a Python script or in a notebook or in the TF-browser. If you  tf.server.start the TF browser, a  tf.server.kernel process is started that holds the TF data. Then a  tf.server.web server is started that communicates with the kernel, much like how webserver communicates with a database. The advanced API supports all these scenarios and is divided into these parts:  Start up, see  tf.app.use (call up a corpus)  App, see  tf.advanced.app (the API of a corpus)  Display, see  tf.advanced.display (displaying material)  Linking, see  tf.advanced.links (generating useful links)  Search, see  tf.advanced.search (control the search engine)  Sections, see  tf.advanced.sections (headings for sections and structure) Working behind the scenes:  Settings, see  tf.advanced.settings (configure an app)  Options for display, see  tf.advanced.options (tweak the display)  Data, see  tf.advanced.data (load data)  Repo, see  tf.advanced.repo (negotiate with the data back-end) Lower level:  Condense, see  tf.advanced.condense (distribute query results over containers)  Find, see  tf.advanced.find (finding TF apps)  Highlight, see  tf.advanced.highlight (highlight nodes in displays)  Tables, see  tf.advanced.tables (tabular structures)  Text, see  tf.advanced.text (text formats)  ZipData, see  tf.advanced.zipdata (package and zip TF datasets for sharing) Lowest level:  Helpers, see  tf.advanced.helpers (the usual riff-raff)"
},
{
"ref":"tf.advanced.options",
"url":2,
"doc":" Display Settings. Display options are used by tf.advanced.display.plain and tf.advanced.display.pretty and other display functions. This class manages  the provisining of options with defaults,  the overriding options by passing options as arguments to display functions  the retrieval of option values by the rest of the application.  ! note \"distinction between interface options and display options\"  all interface options are also display options and can be passed as arguments to display functions  interface options have a checkbox in the TF browser Parameters      baseTypes: string | iterable, optional None  interface option Node types at the bottom of pretty displays. The default is app dependent, usually the slot type of the corpus. condensed: boolean, optional False  interface option indicates one of two modes of displaying the result list:   True : instead of showing all results one by one, we show container nodes with all results in it highlighted. That way, we blur the distinction between the individual results, but it is easier to oversee where the results are. This is how SHEBANQ displays its query results.  See also the parameter  condenseType .   False : make a separate display for each result tuple. This gives the best account of the exact result set.  ! caution \"mixing up highlights\" Condensing may mix-up the highlight coloring. If a node occurs in two results, at different positions in the tuple, the  colorMap wants to assign it two colors! Yet one color will be chosen, and it is unpredictable which one. condenseType: string, optional None  interface option The type of container to be used for condensing results. The default is app dependent, usually  verse or  tablet . fmt: string, optional None  interface option  fmt is the text format that will be used for the representation. E.g.  text-orig-full .  ! hint \"Text formats\" Use  T.formats to inspect what text formats are available in your corpus. hideTypes: boolean | optional True  interface option If  True , hidden types are in fact hidden, otherwise the hiding of types has no effect. hiddenTypes: string | iterable, optional None  interface option Node types that will not be shown in displays. All node types can be hidden, except the slot type and the section types. Structure types can be hidden.  ! hint \"Meaning\" Nodes of hidden types will not be skipped, but they do not add visible structure to the display. The material under those nodes will still be displayed. For example, if the corpus has verses divided into half verses, and you are not interested in the half verse division, you can make half verses hidden. The content of the half verses is still shown, but the half verse division is gone. The default is app dependent, usually the empty set. lineNumbers: boolean, optional False  interface option indicates whether line numbers should be displayed.  ! note \"source data\" Line numbers are with respect to the source data file that is contains the origin material of the node in question, if a datasource provides a feature that contains line numbers.  ! caution \"configuration\" Whether a corpus has line numbers, and in which feature they are stored for which node types is configured in a corpus dependent app. If the corpus has no line numbers, the default is  None . plainGaps: boolean, optional True  interface option indicates whether gaps types should be displayed in plain displays. In pretty displays gaps are marked by dotted left-right borders of the nodes around the gaps. In plain displays such borders are generally disruptive, but it is possible to show them. prettyTypes: boolean, optional False  interface option indicates whether node types should always be displayed in pretty displays. The node type of slot nodes is never displayed. queryFeatures: boolean, optional True  interface option indicates whether pretty displays should show the features mentioned in the last query and their values. showGraphics: boolean, optional True  interface option indicates whether plain and pretty displays should include associated graphic elements.  ! caution \"configuration\" Whether a corpus has graphics for some nodetypes and how to get them is configured in a corpus dependent app. If the corpus has no graphics, the default is  None . showMath: boolean, optional False  interface option indicates whether plain and pretty displays should interpret the  $ to mark mathematical formulas in TeX notation.  ! caution \"real dollars\" If you have a corpus where the character  $ is used in an ordinary way, this option should be set to  False . standardFeatures: boolean, optional True  interface option indicates whether pretty displays should show standard features and their values. withLabels: boolean, optional True  interface option indicates whether pretty displays should show labels. withNodes: boolean, optional False  interface option indicates whether node numbers should be displayed.  ! hint \"zooming in\" If you are in a Jupyter notebook, you can inspect in a powerful way by setting  withNodes=True . Then every part of a pretty display shows its node number, and you can use the following APIs to look up all information about each node that the corpus has to offer:   F :  tf.core.nodefeature.NodeFeature   E :  tf.core.edgefeature.EdgeFeature   L :  tf.core.locality.Locality   T :  tf.core.text.Text withTypes: boolean, optional False  interface option indicates whether node types should be displayed. The node type of slot nodes is never displayed. colorMap: dict, optional None Which nodes of a tuple (or list of tuples) will be highlighted. If  colorMap is  None or missing, all nodes will be highlighted with the default highlight color, which is yellow. But you can assign different colors to the members of the tuple:  colorMap must be a dictionary that maps the positions in a tuple to a color.  If a position is not mapped, it will not be highlighted.  If it is mapped to the empty string, it gets the default highlight color.  Otherwise, it should be mapped to a string that is a valid [CSS color](https: developer.mozilla.org/en-US/docs/Web/CSS/color_value).  ! hint \"color names\" The link above points to a series of handy color names and their previews.  ! note \"highlights takes precedence over colorMap\" If both  highlights and  colorMap are given,  colorMap is ignored. If you need to micro-manage,  highlights is your thing. Whenever possible, use  colorMap . end: int, optional None  end is the end point in the iterable of results. If  None , displaying will stop after the end of the iterable. extraFeatures: string | iterable, optional () A string or iterable of feature names. These features will be loaded automatically. In pretty displays these features will show up as  feature=value , provided the value is not  None , or something like None.  ! hint \"Automatic loading\" These features will load automatically, no explicit loading is necessary.  ! hint \"values from other nodes\" Suppose you want to display a value from a related node, e.g. a  gloss that is available on  lex nodes but not on  word nodes, and you want to show it on the word nodes. Then you may specifiy  lex:gloss , meaning that Text-Fabric will look up a  lex node from the current node (by means of  L.u(w, otype='lex') , and if it finds one, it will read the  gloss feature from it. full: boolean, optional False For pretty displays: indicates that the whole object should be displayed, even if it is big.  ! hint \"Big objects\" Big objects are objects of a type that is bigger than the default condense type. highlights: dict | set, optional {} When nodes such as verses and sentences and lines and cases are displayed by  plain() or  pretty() , their contents is also displayed. You can selectively highlight those parts.  highlights={} is a set or mapping of nodes that should be highlighted. Only nodes that are involved in the display will be highlighted. If  highlights is a set, its nodes will be highlighted with a default color (yellow). If it is a dictionary, it should map nodes to colors. Any color that is a valid [CSS color](https: developer.mozilla.org/en-US/docs/Web/CSS/color_value) qualifies. If you map a node to the empty string, it will get the default highlight color. Highlights in plain display will be done, also for nodes deeply buried in the top node. Slots are higlighted by coloring the background, all other nodes by colored frames around their material.  ! note \"one big highlights dictionary\" It is OK to first compose a big highlights dictionary for many tuples of nodes, and then run  prettyTuple() for many different tuples with the same  highlights . It does not harm performance if  highlights maps lots of nodes outside the tuple as well. noneValues: set, optional None A set of values for which no display should be generated. The default set is  None and the strings  NA ,  none ,  unknown .  ! hint \"None is useful\" Keep  None in the set. If not, all custom features will be displayed for all kinds of nodes. So you will see clause types on words, and part of speech on clause atoms, al with value  None .  ! hint \"Suppress common values\" You can use  noneValues also to suppress the normal values of a feature, in order to attract attention to the more special values, e.g. noneValues={None, 'NA', 'unknown', 'm', 'sg', 'p3'}  ! caution \"None values affect all features\" Beware of putting to much in  noneValues . The contents of  noneValues affect the display of all features, not only the custom features. skipCols: set, optional set() indicates columns to skip in  show() ,  table() ; no effect on  prettyTuple() and  plainTuple() . Also no effect if  condensed is True. The columns are not really removed, but the cells in the columns become empty. So it will not disturb the highlighting of the tuples involved, and it does not disturb the working of  colorMap . The value may be a space-separated string of numbers, or an iterable of integers. Columns start at 1. start: integer, optional None  start is the starting point for displaying the iterable of results. (1 is the first one). If  None , displaying starts at the first element of the iterable. suppress: set, optional set() a set of names of features that should NOT be displayed. By default, quite a number of features is displayed for a node. If you find they clutter the display, you can turn them off selectively. tupleFeatures: iterable of 2-tuples, optional () A bit like \"extraFeatures\" above, but more intricate. Only meant to steer the  A.export() function below into outputting the features you choose. It should be a tuple of pairs (i, features) which means that to member  i of a result tuple we assign extra  features .  features may be given as an iterable or a space separated string of feature names. withPassage: boolean or set, optional True indicates whether a passage label should be put next to a displayed node or tuple of nodes. When passed with  table() , or  plainTuple() , the value may also be a set of integers, indicating the columns whose nodes will be linked with a web link (the first column is column 1)."
},
{
"ref":"tf.advanced.options.OptionsCurrent",
"url":2,
"doc":""
},
{
"ref":"tf.advanced.options.OptionsCurrent.get",
"url":2,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.options.OptionsCurrent.set",
"url":2,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.options.Options",
"url":2,
"doc":""
},
{
"ref":"tf.advanced.options.Options.reset",
"url":2,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.options.Options.setup",
"url":2,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.options.Options.normalize",
"url":2,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.options.Options.check",
"url":2,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.options.Options.distill",
"url":2,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.options.Options.consume",
"url":2,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.condense",
"url":3,
"doc":""
},
{
"ref":"tf.advanced.condense.condense",
"url":3,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.condense.condenseSet",
"url":3,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.sections",
"url":4,
"doc":"Section There is support for section headings. Text-Fabric datasets may specify two kinds of sections in their  otext.tf configuration feature:  Sections At most three levels:  level 1 is for big things, like books  level 2 is for intermediate things, like chapters, that fit on one page or just a few pages  level 3 is for small things, such as lines. Text-Fabric uses these levels in the Text-Fabric browser, to divide your corpus into divisions that can conveniently be displayed to you in the browser.  Structure Any number of levels. You can use them to divide your corpus into units that follow the logic of your corpus, without regard for how they are to be displayed."
},
{
"ref":"tf.advanced.sections.sectionsApi",
"url":4,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.sections.nodeFromSectionStr",
"url":4,
"doc":"Find the node of a section string. Compare  tf.core.text.Text.nodeFromSection . Parameters      sectionStr: string Must be a valid section specficiation in the language specified in  lang . The string may specify a section 0 level only (book/tablet), or section 0 and 1 levels (book/tablet chapter/column), or all levels (book/tablet chapter/column verse/line).  ! hint \"examples\" Genesis Genesis 1 Genesis 1:1 P005381 P005381 1 P005381 1:1 lang: string, optional en The language assumed for the section parts, as far as they are language dependent. Must be a 2-letter language code. Returns    - node | error: integer | string Depending on what is passed, the result is a node of section level 0, 1, or 2. If there is no such section heading, an error string is returned.",
"func":1
},
{
"ref":"tf.advanced.sections.sectionStrFromNode",
"url":4,
"doc":"The heading of a section to which a node belongs. Compare  tf.core.text.Text.nodeFromSection . node: integer The node from which we obtain a section specification. lastSlot: boolean, optional False Whether the reference node will be the last slot contained by the  node argument or the first node. Otherwise it will be the first slot. lang: string, optional en The language assumed for the section parts, as far as they are language dependent. Must be a 2-letter language code. fillup: boolean, optional False Same as for  tf.core.text.Text.sectionTuple . Returns    - section heading:string Corresponds to the reference node. The result is built from the labels of the individual section levels, with dummies for missing parts if  fillup is true.",
"func":1
},
{
"ref":"tf.advanced.sections.structureStrFromNode",
"url":4,
"doc":"The heading of a structure to which a node belongs. Compare  tf.core.text.Text.headingFromNode . node: integer The node from which we obtain a structure specification. Returns    - structure heading:string Corresponds to the first structure node containing the first slot of  n . The result is built from the labels of the individual section levels.",
"func":1
},
{
"ref":"tf.advanced.unravel",
"url":5,
"doc":" Unravel Unraveling means to transform a neighbourhood of nodes into a tree of node fragment. That sounds simple, but quite a few ideas have to work together to make it work. It is described at length in  tf.about.displaydesign ."
},
{
"ref":"tf.advanced.unravel.OuterSettings",
"url":5,
"doc":"OuterSettings(slotType, ltr, fmt, textClsDefault, textMethod, getText, upMethod, slotsMethod, lookupMethod, browsing, webLink, getGraphics)"
},
{
"ref":"tf.advanced.unravel.OuterSettings.slotType",
"url":5,
"doc":"The slot type of the dataset."
},
{
"ref":"tf.advanced.unravel.OuterSettings.ltr",
"url":5,
"doc":"writing direction."
},
{
"ref":"tf.advanced.unravel.OuterSettings.fmt",
"url":5,
"doc":"the currently selected text format."
},
{
"ref":"tf.advanced.unravel.OuterSettings.textClsDefault",
"url":5,
"doc":"Default css class for full text."
},
{
"ref":"tf.advanced.unravel.OuterSettings.textMethod",
"url":5,
"doc":"Method to print text of a node according to a text format:  tf.core.text.Text.text "
},
{
"ref":"tf.advanced.unravel.OuterSettings.getText",
"url":5,
"doc":"Method to get the text for a node according to a template:  tf.advanced.helpers.getText "
},
{
"ref":"tf.advanced.unravel.OuterSettings.upMethod",
"url":5,
"doc":"Method to move from a node to its first embedder:  tf.core.locality.Locality.u "
},
{
"ref":"tf.advanced.unravel.OuterSettings.slotsMethod",
"url":5,
"doc":"Method to get the slots of a node:  tf.core.oslotsfeature.OslotsFeature.s "
},
{
"ref":"tf.advanced.unravel.OuterSettings.lookupMethod",
"url":5,
"doc":"Method to get the value of a node feature:  tf.core.api.Api.Fs "
},
{
"ref":"tf.advanced.unravel.OuterSettings.browsing",
"url":5,
"doc":"whether we work for the Text-Fabric browser or for a Jupyter notebook"
},
{
"ref":"tf.advanced.unravel.OuterSettings.webLink",
"url":5,
"doc":"Method to produce a web link to a node:  tf.advanced.links.webLink "
},
{
"ref":"tf.advanced.unravel.OuterSettings.getGraphics",
"url":5,
"doc":"Method to fetch graphics for a node. App-dependent.See  tf.advanced.settings under  graphics ."
},
{
"ref":"tf.advanced.unravel.NodeProps",
"url":5,
"doc":"NodeProps(nType, isSlot, isSlotOrDescend, descend, isBaseNonSlot, isLexType, lexType, lineNumberFeature, featuresBare, features, textCls, hlCls, hlStyle, cls, hasGraphics, after, plainCustom)"
},
{
"ref":"tf.advanced.unravel.NodeProps.nType",
"url":5,
"doc":"The node type of the current node."
},
{
"ref":"tf.advanced.unravel.NodeProps.isSlot",
"url":5,
"doc":"Whether the current node is a slot node."
},
{
"ref":"tf.advanced.unravel.NodeProps.isSlotOrDescend",
"url":5,
"doc":"Whether the current node is a slot node or has a type to which the current text format should descend. This type is determined by the current text format."
},
{
"ref":"tf.advanced.unravel.NodeProps.descend",
"url":5,
"doc":"When calling T.text(n, descend= ) for this node, what should we substitute for the  ?"
},
{
"ref":"tf.advanced.unravel.NodeProps.isBaseNonSlot",
"url":5,
"doc":"Whether the current node has a type that is currently a baseType, i.e. a type where a pretty display should stop unfolding."
},
{
"ref":"tf.advanced.unravel.NodeProps.isLexType",
"url":5,
"doc":"Whether nodes of type are lexemes."
},
{
"ref":"tf.advanced.unravel.NodeProps.lexType",
"url":5,
"doc":"If nodes of this type have lexemes in another type, this is that type."
},
{
"ref":"tf.advanced.unravel.NodeProps.lineNumberFeature",
"url":5,
"doc":"Feature with source line numbers of nodes of this type."
},
{
"ref":"tf.advanced.unravel.NodeProps.featuresBare",
"url":5,
"doc":"Features to display in the labels of pretty displays without their names"
},
{
"ref":"tf.advanced.unravel.NodeProps.features",
"url":5,
"doc":"Features to display in the labels of pretty displays with their names"
},
{
"ref":"tf.advanced.unravel.NodeProps.textCls",
"url":5,
"doc":"The text Css class of the current node."
},
{
"ref":"tf.advanced.unravel.NodeProps.hlCls",
"url":5,
"doc":"The highlight Css class of the current node, both for pretty and plain modes, keyed by boolean 'is pretty'"
},
{
"ref":"tf.advanced.unravel.NodeProps.hlStyle",
"url":5,
"doc":"The highlight Css color style of the current node, both for pretty and plain modes, keyed by boolean 'is pretty'"
},
{
"ref":"tf.advanced.unravel.NodeProps.cls",
"url":5,
"doc":"A dict of several classes for the display of the node: for the container, the label, and the children of the node; might be set by prettyCustom"
},
{
"ref":"tf.advanced.unravel.NodeProps.hasGraphics",
"url":5,
"doc":"Whether this node type has graphics."
},
{
"ref":"tf.advanced.unravel.NodeProps.after",
"url":5,
"doc":"Whether the app defines a custom method to generate material after a child.It is a dict keyed by node type whose values are the custom methods."
},
{
"ref":"tf.advanced.unravel.NodeProps.plainCustom",
"url":5,
"doc":"Whether the app defines a custom method to plain displays for this node type."
},
{
"ref":"tf.advanced.unravel.TreeInfo",
"url":5,
"doc":"Tree properties during plain() or pretty(). Collects  NodeProps ,  OuterSettings , and  tf.advanced.options ."
},
{
"ref":"tf.advanced.unravel.TreeInfo.update",
"url":5,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.unravel.TreeInfo.get",
"url":5,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.unravel.unravel",
"url":5,
"doc":"Unravels a node and its graph-neighbourhood into a tree of fragments. Parameters      n: integer The node to unravel. isPlain: boolean, optional True Whether to unravel for plain display. Otherwise it is for pretty display. The tree structure is the same for both, but the tree is also dressed up with formatting information, which may differ for both modes. explain: boolean or  'details' : Whether to pretty-print the tree. If the value  details is passed, most of the dressing information of the tree is also shown.  options: Any amount of legal display options. These will influence the dressing information. Returns    - chunk: tuple  (node, (begin slot, end slot  The top of the tree has  None info: TreeInfo dressing information in the form of key value pairs, among which:  options (the display options that are in force),  settings (properties of node independent properties),  props (properties of the node of the chunk),  boundaryCls (css info for the boundaries of the chunk). The top of the tree has only has options and settings. children: list subtrees where each subtree is again a tuple of chunk, info and children.",
"func":1
},
{
"ref":"tf.advanced.render",
"url":6,
"doc":" Render Rendering is the process of generating HTML for a node, taking into account display options ( tf.advanced.options ) and app settings ( tf.advanced.settings ). It is organized as an  unravel step ( tf.advanced.unravel ), that generates a tree of node fragments followed by an HTML generating step, that generates HTML for a tree in a recursive way. The  unravel step retrieves all relevant settings and options and stores them in the tree in such a way that the essential information for rendering a subtree is readily available at the top of that subtree.  Information shielding The recursive render step does not have to consult the  app object anymore, because all information it needs from the  app object is stored in the tree, and all methods that need to be invoked on the  app object are also accessible directly from an attribute in the tree."
},
{
"ref":"tf.advanced.render.render",
"url":6,
"doc":"Renders a node, in plain or pretty mode.",
"func":1
},
{
"ref":"tf.advanced.zipdata",
"url":7,
"doc":""
},
{
"ref":"tf.advanced.zipdata.zipData",
"url":7,
"doc":"Zips TF data into a single file, ready to be attached to a release. Parameters      backend: string The backend for which the zip file is meant ( github ,  gitlab , etc). org, repo: string Where the corpus is located on the backend, relative: string, optional \"tf\" The subdirectory of the repo that will be zipped. version: string, optional None If passed, only data of this version is zipped, otherwise all versions will be zipped. tf: boolean, optional True Whether the data to be zipped are tf feature files or other kinds of data. keep: boolean, optional True Whether previously generated zipfiles in the destination directory should be kept or deleted. source: string, optional None Top directory under which the repository is found, if None; this directory is given by the backend:  ~/github ,  ~/gitlab , etc. dest: string, optional None Top directory under which the generated zipfiles are saved; if None, this directory under the user's Downloads directory and further determined by the backend:  ~/Downloads/github ,  ~/Downloads/gitlab , etc.",
"func":1
},
{
"ref":"tf.advanced.zipdata.main",
"url":7,
"doc":" USAGE  sh text-fabric-zip  help text-fabric-zip {org}/{repo}/{relative} text-fabric-zip {org}/{repo}/{relative}  backend=gitlab.huc.knaw.nl    EFFECT Zips text-fabric data from your local github/gitlab repository into a release file, ready to be attached to a github release. Your repo must sit in  ~/github/ org / repo or in  ~/gitlab/ org / repo or in whatever Gitlab backend you have chosen. Your TF data is assumed to sit in the toplevel tf directory of your repo. But if it is somewhere else, you can pass relative, e.g phrases/heads/tf It is assumed that your tf directory contains subdirectories according to the versions of the main datasource. The actual .tf files are in those version directories. Each of these version directories will be zipped into a separate file. The resulting zip files end up in ~/Downloads/ backend / org -release/ repo and the are named  relative - version .zip (where the / in relative have been replaced by -)",
"func":1
},
{
"ref":"tf.advanced.links",
"url":8,
"doc":"Produce links to Text-Fabric data and links from nodes to web resources."
},
{
"ref":"tf.advanced.links.linksApi",
"url":8,
"doc":"Produce the link API. The link API provides methods to maps nodes to urls of web resources. It also computes several provenance and documentation links from the configuration settings of the corpus. If a single volume has been loaded, there will be added a provenance notice to the provenance data of the work as a whole, essentially stating which volume from the work is being used and what top-level sections of the work are part of it. Parameters      app: obj The high-level API object silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp Normally the silent parameter is taken from the app, but when we do an  A.reuse() we force  silent=\"deep\" .",
"func":1
},
{
"ref":"tf.advanced.links.header",
"url":8,
"doc":"Generate a colofon of the app. This colofon will be displayed after initializing the advanced API, and it is packed with provenance and documentation links. Parameters      allMeta: boolean, optional False If True, includes all metadata of all features. This leads to big stretches of largely redundant information in html details elements. It is not visually cumbersome, but notebooks may grow excessively if you load many datasets many times. So, if False, it will suppress all that metadata except the description keys.",
"func":1
},
{
"ref":"tf.advanced.links.webLink",
"url":8,
"doc":"Maps a node to a web resource. Usually called as  A.webLink( .) The mapping is quite sophisticated. It will do sensible things for section nodes and lexeme nodes, dependent on how they are configured in the app's  config.yaml .  ! hint \"Customizable\" You can customize the behaviour of  webLink() to the needs of your corpus by providing appropriate values in its  config.yaml , especially for  webBase ,  webLang ,  webOffset ,  webFeature ,  webUrl ,  webUrlLex , and  webHint . Parameters      n: int A node text: string/HTML, optional default  None The text of the link. If left out, a suitable text will be derived from the node. clsName: string, optional default  None A CSS class name to add to the resulting link element urlOnly: boolean, optional False If True, only the url will be returned. _asString: boolean, optional False Whether to deliver the result as a piece of HTML or to display the link on the (Jupyter) interface. _noUrl: boolean, optional False Whether to put the generated url in the  href attribute. It can be inhibited. This is useful for the TF-browser, which may want to attach an action to the link and navigate to a location based on other attributes. See Also     tf.advanced.settings: options allowed in  config.yaml ",
"func":1
},
{
"ref":"tf.advanced.links.showProvenance",
"url":8,
"doc":"Shows the provenance that is normally displayed during data loading. This comes in handy if you have started with  use(\"org/repo\", silence='deep') and still need to show the provenance. Moreover, the provenance is shown in a formatted way. Parameters      jobName: string, optional program code E.g. the name of program in which you call this function. In the Text-Fabric browser the name of the job will be entered here. This item will be displayed together with the rest of the provenance. author: string, optional program author E.g. your own name. This item will be displayed together with the rest of the provenance.",
"func":1
},
{
"ref":"tf.advanced.links.outLink",
"url":8,
"doc":"Produce a formatted link. Parameters      text: string/HTML The text of the link. href: string/URL The url of the link. title: string, optional None The hint of the link. target: string, optional _blank The target window/tab of the link. clsName: string, optional default  None A CSS class name to add to the resulting link element passage: string, optional None A passage indicator, which will end up in the  sec attribute of the link element. Used by the TF-browser. asHtml: boolean, optional True Whether we are in a notebook or in the browser. If not, a plain text representation of the link will be made.",
"func":1
},
{
"ref":"tf.advanced.links.provenanceLink",
"url":8,
"doc":"Generate a provenance link for a data source. We assume the data source resides somewhere inside a backend repository. Parameters      backend: string  github or  gitlab or a GitLab instance such as  gitlab.huc.knaw.nl . org: string Organization on GitHub or group on GitLab repo: string Repository on GitHub or project on GitLab version: string Version of the data source. This is not the release or commit of a repo, but the subdirectory corresponding with a data version under a  tf directory with feature files. branch: string The branch on the backend of the repository (typically  master or  main ) commit: string The commit hash of the repository local: boolean Whether the data is on the local computer and not necessarily backed up by a backend repository release: string The release tag of the repository",
"func":1
},
{
"ref":"tf.advanced.links.flexLink",
"url":8,
"doc":"Produce documentation links that are heavily dependent on the backend. These are links to tutorials and other documentation. If the backend is GitLab or GitHub, notebooks can be viewed on NBviewer. But if the backend is on-premiss, we assume that notebooks are converted to html and then published on the Pages of the on-premiss GitLab. What exactly the link to such an on-premiss Pages service is, may depend on a config setting. This function resolves all that.  ! note \"Converting notebooks to HTML\" There is now a tool in text-fabric to convert a directory of notebooks to HTML. See  tf.tools.nbconvert . Parameters      kind: string Indicates what kind of url value should be returned:   pages : url of the repo in the Pages service of the backend;   tut : url of the start tutorial, either on NB viewer or in the Pages service of the backend. Returns    - string The complete url.",
"func":1
},
{
"ref":"tf.advanced.volumes",
"url":9,
"doc":"Produce links to Text-Fabric data and links from nodes to web resources."
},
{
"ref":"tf.advanced.volumes.volumesApi",
"url":9,
"doc":"Produce the volume support functions API. Volume support provides the functions  tf.volumes.extract and  tf.volumes.collect as methods on the app object. These operations will be called with the  _local source/destination With these operations you can  extract() and  collect() volumes from the currently loaded work. The volumes in question reside in the directory  _local under the main directory with feature files. Parameters      app: obj The high-level API object",
"func":1
},
{
"ref":"tf.advanced.volumes.getVolumes",
"url":9,
"doc":"Calls  tf.fabric.Fabric.getVolumes from an app object.  ! hint \"No need to load feature data\" This function works even if no data has been loaded, so you can use it after  A = use(xxx, loadData=False)  ",
"func":1
},
{
"ref":"tf.advanced.volumes.extract",
"url":9,
"doc":"Calls  tf.fabric.Fabric.extract from an app object.",
"func":1
},
{
"ref":"tf.advanced.volumes.collect",
"url":9,
"doc":"Calls  tf.fabric.Fabric.collect from an app object.",
"func":1
},
{
"ref":"tf.advanced.display",
"url":10,
"doc":" Display Where the advanced API really shines is in displaying nodes. There are basically two ways of displaying a node:   plain : just the associated text of a node, or if that would be too much, an identifying label of that node (e.g. for books, chapters and lexemes).   pretty : a display of the internal structure of the textual object a node stands for. That structure is adorned with relevant feature values. These display methods are available for nodes, tuples of nodes, and iterables of tuples of nodes (think: query results). The names of these methods are   plain ,  plainTuple , and  table ;   pretty ,  prettyTuple and  show . In plain and pretty displays, certain parts can be  highlighted , which is good for displaying query results where the parts that correspond directly to the search template are highlighted.  Display parameters There is a bunch of parameters that govern how the display functions arrive at their results. You can pass them as optional arguments to these functions, or you can set up them in advance, and reset them to their original state when you are done. All calls to the display functions look for the values for these parameters in the following order:  optional parameters passed directly to the function,  values as set up by previous calls to  displaySetup() ,  corpus dependent default values configured by the advanced API. See  tf.advanced.options for a list of display parameters.  Rendering Both  pretty and  plain are implemented as a call to the  tf.advanced.render.render function.  See also All about the nature and implementation of the display algorithm is in  tf.about.displaydesign ."
},
{
"ref":"tf.advanced.display.displayApi",
"url":10,
"doc":"Produce the display API. The display API provides methods to generate styled representations of pieces of corpus texts in their relevant structures. The main end-user functions are  plain(node) and  pretty(node) .  plain() focuses on the plain text,  pretty() focuses on structure and feature display. Related are  plainTuple() and  prettyTuple() that work for tuples instead of nodes. And further there are  show() and  table() , that work with iterables of tuples of nodes (e.g. query results). Parameters      app: obj The high-level API object silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp Normally this parameter is taken from the app, but when we do an  A.reuse() we force  silent=\"deep\" .",
"func":1
},
{
"ref":"tf.advanced.display.displayShow",
"url":10,
"doc":"Show display parameters. Shows current values of all or selected display parameters. Parameters      options: keys Options of which the current value will be shown. If no option is passes, all options will be shown. See Also     tf.advanced.settings: options allowed in  config.yaml ",
"func":1
},
{
"ref":"tf.advanced.display.displaySetup",
"url":10,
"doc":"Set up all display parameters. Shows current values of display parameters and/or assigns working values to display parameters. All subsequent calls to display functions such as  plain and  pretty will use these values, unless they themselves are passed overriding values as arguments. These working values remain in effect until a new call to  displaySetup() assigns new values, or a call to  displayReset() resets the values to the defaults.  ! hint \"show current values\" The defaults themselves come from the corpus settings, which are influenced by its  config.yaml file, if it exists. See  tf.advanced.settings . You can show the current values by means of  displayShow . Parameters      show: keys Options of which the current value will be shown. options: key-values Explicit values for selected options that act as overrides of the defaults. See Also     tf.advanced.settings: options allowed in  config.yaml tf.advanced.options: all available display options",
"func":1
},
{
"ref":"tf.advanced.display.displayReset",
"url":10,
"doc":"Restore display parameters to their defaults. Reset the given display parameters to their default value and let the others retain their current value. So you can reset the display parameters selectively. Parameters      options: list, optional [] If present, only restore these options to their defaults. Otherwise, restore all display settings.",
"func":1
},
{
"ref":"tf.advanced.display.loadCss",
"url":10,
"doc":"Load the CSS for this app. If we are in the TF-browser, the generic CSS is already provided, we only need to respond with the app-specific CSS: we return it as string. The flag  app._browse is used to steer us into this case. Otherwise, if we are in a notebook, we collect the complete CSS code from Text-Fabric and the app, and we add a piece to override some of the notebook CSS for tables, which specify a table layout with right aligned cell contents by default. We then load the resulting CSS into the notebook. Otherwise, we do nothing. Returns    - None | string When in the TF browser, the app-dependent CSS is returned. Otherwise, nothing is returned, but the complete CSS is displayed as HTML in the notebook.",
"func":1
},
{
"ref":"tf.advanced.display.getCss",
"url":10,
"doc":"Export the CSS for this app. We collect the complete CSS code from Text-Fabric and the app, and we add a piece to override some of the notebook CSS for tables, which specify a table layout with right aligned cell contents by default. Returns    - None | string CSS code, including a surrounding    element.",
"func":1
},
{
"ref":"tf.advanced.display.export",
"url":10,
"doc":"Exports an iterable of tuples of nodes to an Excel friendly  .tsv file.  ! hint \"Examples\" See for detailed examples the [exportExcel (etcbc/bhsa)](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/exportExcel.ipynb) and [exportExcel (Nino-cunei/oldbabylonian)](https: nbviewer.jupyter.org/github/Nino-cunei/oldbabylonian/blob/master/tutorial/exportExcel.ipynb) notebooks. Parameters      tuples: iterable of tuples of integer The integers are the nodes, together they form a table. The table maybe uniform or not uniform, which matters to the output. See below. toDir: string, optional None The destination directory for the exported file. By default it is your Downloads folder. If the directory does not exist, it will be created. toFile: boolean, optional results.tsv The name of the exported file. options: dict Display options, see  tf.advanced.options .  ! note \"details\"   condensed Has no effect. Exports to Excel will not be condensed, because the number of columns is variable per row in that case. Excel itself has nice possibilities for grouping rows. You can also filter your tuples by means of hand-coding before exporting them.   condenseType The condense type influences for which nodes the full text will be exported. Only nodes that are \"smaller\" than the condense type will have their full text exported.   fmt This display parameter specifies the text format for any nodes that trigger a text value to be exported.   tupleFeatures This is a display parameter that steers which features are exported with each member of the tuples in the list. If the iterable of tuples are the results of a query you have just run, then an appropriate call to  displaySetup(tupleFeatures= .) has already been issued, so you can just say: results = A.search(query) A.export(results) Results    - A file  toFile in directory  toDir with the following content: There will be a row for each tuple. If the input tuples are  uniform , i.e. each tuple has the same number of nodes, and nodes in the same column have the same node types, then the result table has the following layout: The columns are:   R the sequence number of the result tuple in the result list   S1 S2 S3 the section as book, chapter, verse, in separate columns; the section is the section of the first non book/chapter node in the tuple   NODEi TYPEi the node and its type, for each node  i in the result tuple   TEXTi the full text of node  i , if the node type admits a concise text representation; the criterion is whether the node type has a type not bigger than the default condense type, which is app specific. If you pass an explicit  condenseType= xxx as display parameter, then this is the reference condenseType on which the decision is based.   XFi the value of extra feature  XF for node  i , where these features have been declared by a previous displaySetup(tupleFeatures= .) If the input tuples are not uniform, the layout is more primitive. There will be no header column, because the number of columns may vary per row. A row contains the successive information of all nodes in a tuple. Depending of the type of each node you get a number of columns of section information. Then follow two columns with the node and the node type. Depending on the type of the node, there follows a column with the text of the node. No additional features are produced.  ! caution \"Encoding\" The exported file is written in the  utf_16_le encoding. This ensures that Excel can open it without hassle, even if there are non-latin characters inside. When you want to read the exported file programmatically, open it with  encoding=utf_16 .",
"func":1
},
{
"ref":"tf.advanced.display.table",
"url":10,
"doc":"Plain displays of an iterable of tuples of nodes in a table. The list is displayed as a compact markdown table. Every row is prepended with the sequence number in the iterable, and then displayed by  plainTuple  ! hint \"condense, condenseType\" You can condense the list first to containers of  condenseType , before displaying the list. Pass the display parameters  condense and  condenseType . See  tf.advanced.options . Parameters      tuples: iterable of tuples of integer The integers are the nodes, together they form a table. options: dict Display options, see  tf.advanced.options . _asString: boolean, optional False Whether to deliver the result as a HTML string or to display it directly inside a notebook. When the TF-browser uses this function it needs the HTML string.",
"func":1
},
{
"ref":"tf.advanced.display.plainTuple",
"url":10,
"doc":"Display the plain text of a tuple of nodes. Displays the material that corresponds to a tuple of nodes as a row of cells, each displaying a member of the tuple by means of  plain . Parameters      tup: iterable of integer The members of the tuple can be arbitrary nodes. seq: integer, optional None an arbitrary number which will be displayed in the first cell. This prepares the way for displaying query results, which come as a sequence of tuples of nodes. If None, no such number is displayed in the heading. item: string, optional result A name for the tuple: it could be a result, or a chapter, or a line. position: integer, optional None Which position counts as the focus position. If  seq equals  position , the tuple is in focus. The effect is to add the CSS class  focus to the output HTML for the row of this tuple. opened: booolean, optional False Whether this tuple should be expandable to a  pretty display. The normal output of this row will be wrapped in a   plain pretty  pattern, so that the user can click a triangle to switch between plain and pretty display.  ! caution This option has only effect when used in the TF browser. options: dict Display options, see  tf.advanced.options . _asString: boolean, optional False Whether to deliver the result as a HTML string or to display it directly inside a notebook. When the TF-browser uses this function it needs the HTML string. Result    html string or  None Depending on  asString above.",
"func":1
},
{
"ref":"tf.advanced.display.plain",
"url":10,
"doc":"Display the plain text of a node. Displays the material that corresponds to a node in a compact way. Nodes with little content will be represented by their text content, nodes with large content will be represented by an identifying label. Parameters      n: integer Node options: dict Display options, see  tf.advanced.options . _inTuple: boolean, optional False Whether the result is meant too end up in a table cell produced by  plainTuple . In that case some extra node types count as big and will not be displayed in full. _asString: boolean, optional False Whether to deliver the result as a HTML string or to display it directly inside a notebook. When the TF-browser uses this function it needs the HTML string. explain: boolean, optional False Whether to print a trace of which nodes have been visited and how these calls have contributed to the end result. Result    html string or  None Depending on  _asString above.",
"func":1
},
{
"ref":"tf.advanced.display.show",
"url":10,
"doc":"Displays an iterable of tuples of nodes. The elements of the list are displayed by  A.prettyTuple() .  ! hint \"condense, condenseType\" You can condense the list first to containers of  condenseType , before displaying the list. Pass the display parameters  condense and  condenseType . See  tf.advanced.options . Parameters      tuples: iterable of tuples of integer The integers are the nodes, together they form a table. _asString: boolean, optional False Whether to deliver the result as a HTML string or to display it directly inside a notebook. When the TF-browser uses this function it needs the HTML string. options: dict Display options, see  tf.advanced.options . Result    html string or  None When used for the TF browser ( app._browse is true), or when  _asString is True, the result is returned as HTML. Otherwise the result is directly displayed in a notebook.",
"func":1
},
{
"ref":"tf.advanced.display.prettyTuple",
"url":10,
"doc":"Displays the material that corresponds to a tuple of nodes in a graphical way. The member nodes of the tuple will be collected into containers, which will be displayed with  pretty() , and the nodes of the tuple will be highlighted in the containers. Parameters      tup: iterable of integer The members of the tuple can be arbitrary nodes. seq: integer, optional None an arbitrary number which will be displayed in the heading. This prepares the way for displaying query results, which come as a sequence of tuples of nodes. If None, no such number is displayed in the heading. item: string, optional result A name for the tuple: it could be a result, or a chapter, or a line. _asString: boolean, optional False Whether to deliver the result as a HTML string or to display it directly inside a notebook. When the TF-browser uses this function it needs the HTML string. options: dict Display options, see  tf.advanced.options . Result    html string or  None When used for the TF browser ( app._browse is true), or when  _asString is True, the result is returned as HTML. Otherwise the result is directly displayed in a notebook.",
"func":1
},
{
"ref":"tf.advanced.display.pretty",
"url":10,
"doc":"Displays the material that corresponds to a node in a graphical way. The internal structure of the nodes that are involved is also revealed. In addition, extra features and their values are displayed with the nodes.  ! hint \"Controlling pretty displays\" The following  tf.advanced.options are particularly relevant to pretty displays:   condenseType : the standard container to display nodes in;   full : whether to display a reference to the material or the material itself;   extraFeatures : additional features to display   tupleFeatures : additional features to display (primarily for  export . Parameters      n: integer Node options: dict Display options, see  tf.advanced.options . explain: boolean, optional False Whether to print a trace of which nodes have been visited and how these calls have contributed to the end result. asString: boolean, optional False If True, the result is returned as string Result    html string or  None When used for the TF browser ( app._browse is true), or when  _asString is True, the result is returned as HTML. Otherwise the result is directly displayed in a notebook.",
"func":1
},
{
"ref":"tf.advanced.text",
"url":11,
"doc":""
},
{
"ref":"tf.advanced.text.textApi",
"url":11,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.text.showFormats",
"url":11,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.text.specialCharacters",
"url":11,
"doc":"Generate a widget for hard to type characters. For each text format it is known which characters may occur in the text. Some of those characters may be hard to type because they do not belong to the ASCII range of characters. All those characters will be listed in a widget, so that when you click such a character it is copied to your clipboard. The character will then turn yellow. Parameters      fmt: string, optional None The text format for which you want to display the character widget. If not passed, the default format will be chosen. Returns    - html A piece of HTML.",
"func":1
},
{
"ref":"tf.advanced.repo",
"url":12,
"doc":" Auto downloading from a backend repository  Description Text-Fabric maintains local copies of subfolders of backend repositories, where it stores the feature data of corpora that the user is working with. Currently GitHub and GitLab are supported as backends. In case of GitLab, not only [gitlab.com](https: gitlab.com) is supported, but also GitLab instances on other servers that support the GitLab API. There is some bookkeeping to account for which release and commit the feature files come from. Users can request data from any repo according to any release and/or commit.  Rate limiting The  checkRepo() function uses the GitHub and GitLab APIs. GitHub has a rate limiting policy for its API. See below to deal with this if it becomes a problem. On GitLab we ignore the rate limiting.  GitHub GitHub has a rate limiting policy for its API of max 60 calls per hour. This can be too restrictive, and here are two ways to keep working nevertheless.  Increase the rate limit If you use this function in an application of yours that uses it very often, you can increase the limit to 5000 calls per hour by making yourself known.  [create a personal access token](https: github.com/settings/tokens)  Copy your token and put it in an environment variable named  GHPERS on the system where your app runs. See below how to do that.  If  checkoutRepo finds this variable, it will add the token to every GitHub API call it makes, and that will increase the rate.  Never pass your personal credentials on to others, let them obtain their own! You might want to read this:  [Read more about rate limiting on GitHub](https: docs.github.com/en/rest/overview/resources-in-the-rest-api rate-limiting)  GitLab In order to reach an on-premise GitLab and have access to the repository in question, you may need to have a VPN connection with the GitLab backend. Additionally, you may need to make your identity known. If you have an account on the GitLab instance, go to your settings and request a personal token with  api privileges. On your own system, make an environment variable named GL_ BACKEND _PERS whose content is exactly the value of this token. And  BACKEND should be the uppercase variant of the name of the GitLab backend, where every character that is not a letter or digit or  _ is replaced by a  _ . For example, for  gitlab.huc.knaw.nl use  GL_GITLAB_HUC_KNAW_NL_PERS and for  gitlab.com use  GL_GITLAB_COM_PERS . See below how to put this in an environment variable.  Token in environment variables How to put your personal access token into an environment variable?  ! note \"What is an environment variable?\" It is a setting on your system that various programs/processes can read. On Windows it is part of the  Registry . In this particular case, you put a personal token that you obtain from GitHub/GitLab in such an environment variable. When Text-Fabric accesses the backend, it will look up this token first, and pass it to the backend API. The backend then knows who you are and will give you more privileges.  On Mac and Linux Find the file that contains your terminal settings. In many cases that is  .bash_profile in your home directory. Some people put commands like these in their  ~/.bashrc file, which is also fine. If you do not see a  .bashrc file, put it into your  .bash_profile file. A slightly more advanced shell than  bash is  zsh and it is the default on newer Macs. If that is your case, look for a file  .zshrc in your home directory or create one. Whatever is your case, pick the file indicated above and edit it.  ! hint \"How to edit a file in your terminal?\" If you are already familiar with  vi ,  vim ,  emacs , or  nano you already know how to do it. If not,  nano is simple editor that is useful for tasks like this. Assuming that you want to edit the  .zshrc in your home directory, go to your terminal and say this: nano ~/.zshrc Then you get a view on your file. Then  press  Ctrl V a number of times till you are at the end of the file,  type the two lines lines of text (specified in the next step), or copy them from the clipboard  type  Ctrl X to exit; nano will ask you to save changes, type  Y , it will then verify the file name, type  Enter and you're done  GitHub Put the following lines in this file:  sh GHPERS=\"xxx\" export GHPERS    GitLab Put the following lines in this file:  sh GL_BACKEND_PERS=\"xxx\" export GL_BACKEND_PERS   where   xxx is replaced by your actual token.   BACKEND is replaced by the uppercase GitLab backend e.g.   gitlab.com becomes  GL_GITLAB_COM_PERS   gitlab.huc.knaw.nl becomes  GL_GITLAB_HUC_KNAW_NL_PERS In this way you can store tokens for multiple GitLab backends. Then restart your terminal or say in an existing terminal  sh source ~/.zshrc    On Windows Click on the Start button and type in  environment variable into the search box. Click on  Edit the system environment variables . This will open up the System Properties dialog to the Advanced tab. Click on the  Environment Variables button at the bottom. Click on  New  . under  User environment variables .  GitHub : Then fill in  GHPERS under  name and the token string under  value .  GitLab : Then fill in  GL_BACKEND_PERS under  name and the token string under  value . Then quit the command prompt and start a new one.  Result  GitHub With this done, you will automatically get the good rate limit, whenever you fire up Text-Fabric in the future.  GitLab You are now known to the GitLab backend, and you have the same access to its repository as when you log in via the web interface.  Minimize accessing GitHub Another way te avoid being bitten by the rate limit is to reduce the number of your access actions to GitHub. There are two instances where Text-Fabric wants to access GitHub: 1. when you start the Text-Fabric browser from the command line 2. when you give the  use() command in your Python program (or in a Jupyter Notebook).  Using a corpus for the first time, within the rate limit If you are still within the rate limit, just give the usual commands, such as  sh text-fabric org/repo   or  python use('org/repo', hoist=globals(   where  corpus should be replaced with the real name of your corpus. The data will be downloaded to your computer and stored in your  ~/text-fabric-data directory tree.  Using a corpus for the first time, after hitting the rate limit If you want to load a new corpus after having passed the rate limit, and not wanting to wait an hour, you could directly clone the repos from GitHub/GitLab: Open your terminal, and go to (or create) directory  ~/github or  ~/gitlab (in your home directory). Inside that directory, go to or create directory  org Go to that directory. Then do  sh git clone https: github.com/org/repo   or  sh git clone https: gitlab.com/org/repo   (replacing  org and  repo with the values that apply to your corpus). This will fetch the Text-Fabric  data ,  app , and  tutorials for that corpus. Now you have all data you need on your system. If you want to see by example how to use this data, have a look at [repo](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/tutorial/repo.ipynb), especially when it discusses  clone . In order to run Text-Fabric without further access to the backend, say  sh text-fabric corpus:clone checkout=clone   or, in a program,  python A = use('org/repo:clone', checkData='clone', hoist=globals(   This will instruct Text-Fabric to use the app and data from within your  ~/github or  ~/gitlab directory tree.  Using a corpus that you already have Depending on how you got the corpus, it is in your  ~/github ,  ~/gitlab or in your  ~/text-fabric-data directory tree: 1. if you cloned it from GitHub, it is in your  ~/github tree; 2. if you cloned it from GitLab, it is in your  ~/gitlab tree; 3. if you cloned it from an other instance of GitLab, say hosted at  gitlab.huc.knaw.nl , it is in your  ~/gitlab.huc.knaw.nl tree; 4. if you used the autoload of Text-Fabric it is in your  ~/text-fabric-data . In the first case, do this:  sh text-fabric corpus:clone checkout=clone   or, in a program,  python A = use('org/repo:clone', checkData='clone', hoist=globals(   In the second case, do this:  sh text-fabric corpus:clone checkout=clone  backend=gitlab   or, in a program,  python A = use('org/repo:clone', checkData='clone', backend=\"gitlab\", hoist=globals(   In the third case, do this:  sh text-fabric corpus:clone checkout=clone  backend=gitlab.huc.knaw.nl   or, in a program,  python A = use( 'org/repo:clone', checkData='clone', backend=\"gitlab\".huc.knaw.nl, hoist=globals(), )   In the fourth case, do just this:  sh text-fabric corpus   or, in a program,  python A = use('org/repo', hoist=globals(   See also  tf.advanced.app.App .  Updating a corpus that you already have If you cloned it from GitHub/GitLab: In your terminal:  sh cd ~/github/organization/repo   or  sh cd ~/gitlab/organization/repo   (replacing  organization with the name of the organization where the corpus resides and  corpus with the name of your corpus). And then: git pull origin master   Now you have the newest corpus data on your system. and you can use it as follows (we show the example for  github ):  sh text-fabric corpus:clone checkout=clone   or, in a program,  python A = use('org/repo:clone', checkData='clone', hoist=globals(   If you have autoloaded it from the backend, you have to add the  latest or  hot specifier:  sh text-fabric corpus:latest checkout=latest   or, in a program,  python A = use('org/repo:latest', checkData='latest', hoist=globals(   And after that, you can omit  latest or  hot again, until you need new data again.  ! hint \"App versus data\" The checkout specifiers such as  latest ,  hot ,  clone apply to either the corpus data or the TF App. If the specifier follows the app name, separated with a colon, it directs how the app code is being obtained. If it is the value of the  checkout parameter, it directs how the corpus data is being obtained. See further under  checkoutRepo ."
},
{
"ref":"tf.advanced.repo.GLPERS",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.catchRemaining",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo",
"url":12,
"doc":"Auxiliary class for  releaseData "
},
{
"ref":"tf.advanced.repo.Repo.newRelease",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.makeZip",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.connect",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.fetchInfo",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.bumpRelease",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.makeRelease",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.uploadZip",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.getRelease",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.getReleaseObj",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.getCommit",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.getCommitObj",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.info",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.warning",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Repo.error",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.releaseData",
"url":12,
"doc":"Makes a new data release for a repository.  !caution \"GitHub only\" Only GitHub repositories are supported. GitLab support will be implemented if there is a need for it. Parameters      backend: string  github or  gitlab or a GitLab instance such as  gitlab.huc.knaw.nl . org: string The organization name of the repo repo: string The name of the repo folder: string The subfolder in the repo that contains the text-fabric files. If the tf files are versioned, it is the directory that contains the version directories. In most cases it is  tf or it ends in  /tf . version: string The version of the data that should be attached as a zip file to the release increase: The way in which the release version should be increased: 1 = bump major version; 2 = bump intermediate version; 3 = bump minor version source: string, optional None Path to where the local GitHub clones are stored dest: string, optional DOWNLOADS Path to where the zipped data should be stored",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout",
"url":12,
"doc":"Auxiliary class for  checkoutRepo "
},
{
"ref":"tf.advanced.repo.Checkout.fromString",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.toString",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.isClone",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.isOffline",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.login",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.connect",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.info",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.warning",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.error",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.display",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.possibleError",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.makeSureLocal",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.download",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.downloadRelease",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.downloadCommit",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.downloadZip",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.downloadDir",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.getRelease",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.getCommit",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.getReleaseObj",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.getCommitObj",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.getReleaseFromObj",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.getCommitFromObj",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.fetchInfo",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.fixInfo",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.readInfo",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.Checkout.writeInfo",
"url":12,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.repo.checkoutRepo",
"url":12,
"doc":"Checks out text-fabric data from an (online) repository. The copy may be taken from any point in the commit history of the online repo. If you call this function, it will check whether the requested data is already on your computer in the expected location. If not, it may check whether the data is online and if so, download it to the expected location. Parameters      backend: string  github or  gitlab or a GitLab instance such as  gitlab.huc.knaw.nl . org: string, optional \"annotation\" The  org on GitHub or the group on GitLab repo: string, optional \"banks\" The  repo on GitHub or the project on GitLab folder: string, optional tf The subfolder in the repo that contains the text-fabric files. If the tf files are versioned, it is the directory that contains the version directories. In most cases it is  tf or it ends in  /tf . version: string, optional, the empty string The version of the tf feature data checkout: string, optional the mepty string From which version/release/local copy we should extract the data.     : whatever you have locally in  ~/text-fabric-data . If there is no data there, data will be downloaded.   local : whatever you have locally in  ~/text-fabric-data . If there is no data there, you get an error message.   clone : whatever you have locally as a GitHub/GitLab clone If there is no data there, you get an error message.   latest : make sure the latest release has been fetched from online   hot : make sure the latest commit has been fetched from online   vx.y.z : make sure this specific release has been fetched from online   1234567890abcdef : make sure this specific commit has been fetched from online See the [repo](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/tutorial/repo.ipynb) notebook for an exhaustive demo of all the checkout options. source: string, optional empty string The base of your local repository clones. If given, it overrides the semi-baked in  ~/github value. dest: string, optional empty string The base of your local cache of downloaded tf feature files. If given, it overrides the semi-baked in  ~/text-fabric-data value. withPaths: boolean, optional True The data will be saved without the directory structure of files that are being downloaded. keep: boolean, optional True If False, the destination directory will be cleared before a download takes place. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp label: string, optional data If passed, it will will change the word \"data\" in info messages to what you choose. We use  label='app' when we use this function to checkout the code of a corpus app. Returns    - (commitOffline, releaseOffline, kindLocal, localBase, localDir)   commitOffline is the commit hash of the data you have offline afterwards   releaseOffline is the release tag of the data you have offline afterwards   kindLocal indicates whether an online check has been performed: it is  None if there has been an online check. Otherwise it is  clone if the data is in your  ~/github directory else it is  local .   localBase where the data is under:  ~/github or  ~/text-fabric-data , or whatever you have passed as  source and  dest .   localDir releative path from  localBase to your data. If your data has versions,  localDir points to directory that has the versions, not to a specific version. Your local copy can be found:  in the cache under your  ~/text-fabric-data , and from there under  backend / org/repo where  backend is github or gitlab or the server name of a gitlab instance. or  in the place where you store your clones from GitHub/GitLab:  ~/github or  ~/gitlab or  ~/ backend (whatever the value of the  backend parameter is. From there it is under  org/repo . The actual feature files are in  folder/version if there is a  version , else  folder .",
"func":1
},
{
"ref":"tf.advanced.settings",
"url":13,
"doc":" App settings Developers can create corpus apps by specifying a  config.yaml with settings. These settings will be read, checked, and transformed into configuration data that is read by the app, see  tf.advanced.settings.showContext See for examples:  [bhsa](https: github.com/etcbc/bhsa/blob/master/app/config.yaml).  [uruk](https: github.com/Nino-cunei/uruk/blob/master/app/config.yaml).  Config specs Here is a specification of all settings you can configure for an app. Each section below corresponds to a main key in the  config.yaml of an app. Everything is optional, an empty  config.yaml is valid. Text-Fabric tries hard to supply reasonable defaults on the basis of the corpus data it has loaded.   apiVersion To let Text-Fabric check whether its version matches the version of the corpus app Default: : integer  1  -   dataDisplay Generic display parameters. Default: : dict  {}  -   browseContentPretty Whether the content is shown as a list of subsectional items contained in the selected item or as a pretty display of the item itself Default: : boolean  false  -   browseNavLevel The section level up to which the TF-browser shows a hierarchical tree. Values :  1 or  2 Default: :  one less than the number of section types  -   exampleSection Placeholder text for passage entry fields in the TF browser. Default: : string  book 1  -   exampleSectionHtml Formatted placeholder text for passage entry fields in the TF browser. Default: : string   piece 1   -   excludedFeatures Features that are present in the data source but will not be loaded for the TF browser. Default: : list  []  -   noneValues Feature values that are deemed uninformative, e.g.  None ,  'NA' Default: : list  []  -   sectionSep1 Separator between main and secondary sections in a passage reference; e.g. the space in  Genesis 1:1 Default: : string:   ( space )  -   sectionSep2 Separator between secondary and tertiary sections in a passage reference; e.g. the  : in  Genesis 1:1 Default: : string  :  -   showVerseInTuple Show the full text of verselike nodes in tables and tuples (in  tf.advanced.display.plainTuple and  tf.advanced.display.table ) Default: : boolean  false  -   textFormats   textFormats: layout-orig-full: layoutRich   Additional text formats that can use HTML styling. Keys : names of existing and new text formats. Values : (methd, style) where method : name of a method that implements that format. If the name is  xxx , or n typexxx then  app.py should implement a method  fmt_xxx(node,  kwargs) to produce html for node  node . This function will passed the  outer=True if called by a plain or pretty at the outer level, level=recursion depth, and  first=True, last=True if the node is on a leftmost resp. rightmost branch in the tree of children below the outer node. style : a keyword indicating in what style the format should be set: normal, source, trans, phono, orig. Default: : dict  {}  -   docs In the settings below you may refer to provenance settings, like  {org} and  {repo} You may refer to nbviewer with  {urlNb} and to github with  {urlGh} Default: : dict  {}  -   charText Hint text when a user hovers over the  charUlr link to a page that describes how TF features represent text Default: : string     -   charUrl Start page for character coding documentation. TF supports several writing systems with character- and transcription tables. Replace  Transcription by the writing system relevant for your data.  {tfDoc} will be replaced by the root location of the online TF documentation. If it is left out, it will point to the transcription table in the TF docs that corresponds with the writing setting. If the writing setting is also left out, it will point to the page from where you can find info about all supported writing systems. Default: : string  {tfDoc}/writing/transcription/  -   docBase Base url page for the corpus documentation Default: : string  {docRoot}/{org}/{repo}/blob/{branch}/docs  -   docExt: The extension of documentation pages Default: : string  .md  -   docPage Landing page for the corpus documentation Default: : string  home  -   docRoot Where the docs are: on GitHub or GitLab (default), or on nbviewer ( {urlNb} ) or somewhere else. Default: : string  {urlGh} or  https:  backend  -   featureBase URL template for feature by feature documentation  {tfDoc} will be replaced by the root location of the documentation as set above. The variable part    will be replaced by the names of the features. Default: : string  {docBase}/features/ {docExt}  -   featurePage Start page for feature documentation, will be filled in into  featureBase for the variable    . Default: : string  home  -   interfaceDefaults The following options can be passed to the display functions  tf.advanced.display.plain and  tf.advanced.display.pretty . They can also be set in the Text-Fabric Browser. The values set here are the defaults as given by this app. Not all options are relevant for all corpora. Only relevant options should be included. By setting the default to  None , the option will not be shown on the TF-browser interface. These options are described in  tf.advanced.options : all options marked as  interface option . Default: : dict  {}  -   provenanceSpec Provenance parameters are used to fetch data and to report provenance in data exports. Default: : dict  {}  -   corpus A user-friendly name for your corpus. Default: : string  null  -   doi If your data is archived: the doi of the archived version, like  xx.yyyy/archive.zzzzzzz without the  https: doi.org/ in front. Default: : string  null  -   graphicsRelative If not  null , it is the path inside the repo to the directory that holds the graphics files Default: : string  null  -   moduleSpecs You can specify modules that should always be loaded with the core data, as many as you want:   moduleSpecs = ( dict( backend=\"gitlab\", org=\"researcher1\", repo=\"work1\", relative=\"tf\", corpus=\"speicalism1\", docUrl=( \"{urlNb}/researcher1/work1/blob/master/programs/specialism1.ipynb\" ), doi=\"xx.yyyy/archive.zzzzzzz\", ), dict( backend=\"gitlab.huc.knaw.nl\", org=\"researcher2\", repo=\"work2\", relative=\"tf\", corpus=\"speicalism2\", docUrl=( \"{urlNb}/researcher2/work2/blob/master/programs/specialism2.ipynb\" ), doi=\"uu.vvvv/archive.wwwwwww\", ), )   If modules have the same org or repo as the main data, these do not have to be specified. If a module has a relative attribute equal to  tf , it can be left out. Default: : list  []  -   org The GitHub organisation or the GitLab group under which your TF data resides. Default: : string  annotation  -   relative The path inside the repo to the directory that holds the version directories of the tf data. Default: : string  tf  -   repo The GitHub repo or the GitLab project under which your TF data resides  ! hint  org/repo =  annotation/default acts as placeholder for app-less datasets. Default: : string  default  -   version The version directory with the actual  tf files that will be used. Default: : string  null  -   branch The branch on the backend where the corpus data is stored. Nowadays, repositories typically work with  main where they used to work with  master . Default: : string  master  -   pages The url pattern of the Pages publication service of the backend, in case it is unpredicatable from the backend itself. If this value is  None , the following defaults are used, depending on the choice of backend:  for  github.com the default is  github.io , so pages are addressed by  org .github.io/ repo ;  for  gitlab.com the default is  gitlab.io , so pages are addressed by  org .gitlab.io/ repo ;  for on-premiss gitlab, e.g.  git.diginfra.net the default is  pages.diginfra.net , so pages are addressed by  org .pages.diginfra.net/ repo ; If these defaults do not work for a particular situation, you can change the pattern here. For example, in the last case above, if the on-premiss gitlab has a repository  mondriaan/letters whose pages are served on  mondriaan.diginfra.vu/letters , you have to specify  pages=\"diginfra.vu\" . Default: : void  None  -   webBase If present, the base url for an online edition of the corpus. Default: : string  null  -   webFeature If passed, contains the name of the feature that stores the part of the weblink for that node that comes after  webBase . This overrides  webUrl in that when  webFeature is present, and a node has a value for it, than that value will be used in composing the web link, rather than filling the template  webLink with values from the headings. Default: : string  null  -   webHint If passed, will be used as hint text when the user hovers over a web link Default: : string  null  -   webLang If passed, the language in which section headings must be generated in web links Default: : string  null  -   webLexId If present, it is either:  the name of a feature that contains the lexeme id for lexeme nodes. or   true and then the app should implement  app.getLexId(n) that computes lexeme ids for lexeme nodes. The lexeme id is the one used in the online edition of the corpus to point to lexemes. Default: : string | boolean  null  -   webOffset If present, it is a dictionary that specifies offsets between page numbers as derived from section headings and page numbers as needed in the query string for te url of the online resource (see  webUrl ). Suppose we need to offset sections of level 2 depending on the section of level 1 they are in. For example, in the [missieven corpus](https: github.com/clariah/wp6-missieven/blob/master/app/config.yaml) we have section levels 1=volume, 2=page, 3=line. In each volume, the logical page 1 must be translated into a higher number, depending on the number of preface pages in that volume. The value of this parameter is a dict of dicts. The first level of keys specifies the section level of the sections that needs offsets. In our example case we specify offsets for pages (level 1), so the key is  2 . The second level of keys are the values of section headings of the containing sections, the volumes. In our example these are integers 1 - 13. Finally, the value is the offset that will be applied for pages in that volume. Values are positive or negative integers or 0. Missing values translate to 0 or the empty string.  ! note \"integer or string\" Headings may be integers or strings. If a heading is an integer, the offset will be added to it, if it is a string, the offset will be concatenated to it.   webUrl If present,  webLink(node) will use this as a template to generate a url to an online edition of the node. This may happen in two ways:  From a feature whose name is given in  webFeature we take the value for node  n . If that value exists, it will be appended to the value of  webBase and that will be the link.  If  webFeature is not given, or if it is given, but the feature has no value for  n , the web link will be computed from the section headings. The following place holders will be honoured:   {webBase} : the webBase above     : value for section heading 1     : value for section heading 2     : value for section heading 3   {version} : version of the TF resource Default: : string  null  -   webUrlZeros If present, it specifies for each section level whether its heading should be padded with zeros. This padding will be applied to the real values substituted for    ,    and    in the  webUrl setting. If there is no value or the value is 0 for a section level, there will be no padding. Otherwise is specifies the length to which values should be padded. E.g. if a value is  123 and the amount of padding specified is 5, two  0 s will be prepended. This holds also for values that are not integers: if the value is  a35 and the padding is 5, again two  0 s will be prepended. Default: : dict  null  -   webUrlLex If present,  webLink(node) will use this as a template to generate a url to an online edition of the lexeme node. The following place holders will be honoured:   {webBase} : the  webBase value above     : value for the id of the lexeme   {version} version of the TF resource Default: : string  null  -   zip Only used by  text-fabric-zip when collecting data into zip files as attachments to a GitHub/GitLab release. If left to  null , will be configured to use the main repo and the modules. You can also use this scheme to include other data from the repository. Note that graphics data will be packaged automatically. You can specify the main repo, modules, and related data:   zip=[\"repo\"] : Only the main module.   zip=[\"repo\", \"mod1\", \"mod2\"] : if org and relative for the modules are the same as for are the main repo) Default: : list  [\"repo\"] + [(\"org1\", \"mod1\", \"relative1\"), (\"org2\", \"mod2\", \"relative2\")] where all modules mentioned in the moduleSpecs will be filled in.  -   typeDisplay Here are the type-specific display parameters. If some types do not need configuration, you may leave them out. The keys are node types as they exist in the corpus for which this is an app. The value for each key is a dictionary with the following possible contents (you may leave out keys if you are content with its default value). Default: : dict  {}  -   base If present and  true : this type acts as the base type. Default: : boolean  true for the slot type,  false for other types.  -   boundary If true, will only mark the start and end boundaries of the node, without wrapping its descendants in a new box.  ! caution \"gaps\" If the node has gaps, they will not be marked. Default: : boolean  false  -  -   children Which type of child nodes to be included in the display. The value should be a node type or a set of node types: children: aya children: - sura - aya  ! hint \"Reductive\" Use this if you want to reduce the number of section levels in a display. For example, in the Q'uran there are various types of sections, not very well related, and we do not want to get trees of all those sections. Rather, each section should unravel straight into the lowest one: the aya. Default: : set,  set()  -   condense If  true : this type is the default condense type. When displaying tuples of nodes, they will be divided over displays of nodes of this type. The default is:  true for the lowest section type, if there are section types defined in  otext.tf . If there are no sections, we pick a medium-sized node type. If there are no such node types, we pick the slot type, but this is pathological. Default: : boolean  false  -   exclude Conditions that will exclude nodes of this type from the display. All nodes that satisfy at least one of these conditions will be left out.  ! hint Use this if you want to exclude particular nodes of some type, e.g. in [dss](https: github.com/etcbc/dss/blob/master/app/config.yaml). where we want to prevent line terminator signs. The value is a dictionary of feature name - value pairs.   exclude: type: term   Default: : dict,  {}   features Pretty displays: which node features to display as  name=value . You can also specify lookup feature values for upper nodes, e.g.  lex:gloss which will look for a  lex node above the current node and retrieve its  gloss value. Default: : list of string     -   featuresBare: feat1 feat2 Pretty displays: which features to display by value only (the feature name is not mentioned). Things like  lex:gloss are allowed. Default: : list of string     -   flow: Pretty: whether the container should arrange its subdisplays as a column or as a row. Values:  hor ,  ver Default: : string   ver if level is 3 (typically section types), except for the verselike types   ver if level is 0 (typically slot types and lexeme types)   hor if level is 1 or 2 (typically linguistic types at sentence level) and for the verselike types  -   graphics If  true , then there is additional graphics available for nodes of this type. The app needs to define a function   getGraphics(isPretty, node, nodeType, isOuter) => HTML code for sourcing the graphics   See [uruk](https: github.com/Nino-cunei/uruk/blob/master/app/app.py). Default : boolean  null  -   hidden Plain and pretty: whether nodes of this type must be hidden by default. See for example the bhsa, where the  atom types are hidden by default. The user of the app can selectively mark any node type (except the slot type) as hidden, by means of  hiddenTypes in  tf.advanced.options . The user can also switch between showing and hiding hidden node types by passing the display option  hideTypes=False or  hideTypes=True . Default : boolean  false  -   isBig If  true , then this type counts as a big type in plain displays. Default : boolean  false  -   label, template Node contribution for plain and pretty displays (template is for plain displays, label is for pretty displays). You can have features filled in by mentioning them by name in the template, e.g.  {name1} - {name2} . If you specify  true as the template or label, the node information will be the result of:  section and structure types nodes: a heading  other nodes: plain text of the node Default: : string   true for the slot type   true for the section and structure types     for all other types  -   level Pretty: the visual style of the container box of this node, values 0, 1, 2, 3. The bigger the number, the heavier the borders of the boxes. The default is:  3 for types known as section or structure types, including the verselike types  0 for the slot type and types known as lexeme types  1 or 2 for the remaining types: the bigger types are 2, the smaller types are 1 Default : integer  1  -   lexOcc If present, indicates that this is a lexeme type, and it points to the type of things that are occurrences of lexemes. Lexemes are displayed with an indication of their first and last occurrence. Default : string  slotType  -   lineNumber If present, it should be the name of a feature that holds source line numbers. Default : string  null  -   stretch Pretty: whether the children should be stretched in the direction perpendicular to their stacking. The default is:   true if the children form a row (then each child is stretched vertically)   false if the children form a column (then each child is NOT stretched horizontally). Default : boolean  true  ! hint For some types in [uruk](https: github.com/Nino-cunei/uruk/blob/master/app/config.yaml) it is needed to deviate from the default.  -   style Formatting key for plain and pretty displays. The label or template may need a special style to format it with. You can specify:  normal : normal non-corpus text  source : source text of the corpus (before conversion)  trans : transcription of corpus text  phono : phonological/phonetic transcription of corpus text  orig : unicode corpus text  anything else : will be inserted as an extra css class. Default : string  null  -   transform Sometimes you do not want to display straight feature values, but transformed ones. For each feature you can specfiy a transform function  f : E.g.   transform: type: ctype   The feature  type , when computed for a node of the type we are configuring here, will yield a value which is transformed by function  ctype to a new value. In your app code you have to implement:   def transform_f(app, origValue):  . newValue =  . return newValue   Default : dict  {}  -   verselike Whether this type should be formatted as a verse The default is:  true for the lowest section type, if there are section types in  otext.tf . But more types can be declared as verselike, e.g.  halfverse in the [bhsa](https: github.com/etcbc/bhsa/blob/master/app/config.yaml).  -   wrap Pretty: whether the child displays may be wrapped. Default: : boolean   true if the children form a row, such rows may be wrapped   false if the children form a column; such columns may not be wrapped (into several columns)  ! hint For some types in [uruk](https: github.com/Nino-cunei/uruk/blob/master/app/config.yaml) it is needed to deviate from the default.  -   writing Code for triggering special fonts, see  tf.writing . Default: : string     -"
},
{
"ref":"tf.advanced.settings.DOC_DEFAULTS",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.AppCurrent",
"url":13,
"doc":""
},
{
"ref":"tf.advanced.settings.AppCurrent.update",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.AppCurrent.get",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.AppCurrent.set",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.Check",
"url":13,
"doc":""
},
{
"ref":"tf.advanced.settings.Check.checkSetting",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.Check.checkGroup",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.Check.checkItem",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.Check.report",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.setAppSpecs",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.setAppSpecsApi",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.getDataDefaults",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.getTypeDefaults",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.showContext",
"url":13,
"doc":"Shows the  context of the app  tf.advanced.app.App.context in a pretty way. The context is the result of computing sensible defaults for the corpus combined with configuration settings in the app's  config.yaml . Parameters      keys: iterable of string For each key passed to this function, the information for that key will be displayed. If no keys are passed, all keys will be displayed. Returns    - displayed HTML An expandable list of the key-value pair for the requested keys. See Also     tf.advanced.app.App.reuse tf.advanced.settings: options allowed in  config.yaml ",
"func":1
},
{
"ref":"tf.advanced.settings.getLevel",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.settings.compileFormatCls",
"url":13,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.app",
"url":14,
"doc":""
},
{
"ref":"tf.advanced.app.App",
"url":14,
"doc":"Set up the advanced TF API. The parameters are explained in  tf.about.usefunc . Parameters      appName, appPath, checkout, version: string commit, release, local: string backend: string checkout: string, optional  mod: string or iterable, optional [] version: string, optional None locations, modules: string, optional None collection, volume: string, optional None api: object, optional,  None setFile: string, optional,  None silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp hoist: dict, optional False configOverrides: key value pairs _withGc: boolean, optional True If False, it disables the Python garbage collector before loading features. Used to experiment with performance."
},
{
"ref":"tf.advanced.app.App.load",
"url":14,
"doc":"Loads extra features in addition to the main dataset. This is the same as  tf.fabric.Fabric.load when called with  add=True . Parameters      features: string | iterable Either a string containing space separated feature names, or an iterable of feature names. The feature names are just the names of  .tf files without directory information and without extension. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp Returns    - boolean Whether the feature has been successfully loaded.",
"func":1
},
{
"ref":"tf.advanced.app.App.reinit",
"url":14,
"doc":"TF-Apps may override this method. It is called by  reuse . Hence it needs to be present.",
"func":1
},
{
"ref":"tf.advanced.app.App.reuse",
"url":14,
"doc":"Re-initialize the app. The app's settings are read again, the app's code is re-imported, the app's stylesheets are applied again. But the data is left untouched, and no time-consuming reloading of data takes place. Handy when you are developing a new app and want to experiment with it without the costly re-loading of the data in every cycle. Parameters      hoist: boolean, optional False Same as in  App .  ! hint \"the effect of the config settings\" If you are developing a TF app and need to see the effects of the configuration settings in detail, you can conveniently call  reuse and  tf.advanced.settings.showContext in tandem.",
"func":1
},
{
"ref":"tf.advanced.app.App.context",
"url":14,
"doc":"Result of interpreting all configuration options in  config.yaml . See Also     tf.advanced.settings.showContext"
},
{
"ref":"tf.advanced.app.findApp",
"url":14,
"doc":"Find a TF app by name and initialize an object of its main class. Parameters      appName: string or None Either:  None, but then dataLoc should have a value   app: path/to/tf/app   org / repo   org / repo / relative   app , i.e. the plain name of an official TF app (e.g.  bhsa ,  oldbabylonian ) The last case is legacy: instead of  app , pass  org / repo . dataLoc: string or None Either:  None, but then appName should have a value  path to a local directory   org / repo   org / repo / relative Except for the first two cases, a trailing checkout specifier is allowed, like  :clone ,  :local ,  :latest ,  :hot It is assumed that the location is a TF data directory; a vanilla app without extra configuration is initialized. checkoutApp: string The checkout specifier for the TF-app. See  tf.advanced.app.App . args: mixed Arguments that will be passed to the initializer of the  tf.advanced.app.App class. backend: string  github or  gitlab or a GitLab instance such as  gitlab.huc.knaw.nl . kwargs: mixed Keyword arguments that will be passed to the initializer of the  tf.advanced.app.App class. legacy: boolean, optional False If true, accept that a legacy-app is called. Do not give warning, and do not try to load the app in the non-legacy way.",
"func":1
},
{
"ref":"tf.advanced.search",
"url":15,
"doc":"Calls from the advanced API to the Search API."
},
{
"ref":"tf.advanced.search.searchApi",
"url":15,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.search.search",
"url":15,
"doc":"Search with some high-level features. This function calls the lower level  tf.search.search.Search facility aka  S . But whereas the  S version returns a generator which yields the results one by one, the  A version collects all results and sorts them in the canonical order ( tf.core.nodes ). (but you can change the sorting, see the  sort parameter). It then reports the number of results. It will also set the display parameter  tupleFeatures (see below) in such a way that subsequent calls to  tf.advanced.display.export emit the features that have been used in the query. Parameters      query: dict the search template ( tf.about.searchusage ) that has to be searched for. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp shallow: boolean, optional False If  True or  1 , the result is a set of things that match the top-level element of the  query . If  2 or a bigger number  n , return the set of truncated result tuples: only the first  n members of each tuple are retained. If  False or  0 , a list of all result tuples will be returned. sets: dict, optional None If not  None , it should be a dictionary of sets, keyed by a names. In  query you can refer to those names to invoke those sets. For example, if you have a set  gappedPhrases of all phrase nodes that have a gap, you can pass  sets=dict(gphrase=gappedPhrases) , and then in your query you can say gphrase function=Pred word sp=verb etc. This is handy when you need node sets that cannot be conveniently queried. You can produce them by hand-coding. Once you got them, you can use them over and over again in queries. Or you can save them with  tf.lib.writeSets and use them in the TF browser. If the app has been loaded with the  setFile parameter, the sets found in that file will automatically be added to the sets passed in this argument. If you pass sets with a name that also occur in the sets from the app, then the sets you pass override the sets of the app. sort: boolean, optional True If  True (default), search results will be returned in canonical order ( tf.core.nodes ).  ! note \"canonical sort key for tuples\" This sort is achieved by using the function tf.core.nodes.Nodes.sortKeyTuple as sort key. If it is a  sort key , i.e. function that can be applied to tuples of nodes returning values, then this key will be used to sort the results. If it is a  False value, no sorting will be applied. limit: integer, optional None If  limit is a positive number, it will fetch only that many results. If it is negative, 0, None, or absent, it will fetch arbitrary many results.  ! caution \"there is an upper  fail limit for safety reasons. The limit is a factor times the max node in your corpus. See  tf.parameters.SEARCH_FAIL_FACTOR . If this  fail limit is exceeded in cases where no positive  limit has been passed, you get a warning message.  ! hint \"search template reference\" See the search template reference ( tf.about.searchusage )  ! note \"Context Jupyter\" The intended context of this function is: an ordinary Python program (including the Jupyter notebook). Web apps can better use  tf.advanced.search.runSearch .",
"func":1
},
{
"ref":"tf.advanced.search.runSearch",
"url":15,
"doc":"A wrapper around the generic search interface of TF. Before running the TF search, the  query will be looked up in the  cache . If present, its cached results/error messages will be returned. If not, the query will be run, results/error messages collected, put in the  cache , and returned.  ! note \"Context web app\" The intended context of this function is: web app.",
"func":1
},
{
"ref":"tf.advanced.search.runSearchCondensed",
"url":15,
"doc":"A wrapper around the generic search interface of TF. When query results need to be condensed into a container, this function takes care of that. It first tries the  cache for condensed query results. If that fails, it collects the bare query results from the cache or by running the query. Then it condenses the results, puts them in the  cache , and returns them.  ! note \"Context web app\" The intended context of this function is: web app.",
"func":1
},
{
"ref":"tf.advanced.find",
"url":16,
"doc":""
},
{
"ref":"tf.advanced.find.findAppConfig",
"url":16,
"doc":"Find the config information of an app. If there is a  config.yaml file, read it and check the compatibility of the config settings with the current version of Text-Fabric. If there is no such file but a  config.py is present, conclude that this is an older app, not compatible with TF v8 or higher. If there are no such config files, fill in a few basic settings. See Also     tf.advanced.settings: options allowed in  config.yaml ",
"func":1
},
{
"ref":"tf.advanced.find.findAppClass",
"url":16,
"doc":"Find the class definition of an app. The file  app.py in the app directory will be looked up, if it exists, it will be loaded as a Python module, and from this module we try to get the class  TfApp . Returns    - class | None If  TfApp can be found and imported, it is the result. Otherwise we return  None .",
"func":1
},
{
"ref":"tf.advanced.find.loadModule",
"url":16,
"doc":"Load a module dynamically, by name. Parameters      moduleName: string Name of a module under a TF-app that needs to be imported. args: mixed The same list of arguments that is passed to  tf.advanced.app.App of which only the  appName and the  appPath are used.",
"func":1
},
{
"ref":"tf.advanced.tables",
"url":17,
"doc":""
},
{
"ref":"tf.advanced.tables.compose",
"url":17,
"doc":"Takes a list of tuples and composes it into an HTML table. Some of the rows will be expandable, namely the rows specified by  opened , for which extra data has been fetched.  features is a list of names of features that will be shown in expanded pretty displays. Typically, it is the list of features used in the query that delivered the tuples.  position The current position in the list. Will be highlighted in the display.  getx=None If  None , a portion of the tuples will be put in a table. otherwise, it is an index in the list for which a pretty display will be retrieved. Typically, this happens when a TF-browser user clicks on a table row in order to expand it.",
"func":1
},
{
"ref":"tf.advanced.tables.composeT",
"url":17,
"doc":"Takes a list of tuples and composes it into an HTML table. Very much like  compose , but here the tuples come from a sections and/or tuples specification in the TF-browser.",
"func":1
},
{
"ref":"tf.advanced.tables.composeP",
"url":17,
"doc":"Takes a list of tuples and composes it into an HTML table. Like  composeT , but this is meant to compose the items at section level 2 (verses) within an item of section level 1 (chapter) within an item of section level 0 (a book). Typically invoked when a user of the TF-browser is browsing passages. The query is used to highlight its results in the passages that the user is browsing. Parameters      items: int or list of int A node or list of nodes. Some corpora require a passage to be shown as a pretty display of the section node in question, and then items is a single node. Normally, the items is the list of section nodes one level lower than the section node in question. See  browseContentPretty in  tf.advanced.settings .",
"func":1
},
{
"ref":"tf.advanced.highlight",
"url":18,
"doc":""
},
{
"ref":"tf.advanced.highlight.getHlAtt",
"url":18,
"doc":"Get the highlight attribute and style for a node for both pretty and plain modes. Parameters      app: obj The high-level API object n: int The node to be highlighted highlights: set|dict The nodes to be highlighted. Keys/elements are the nodes to be highlighted. This function is only interested in whether  n is in it, and if so, what the value is (in case of a dict). If given as set: use the default highlight color. If given as dict: use the value as color. isSlot: boolean Whether the node has the slotType Returns    - hlCls: dict Highlight attribute, keyed by boolean 'is pretty' hlStyle: dict Highlight color as css style, keyed by boolean 'is pretty'",
"func":1
},
{
"ref":"tf.advanced.highlight.getTupleHighlights",
"url":18,
"doc":"Get the highlights for a tuple of nodes. The idea is to mark the elements of a tuple of nodes with highlights, respecting a given set or dict of highlights and a color map. This is a bit of an intricate merging operation. Parameters      app: obj The high-level API object tup: tuple of int The tuple of nodes to be highlighted colorMap: dict A mapping of tuple positions to colors. Member  i of  tup should be highlighted with color  colorMap[i] . condenseType: string The type of node that acts as the basis of a pretty display. The nodes in the given  tup will be distributed over as many nodes of  condenseType as they occur in. highlights: set|dict The nodes to be highlighted. Keys/elements are the nodes to be highlighted. This function is only interested in whether the members of  tup are in it, and if so, what the values are (in case of a dict). If given as set: use the default highlight color. If given as dict: use the value as color.",
"func":1
},
{
"ref":"tf.advanced.highlight.getPassageHighlights",
"url":18,
"doc":"Get the highlights for a whole passage. Parameters      app: obj The high-level API object node: int The node of a passage (typically a chapter, or something that is occupies a page in the browser) query: string A query to run, and whose results will be highlighted (as far they occur in the passage) cache: dict A cache that holds run queries and their results. Useful when we browse many chapters and want to show the highlights of the same query.",
"func":1
},
{
"ref":"tf.advanced.helpers",
"url":19,
"doc":""
},
{
"ref":"tf.advanced.helpers.runsInNotebook",
"url":19,
"doc":"Determines whether the program runs in an interactive shell. From https: stackoverflow.com/questions/15411967/how-can-i-check-if-code-is-executed-in-the-ipython-notebook/24937408",
"func":1
},
{
"ref":"tf.advanced.helpers.dm",
"url":19,
"doc":"Display markdown. Parameters      md: string Raw markdown string. inNb: boolean, optional True Whether the program runs in a notebook unexpand: boolean Whether to strip a potential user path from the value first Returns    - None The formatted markdown is rendered in the output cell if  inNb else the raw markdown is printed to the output.",
"func":1
},
{
"ref":"tf.advanced.helpers.dh",
"url":19,
"doc":"Display HTML. Parameters      html: string Raw html string. inNb: boolean, optional True Whether the program runs in a notebook unexpand: boolean Whether to strip a potential user path from the value first Returns    - None The formatted HTML is rendered in the output cell if  inNb else the raw HTML is printed to the output.",
"func":1
},
{
"ref":"tf.advanced.helpers.backendRepl",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.splitModRef",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.getLocalDir",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.hasData",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.tupleEnum",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.parseFeatures",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.parseFeaturesLogical",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.transitiveClosure",
"url":19,
"doc":"Produce the reflexive transitive closure of a relation. The transitive closure of a relation R is the relation TR such that aTRb if and only if there is a chain of c1, c2,  ., cn such that ARc1, c1Rc2,  ., cnRb. If we allow the chain to have length zero, we effectively have that aTRa for all elements. That is the reflexive, transitive closure. This function builds the latter, but we allow for exceptions to the reflexivity. Parameters      relation: dict The input relation, keyed by elements, valued by the set of elements that stand in relation to the key. reflexiveExceptions: set The set of elements that will not be reflexively closed. Returns    - dict The transitive reflexive closure (with possible exceptions to the reflexivity) of the given relation. Notes   - We use this function to build the closure of the childType relation between node types. We want to exclude the slot type from the reflexivity. The closure of the childType relation is the descendant type relation. The display algorithm uses this to unravel nodes. See also     tf.advanced.display: Display algorithm",
"func":1
},
{
"ref":"tf.advanced.helpers.htmlSafe",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.getText",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.getValue",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.isUniform",
"url":19,
"doc":"Whether the members of tuples are uniform. An iterable of tuples of nodes is uniform, if each tuple has the same number of nodes, and if the type of a node at position  i in the tuple is the same for all tuples.",
"func":1
},
{
"ref":"tf.advanced.helpers.getRowsX",
"url":19,
"doc":"Transform an iterable of nodes into a table with extra information. If the tuples are uniform ( isUniform ), the formatting will be richer then when the tuples are not uniform.",
"func":1
},
{
"ref":"tf.advanced.helpers.getResultsX",
"url":19,
"doc":"Transform a uniform iterable of nodes into a table with extra information. Parameters      results: iterable of tuple of int A uniform  isUniform sequence of tuples of nodes features: key value pairs features per index position of the tuples. It specifies for some positions  i which features for the nodes at that position should be looked up. For each  i it should be an iterable or comma-separated list of feature names. condenseType: string A node type. Types smaller or equal than this type will have their text displayed in the result. fmt: string, optional None A text format. If text has to be displayed, this format is used. If not passed, a default is used.",
"func":1
},
{
"ref":"tf.advanced.helpers.getTuplesX",
"url":19,
"doc":"Transform a non-uniform iterable of nodes into a table with extra information. Parameters      results: iterable of tuple of int A uniform  isUniform sequence of tuples of nodes condenseType: string A node type. Types smaller or equal than this type will have their text displayed in the result. fmt: string, optional None A text format. If text has to be displayed, this format is used. If not passed, a default is used.",
"func":1
},
{
"ref":"tf.advanced.helpers.eScalar",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.eEmpty",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.eList",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.eDict",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.eRest",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.eData",
"url":19,
"doc":"",
"func":1
},
{
"ref":"tf.advanced.helpers.showDict",
"url":19,
"doc":"Shows selected keys of a dictionary in a pretty way. Parameters      inNb: boolean Whether we run in a notebook. keys: iterable of string For each key passed to this function, the information for that key will be displayed. If no keys are passed, all keys will be displayed. Returns    - displayed HTML An expandable list of the key-value pair for the requested keys.",
"func":1
},
{
"ref":"tf.advanced.data",
"url":20,
"doc":""
},
{
"ref":"tf.advanced.data.AppData",
"url":20,
"doc":"Collects TF data according to specifications. The specifications are passed as arguments when the object is initialized. Parameters      backend: string  github or  gitlab or a GitLab instance such as  gitlab.huc.knaw.nl . app: obj The high-level API object moduleRefs: tuple Each member consists of a module ref, which is a tuple of information that defines a module. locations: string|tuple One or more directory paths. They will be combined with the  modules argument and used as locations to search for TF data files. modules: string|tuple One or more directory path segments. They will be appended to the paths given by the  locations argument to form search locations for TF data files. version: string The version of TF data that should be retrievend. Version is a directory level just below the search locations. checkout: string A specifier to use a specific release or commit of a data repository. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp "
},
{
"ref":"tf.advanced.data.AppData.getMain",
"url":20,
"doc":"Get the main data of the corpus. This is specified by the  org ,  repo and  relative settings under  provenanceSpec in  config.yaml . See Also     tf.advanced.settings: options allowed in  config.yaml ",
"func":1
},
{
"ref":"tf.advanced.data.AppData.getStandard",
"url":20,
"doc":"Get the data of the standard modules specified by the settings of the corpus. These are specified in the  moduleSpecs setting under  provenanceSpecs in  config.yaml . They will be loaded  after the extra modules specified in the  mod parameter, and only in as far they have not been specifief in the  mod parameter. In this way you can pass overriding checkout specifiers to the standard modules. See Also     tf.advanced.settings: options allowed in  config.yaml ",
"func":1
},
{
"ref":"tf.advanced.data.AppData.getRefs",
"url":20,
"doc":"Get data from additional modules. These are specified in the  moduleRefs parameter of  AppData . We store the set of special modules in order to skip them later when we are loading the standard modules.",
"func":1
},
{
"ref":"tf.advanced.data.AppData.getModules",
"url":20,
"doc":"Get data from additional local directories. These are specified in the  locations and  modules parameters of  AppData .",
"func":1
},
{
"ref":"tf.advanced.data.AppData.getModule",
"url":20,
"doc":"Prepare to load a single module. Eventually, all TF data will be downloaded from local directories, bases on a list of location paths and module paths. This function computes the contribution of a single module to both the location paths and the module paths. Parameters      org: string GitHub organization or GitLab group of the module repo: string: GitHub repository or GitLab project of the module relative: string Path within the repository of the module checkout: string A specifier to use a specific release or commit of a data repository. backend: string The backend if different from the backend of the main module isBase: boolean, optional False Whether this module is the main data of the corpus. specs: dict, optional False Additional informational attributes of the module, e.g. a DOI",
"func":1
},
{
"ref":"tf.advanced.data.getModulesData",
"url":20,
"doc":"Retrieve all data for a corpus. Parameters      args: list All parameters needed to retrieve all associated data. They are the same as are needed to construct an  AppData object.",
"func":1
},
{
"ref":"tf.tools",
"url":21,
"doc":""
},
{
"ref":"tf.tools.release",
"url":22,
"doc":""
},
{
"ref":"tf.tools.release.makeRelease",
"url":22,
"doc":"",
"func":1
},
{
"ref":"tf.tools.nbconvert",
"url":23,
"doc":""
},
{
"ref":"tf.tools.nbconvert.task",
"url":23,
"doc":" sh nbconvert inputDir [outputDir]   Two modes: 1. If outputDir is given: Converts all  .ipynb files in  inputDir to  .html files in  outputDir . Copies all other files in  inputDir to  outputDir . If  outputDir does not exist, it will be created. Makes sure that all links in the resulting html to one of the original  .ipynb files are transformed in links to the converted  .html files. 2. Without outputDir Generates an index.html file in inputDir with links to all html files that can be recursively found inside the inputDir. Command switches   -h  help  ",
"func":1
},
{
"ref":"tf.tools.nbconvert.makeIndex",
"url":23,
"doc":"",
"func":1
},
{
"ref":"tf.tools.nbconvert.convertDir",
"url":23,
"doc":"",
"func":1
},
{
"ref":"tf.tools.nbconvert.main",
"url":23,
"doc":"",
"func":1
},
{
"ref":"tf.tools.pdocs",
"url":24,
"doc":""
},
{
"ref":"tf.tools.pdocs.console",
"url":24,
"doc":"",
"func":1
},
{
"ref":"tf.tools.pdocs.getCommand",
"url":24,
"doc":"",
"func":1
},
{
"ref":"tf.tools.pdocs.pdoc3serve",
"url":24,
"doc":"Build the docs into site and serve them.",
"func":1
},
{
"ref":"tf.tools.pdocs.pdoc3",
"url":24,
"doc":"Build the docs into site.",
"func":1
},
{
"ref":"tf.tools.pdocs.shipDocs",
"url":24,
"doc":"Build the docs into site and ship them.",
"func":1
},
{
"ref":"tf.tools.xmlschema",
"url":25,
"doc":" Meaningful information from XML schemas. When parsing XML it is sometimes needed to know the properties of the current element, especially whether it allows mixed content or not. If it does not, it is safe to discard white-space, otherwise not. Moreover, if there are two adjacent elements, each containing text, are the string at the end of the first element and the string at the start of the second element part of the same word? If both elements are contained in a element that does not allow mixed content, they are separate words (the XML-elements are used as data containers); otherwise they belong to the same word (the XML-elements annotate a piece of string). This module can perform several analysis tasks of xml schemas.  fromrelax task: Transforms a RelaxNG schema into an equivalent xsd schema using James Clark's trang library. For this, you must have java installed.  analyse task: Given an XML schema file, produces a tab-separated list of elements defined in the schema, with columns (element name) (simple or complex) (mixed or pure content)  tei task: Analyses the complete TEI schema plus optional customizations on top of it. If you pass an optional customized TEI schema, it will be analysed separately, and the result will be used to override the result of analysing the complete TEI schema. The complete TEI schema is part of this package, you do not have to provide it. It has been generated on with the online [TEI-Roma tool](https: roma.tei-c.org/startroma.php).  ! note \"Caution\" This code has only been tested on a single xsd, converted from a relaxRNG file produced by a customisation of TEI. It could very well be that I have missed parts of the semantics of XML-Schema.  Usage This program can be used as a library or as a command line tool.  As command-line tool  sh xmlschema fromrelax schema.rng xmlschema analyse schema.xsd xmlschema tei customschema.xsd xmlschema tei   Here  customschema and  schema are variable arguments. The result is written to a file in the current directory (from where the command  xmlschema is called):  from task  fromrelax is a file  schema .xsd ;  from task  analysis is written to  schema .tsv;  from task  tei is written to  customschema .tsv.  As library You can write a script with exactly the same behaviour as the  xmlschema command as follows:  python from tf.tools.xmlschema import Analysis A = Analysis() A.run()   You can run individual commands:  python from tf.tools.xmlschema import Analysis A = Analysis() good = A.task(\"tei\", \"customSchema.xsd\") good = A.task(\"analysis\", \"schema.xsd\" good = A.task(\"fromrelax\", \"schema.rng\")   In order to get the analysis results after tasks  tei and  analysis :  python if good: result = A.getDefs(asTsv=False) result = A.getDefs(asTsv=True)   You can also work a bit more low-level, e.g. to run the tei task:  python from tf.tools.xmlschema import Analysis A = Analysis() A.configure(override=schemaFile) A.interpret() if not A.good: quit() defs = A.getDefs()}  "
},
{
"ref":"tf.tools.xmlschema.Analysis",
"url":25,
"doc":"Trivial initialization of the Analysis class. Further configuration happens in the  configure method. Parameters      debug: boolean, optional False Whether to run in debug mode or not. In debug mode more information is shown on the console."
},
{
"ref":"tf.tools.xmlschema.Analysis.types",
"url":25,
"doc":""
},
{
"ref":"tf.tools.xmlschema.Analysis.notInteresting",
"url":25,
"doc":""
},
{
"ref":"tf.tools.xmlschema.Analysis.help",
"url":25,
"doc":"",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.configure",
"url":25,
"doc":"Configure for an XML schema and overrides Parameters      baseSchema: string, optional None The path of the xsd file that acts as the base schema that we want to analyse. If None, the complete TEI schema is chosen. override: string, optional None The path of another schema intended to override parts of the baseSchema. debug: boolean, optional False Whether to run in debug mode or not. In debug mode more information is shown on the console.",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.eKey",
"url":25,
"doc":"Sort the dict with element definitions. Parameters      x: (str, dict) The element name and the element info. Returns    - tuple The members are such that definitions from other than xs:element come first, and within xs:element those that are \"abstract\" come first.",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.interpret",
"url":25,
"doc":"Reads the xsd and interprets the element definitions. The definitions are read with the module  lxml . For each definition of a name certain attributes are remembered, e.g. the  kind , the presence of a  mixed attribute, whether it is a  substitutionGroup or  extension , and whether it is  abstract . When elements refer to a  substitutionGroup , they need to get the  kind and  mixed attributes of that group. When elements refer to a  base , they need to get the  kind and  mixed attributes of an extension with that  base . After an initial parse of the XSD file, we do a variable number of resolving rounds, where we chase the substitution groups and extensions, until nothing changes anymore. The info that is gathered is put in  self.defs and can be retrieved by method  getDefs() . The info is a list of items, one item per element. Each item is a tuple of: element name, element kind, mixed status. The absence of the element  kind and  mixed status are indicated with  None . If all went well, there are n such absences!",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.getDefs",
"url":25,
"doc":"Delivers the analysis results. Parameters      asTsv: boolean, optional False If True, the result is delivered as a TSV text, otherwise as a list. Returns    - str | list One line/item per element. Each line has: element name, element kind, mixed status. The absence of the element  kind and  mixed status are indicated with   - in the TSV and with the  None value in the list. If all went well, there are n such absences!",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.repMixed",
"url":25,
"doc":"",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.repKind",
"url":25,
"doc":"",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.resolve",
"url":25,
"doc":"Resolve indirections in the definitions. After having read the complete XSD file, we can now dereference names and fill properties of their definitions in places where the names occur.",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.showElems",
"url":25,
"doc":"Shows the current state of definitions. Mainly for debugging.",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.showOverrides",
"url":25,
"doc":"Shows the overriding definitions.",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.task",
"url":25,
"doc":"Implements a higher level task. Parameters      task: string The task to execute:  \"fromrelax\" ,  \"analyse\" , or  \"tei\" . ask: list Any arguments for the task. That could be a base schema and an override. Not all tasks require both. Returns    - boolean whether the task was completed successfully.",
"func":1
},
{
"ref":"tf.tools.xmlschema.Analysis.run",
"url":25,
"doc":"Run a task specified by arguments on the command line. Returns    - integer 0 if the task was executed successfully, otherwise 1 -1 is an error from before executing the task, 1 is an error from the actual execution of a task.",
"func":1
},
{
"ref":"tf.tools.xmlschema.main",
"url":25,
"doc":"",
"func":1
},
{
"ref":"tf.tools.checkdiffs",
"url":26,
"doc":""
},
{
"ref":"tf.tools.checkdiffs.checkDiffs",
"url":26,
"doc":"Check differences between runs of tf generations.",
"func":1
},
{
"ref":"tf.clean",
"url":27,
"doc":" Clean From version 7.7.7 onwards, Text-Fabric uses a parameter  tf.parameters.PACK_VERSION to mark the stored pre-computed data. Whenever there are incompatible changes in the packed data format, this version number will be increased and Text-Fabric will not attempt to load the older pre-computed data. The older data will not be removed, however. Use the function  clean to get rid of pre-computed data that you no longer need."
},
{
"ref":"tf.clean.out",
"url":27,
"doc":"Write to standard normal output immediately.",
"func":1
},
{
"ref":"tf.clean.err",
"url":27,
"doc":"Write to standard error output immediately.",
"func":1
},
{
"ref":"tf.clean.clean",
"url":27,
"doc":"Clean up older compressed .tfx files. Parameters      Removes all precomputed data resulting from other  PACK_VERSION s than the one currently used by Text-Fabric. You find the current pack version in  tf.parameters tfd: boolean, optional True By default, your  ~/text-fabric-data is traversed and cleaned, but if you pass  tfd=False it will be skipped. backend: string, optional,  None If None, only material in  text-fabric-data will be cleaned. But you can also clean clones of GitHub/GitLab. To clean GitHub/GitLab clones, pass  github /  gitlab . To clean the clones from a specific GitLab server, pass its server name. specific: string, optional,  None You can pass a specific directory here. The standard directories  ~/github and  ~/text-fabric-data will not be used, only the directory you pass here.  ~ will be expanded to your home directory. current: boolean, optional,  False If current=True, also the precomputed results of the current version will be removed. dry: boolean, optional,  False By default, nothing will be deleted, and you only get a list of what will be deleted if it were not a dry run. If you pass  dry=False the delete actions will really be executed.",
"func":1
},
{
"ref":"tf.core",
"url":28,
"doc":" Core API of TF This API deals with the basic TF data model: a graph of nodes and edges, annotated by features. The core API consists of   N : see  nodes.Nodes (walk through nodes)   F : see  nodefeature.NodeFeature (retrieve feature values for nodes)   E : see  edgefeature.EdgeFeature (retrieve feature values for edges)   L : see  locality.Locality (move between levels)   T : see  text.Text (get the text)   S : see  tf.search.search (search by templates) plus some additional methods."
},
{
"ref":"tf.core.computed",
"url":29,
"doc":" Precomputed data components In order to make the API work, Text-Fabric prepares some data and saves it in quick-load format. Most of this data are the features, but there is some extra data needed for the special functions of the  tf.parameters.WARP features and the  tf.core.locality.Locality API. Normally, you do not use this data, but since it is there, it might be valuable, so we have made it accessible in the  tf.core.computed.Computeds -api.  ! explanation \"Pre-computed data storage\" Pre-computed data is stored in cache directories in a directory  .tf inside the directory where the  otype feature is encountered. After precomputation the result is pickled and gzipped and written to a  .tfx file with the same name as the name of the feature. This is done for nromal features and pre-computed features likewise. After version 7.7.7 version the memory footprint of some precomputed features has been reduced. Because the precomputed features on disk are exact replicas of the precomputed features in RAM, older precomputed data does not work with versions of TF after 7.7.7. But from that version onwards, there is a parameter,  tf.parameters.PACK_VERSION to detect incompatibilities."
},
{
"ref":"tf.core.computed.Computeds",
"url":29,
"doc":""
},
{
"ref":"tf.core.computed.Computed",
"url":29,
"doc":"Provides access to precomputed data. For component  ccc it is the result of  C.ccc or  Cs('ccc') ."
},
{
"ref":"tf.core.otypefeature",
"url":30,
"doc":" Access to  otype feature data. In general, features are stored as dictionaries, but this specific feature has an optimized representation. Since it is a large feature and present in any TF dataset, this pays off."
},
{
"ref":"tf.core.otypefeature.OtypeFeature",
"url":30,
"doc":""
},
{
"ref":"tf.core.otypefeature.OtypeFeature.items",
"url":30,
"doc":"As in  tf.core.nodefeature.NodeFeature.items .",
"func":1
},
{
"ref":"tf.core.otypefeature.OtypeFeature.v",
"url":30,
"doc":"Get the node type of a node. Parameters      n: integer The node in question Returns    - string The node type of that node. All nodes have a node type, and it is always a string.",
"func":1
},
{
"ref":"tf.core.otypefeature.OtypeFeature.s",
"url":30,
"doc":"Query all nodes having a specified node type. This is an other way to walk through nodes than using  tf.core.nodes.Nodes.walk . Parameters      val: int | string The node type that all resulting nodes have. Returns    - tuple of int All nodes that have this node type, sorted in the canonical order. ( tf.core.nodes )",
"func":1
},
{
"ref":"tf.core.otypefeature.OtypeFeature.sInterval",
"url":30,
"doc":"The interval of nodes having a specified node type. The nodes are organized in intervals of nodes with the same type. For each type there is only one such interval. The first interval,  1:maxSlot + 1 is reserved for the slot type. Parameters      val: int | string The node type in question. Returns    - 2-tuple of int The start and end node of the interval of nodes with this type.",
"func":1
},
{
"ref":"tf.core.otypefeature.OtypeFeature.meta",
"url":30,
"doc":"Metadata of the feature. This is the information found in the lines starting with  @ in the  .tf feature file."
},
{
"ref":"tf.core.otypefeature.OtypeFeature.maxSlot",
"url":30,
"doc":"Last slot node in the corpus."
},
{
"ref":"tf.core.otypefeature.OtypeFeature.maxNode",
"url":30,
"doc":"Last node node.in the corpus."
},
{
"ref":"tf.core.otypefeature.OtypeFeature.slotType",
"url":30,
"doc":"The name of the slot type."
},
{
"ref":"tf.core.otypefeature.OtypeFeature.all",
"url":30,
"doc":"List of all node types from big to small."
},
{
"ref":"tf.core.fabric",
"url":31,
"doc":" FabricCore The main class that works the core API is  tf.fabric.Fabric . In this module we define  FabricCore , which contains most of the functionality of  Fabric . It does not contain the volume support. Volume support requires  tf.volumes.extract and  tf.volumes.collect which need to load and save Text-Fabric datasets, and loading and saving are Fabric functionalities. Hence a Fabric with volume support would lead to circular imports. By leaving out volume support, volume support can use FabricCore instead of Fabric."
},
{
"ref":"tf.core.fabric.PRECOMPUTE",
"url":31,
"doc":"Precomputation steps. Each step corresponds to a precomputation task. A task is specified by a tuple containing: Parameters      dep: boolean Whether the step is dependent on the presence of additional features. Only relevant for the precomputation of section structure: that should only happen if there are section features. name: string The name of the result of a precomputed task. The result is a blob of data that can be loaded and compressed just as ordinary features. function: function The function that performs the precomputation task. These functions are defined in  tf.core.prepare . dependencies: strings The remaining parts of the tuple are the names of precomputed features that must be coomputed before and whose results are passed as argument to the function that executes the precomputation. For a description of what the steps are for, see the functions in  tf.core.prepare ."
},
{
"ref":"tf.core.fabric.FabricCore",
"url":31,
"doc":"Initialize the core API for a corpus. Top level management of  locating tf feature files  loading and saving feature data  precomputing auxiliary data  caching precomputed and compressed data Text-Fabric is initialized for a corpus. It will search a set of directories and catalog all  .tf files it finds there. These are the features you can subsequently load. Here  directories and  subdirectories are strings with directory names separated by newlines, or iterables of directories. Parameters      locations: string | iterable of strings, optional The directories specified here are used as base locations in searching for tf feature files. In general, they will not searched directly, but certain subdirectories of them will be searched, specified by the  modules parameter. Defaults: ~/Downloads/text-fabric-data ~/text-fabric-data ~/github/text-fabric-data So if you have stored your main Text-Fabric dataset in  text-fabric-data in one of these directories you do not have to pass a location to Fabric. modules: string | iterable of strings The directories specified in here are used as sub directories appended to the directories given by the  locations parameter. All  .tf files (non-recursively) in any  location/module will be added to the feature set to be loaded in this session. The order in  modules is important, because if a feature occurs in multiple modules, the last one will be chosen. In this way you can easily override certain features in one module by features in an other module of your choice. Default:  [ ] So if you leave it out, Text-Fabric will just search the paths specified in  locations . silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp _withGc: boolean, optional True If False, it disables the Python garbage collector before loading features. Used to experiment with performance.  ! note \"otext@ in modules\" If modules contain features with a name starting with  otext@ , then the format definitions in these features will be added to the format definitions in the regular  otext feature (which is a  tf.parameters.WARP feature). In this way, modules that define new features for text representation, also can add new formats to the Text-API. Returns    - object An object from which you can call up all the of methods of the core API."
},
{
"ref":"tf.core.fabric.FabricCore.load",
"url":31,
"doc":"Loads features from disk into RAM memory. Parameters      features: string | iterable Either a string containing space separated feature names, or an iterable of feature names. The feature names are just the names of  .tf files without directory information and without extension. add: boolean, optional False The features will be added to the same currently loaded features, managed by the current API. Meant to be able to dynamically load features without reloading lots of features for nothing. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp Returns    - boolean | object If  add is  True a boolean indicating success is returned. Otherwise, the result is a new  tf.core.api.Api if the feature could be loaded, else  False .",
"func":1
},
{
"ref":"tf.core.fabric.FabricCore.explore",
"url":31,
"doc":"Makes categorization of all features in the dataset. Parameters      silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp show: boolean, optional True If  False , the resulting dictionary is delivered in  TF.featureSets ; if  True , the dictionary is returned as function result. Returns    - dict | None A dictionary with keys  nodes ,  edges ,  configs ,  computeds . Under each key there is the set of feature names in that category. How this dictionary is delivered, depends on the parameter  show . Notes   -  ! explanation \"configs\" These are config features, with metadata only, no data. E.g.  otext .  ! explanation \"computeds\" These are blocks of precomputed data, available under the  C API, see  tf.core.computed.Computeds . The sets do not indicate whether a feature is loaded or not. There are other functions that give you the loaded features:  tf.core.api.Api.Fall for nodes and  tf.core.api.Api.Eall for edges.",
"func":1
},
{
"ref":"tf.core.fabric.FabricCore.loadAll",
"url":31,
"doc":"Load all loadable features. Parameters      silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp ",
"func":1
},
{
"ref":"tf.core.fabric.FabricCore.clearCache",
"url":31,
"doc":"Clears the cache of compiled TF data. Text-Fabric precomputes data for you, so that it can be loaded faster. If the original data is updated, Text-Fabric detects it, and will recompute that data. But there are cases, when the algorithms of Text-Fabric have changed, without any changes in the data, where you might want to clear the cache of precomputed results. Calling this function just does it, and it is equivalent with manually removing all  .tfx files inside the hidden  .tf directory inside your dataset.  ! hint \"No need to load\" It is not needed to execute a  TF.load() first. See Also     tf.clean",
"func":1
},
{
"ref":"tf.core.fabric.FabricCore.save",
"url":31,
"doc":"Saves newly generated data to disk as TF features, nodes and/or edges. If you have collected feature data in dictionaries, keyed by the names of the features, and valued by their feature data, then you can save that data to  .tf feature files on disk. It is this easy to export new data as features: collect the data and metadata of the features and feed it in an orderly way to  TF.save() and there you go. Parameters      nodeFeatures: dict of dict The data of a node feature is a dictionary with nodes as keys (integers!) and strings or numbers as (feature) values. This parameter holds all those dictionaries, keyed by feature name. edgeFeatures: dict of dict The data of an edge feature is a dictionary with nodes as keys, and sets or dictionaries as values. These sets should be sets of nodes (integers!), and these dictionaries should have nodes as keys and strings or numbers as values. This parameter holds all those dictionaries, keyed by feature name. metaData: dict of dict The meta data for every feature to be saved is a key-value dictionary. This parameter holds all those dictionaries, keyed by feature name.  ! explanation \"value types\" The type of the feature values ('int' or 'str') should be specified under key  valueType .  ! explanation \"edge values\" If you save an edge feature, and there are values in that edge feature, you have to say so, by specifying  edgeValues=True in the metadata for that feature.  ! explanation \"generic metadata\" This parameter may also contain fields under the empty name. These fields will be added to all features in  nodeFeatures and  edgeFeatures .  ! explanation \"config features\" If you need to write the  config feature  otext , which is a metadata-only feature, just add the metadata under key  otext in this parameter and make sure that  otext is not a key in  nodeFeatures nor in  edgeFeatures . These fields will be written into the separate config feature  otext , with no data associated. location: dict The (meta)data will be written to the very last directory that TF searched when looking for features (this is determined by the  locations and  modules parameters in  tf.fabric.Fabric . If both  locations and  modules are empty, writing will take place in the current directory. But you can override it: If you pass  location=something , TF will save in  something/mod , where  mod is the last meber of the  modules parameter of TF. module: dict This is an additional way of overriding the default location where TF saves new features. See the  location parameter. If you pass  module=something , TF will save in  loc/something , where  loc is the last member of the  locations parameter of TF. If you pass  location=path1 and  module=path2 , TF will save in  path1/path2 . silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp ",
"func":1
},
{
"ref":"tf.core.fabric.FabricCore.exportMQL",
"url":31,
"doc":"Exports the complete TF dataset into single MQL database. Parameters      dirName: string dbName: string Returns    - None The exported data will be written to file  dirName / dbName.mql . If  dirName starts with  ~ , the  ~ will be expanded to your home directory. Likewise,    will be expanded to the parent of the current directory, and  . to the current directory, both only at the start of  dirName . See Also     tf.convert.mql",
"func":1
},
{
"ref":"tf.core.fabric.FabricCore.importMQL",
"url":31,
"doc":"Converts an MQL database dump to a Text-Fabric dataset.  ! hint \"Destination directory\" It is recommended to call this  importMQL on a TF instance called with TF = Fabric(locations=targetDir) Then the resulting features will be written in the targetDir. In fact, the rules are exactly the same as for  save() . Parameters      mqlFile: string Path to the file which contains the MQL code. slotType: string You have to tell which object type in the MQL file acts as the slot type, because TF cannot see that on its own. otext: dict You can pass the information about sections and text formats as the parameter  otext . This info will end up in the  otext.tf feature. Pass it as a dictionary of keys and values, like so: otext = { 'fmt:text-trans-plain': '{glyphs}{trailer}', 'sectionFeatures': 'book,chapter,verse', } meta: dict Likewise, you can add a dictionary keyed by features that will added to the metadata of the corresponding features. You may also add metadata for the empty feature    , this will be added to the metadata of all features. Handy to add provenance data there. Example: meta = {  : dict( dataset='DLC', datasetName='Digital Language Corpus', author=\"That 's me\", ), \"sp\": dict( description: \"part-of-speech\", ), }  ! note \"description\" Text-Fabric will display all metadata information under the key  description in a more prominent place than the other metadata.  ! caution \"valueType\" Do not pass the value types of the features here.",
"func":1
},
{
"ref":"tf.core.fabric.FabricCore.banner",
"url":31,
"doc":"The banner the Text-Fabric. Will be shown just after start up, if the silence is not  deep ."
},
{
"ref":"tf.core.fabric.FabricCore.version",
"url":31,
"doc":"The version number of the Text-Fabric library."
},
{
"ref":"tf.core.fabric.FabricCore.features",
"url":31,
"doc":"Dictionary of all features that TF has found, whether loaded or not. Under each feature name is all info about that feature. The best use of this is to get the metadata of features: TF.features['fff'].metaData This works for all features  fff that have been found, whether the feature is loaded or not. If a feature is loaded, you can also use  F.fff.meta of  E.fff.meta depending on whether  fff is a node feature or an edge feature.  ! caution \"Do not print!\" If a feature is loaded, its data is also in the feature info. This can be an enormous amount of information, and you can easily overwhelm your notebook if you print it."
},
{
"ref":"tf.core.locality",
"url":32,
"doc":" Local navigation between nodes."
},
{
"ref":"tf.core.locality.Locality",
"url":32,
"doc":"Methods by which you can navigate from a node to its neighborhood. Neighbours are: nodes that have slots in common, embedders and embeddees, previous and next siblings.  ! note \"L\" The Locality API is exposed as  L or  Locality .  ! note \"otype parameter\" In all of the following  L -functions, if the  otype parameter is passed, the result is filtered and only nodes with  otype=nodeType or  otype in nodeTypes are retained.  otype can be a string (a single node type) or a (frozen)set of node types.  ! caution \"Results of the  L. functions are tuples, not single nodes\" Even if an  L -function returns a single node, it is packed in a  tuple . So to get the node itself, you have to dereference the tuple: L.u(node)[0]  ! caution \"Locality and node types\" When using  tf.core.nodes.Nodes.sortNodes and the  L methods, note the following. Suppose you have node types  verse and  sentence , and usually a verse has multiple sentences, but not vice versa. Then you expect that   L.d(verseNode) will contain sentence nodes,   L.d(sentenceNode) will  not contain verse nodes. But if there is a verse with exactly one sentence, and both have exactly the same words, then that is a case where:   L.d(verseNode) will contain  sentenceNode ,   L.d(sentenceNode) will contain  verseNode ."
},
{
"ref":"tf.core.locality.Locality.i",
"url":32,
"doc":"Produces an ordered tuple of  intersecting nodes Intersecting nodes of a node have slots in common with that node. Parameters      node: dict The node whose intersectors will be delivered. otype: string or set of strings See  Locality . Returns    - tuple of int The tuple nodes is sorted in the canonical order ( tf.core.nodes ). The result never includes  n itself. But other nodes linked to the same set of slots as  n may count as intersector nodes. Slots themselves can be intersectors.",
"func":1
},
{
"ref":"tf.core.locality.Locality.u",
"url":32,
"doc":"Produces an ordered tuple of  upward nodes. Upward nodes of a node are embedders of that node. One node embeds an other if all slots of the latter are contained in the slots of the former. Parameters      node: integer The node whose embedders will be delivered. otype: string or set of strings See  Locality . Returns    - tuple of int The tuple nodes is sorted in the canonical order ( tf.core.nodes ), but  reversed : right and small embedders before left and big embedders. The result never includes  n itself. But other nodes linked to the same set of slots as  n may count as embedder nodes. Slots themselves are never embedders.",
"func":1
},
{
"ref":"tf.core.locality.Locality.d",
"url":32,
"doc":"Produces an ordered tuple of  downward nodes. Downward nodes of a node are embedded nodes in that node. One node is embedded in an other if all slots of the former are contained in the slots of the latter. Parameters      node: integer The node whose embeddees will be delivered. otype: string or set of strings See  Locality . Returns    - tuple of int The tuple nodes is sorted in the canonical order ( tf.core.nodes ), left and big embeddees before right and small embeddees. The result never includes  n itself. But other nodes linked to the same set of slots as  n may count as embeddee nodes.",
"func":1
},
{
"ref":"tf.core.locality.Locality.p",
"url":32,
"doc":"Produces an ordered tuple of  previous nodes. One node is previous to an other if the last slot of the former just preceeds the first slots of the latter. Parameters      node: integer The node whose previous nodes will be delivered. otype: string or set of strings See  Locality . Returns    - tuple of int The tuple nodes is sorted in the canonical order ( tf.core.nodes ), but  reversed : right and small embedders before left and big embedders.",
"func":1
},
{
"ref":"tf.core.locality.Locality.n",
"url":32,
"doc":"Produces an ordered tuple of  next nodes. One node is next to an other if the first slot of the former just follows the last slot of the latter. Parameters      node: integer The node whose next nodes will be delivered. otype: string or set of strings See  Locality . Returns    - tuple of int The tuple nodes is sorted in the canonical order ( tf.core.nodes ), left and big embeddees before right and small embeddees.",
"func":1
},
{
"ref":"tf.core.oslotsfeature",
"url":33,
"doc":" Access to  oslots feature data. In general, features are stored as dictionaries, but this specific feature has an optimized representation. Since it is a large feature and present in any TF dataset, this pays off."
},
{
"ref":"tf.core.oslotsfeature.OslotsFeature",
"url":33,
"doc":""
},
{
"ref":"tf.core.oslotsfeature.OslotsFeature.items",
"url":33,
"doc":"A generator that yields the non-slot nodes with their slots.",
"func":1
},
{
"ref":"tf.core.oslotsfeature.OslotsFeature.s",
"url":33,
"doc":"Get the slots of a (non-slot) node. Parameters      node: integer The node whose slots must be retrieved. Returns    - tuple The slot nodes of the node in question, in canonical order. ( tf.core.nodes ) For slot nodes  n it is the tuple  (n,) . All non-slot nodes are linked to at least one slot.",
"func":1
},
{
"ref":"tf.core.oslotsfeature.OslotsFeature.meta",
"url":33,
"doc":"Metadata of the feature. This is the information found in the lines starting with  @ in the  .tf feature file."
},
{
"ref":"tf.core.api",
"url":34,
"doc":" The core API of TF. It provides methods to navigate nodes and edges and lookup features."
},
{
"ref":"tf.core.api.Api",
"url":34,
"doc":""
},
{
"ref":"tf.core.api.Api.Fs",
"url":34,
"doc":"Get the node feature sub API. If feature name is not a valid python identifier, or if you do not know its name in advance, you can not use  F.feature , but you should use  Fs(feature) .",
"func":1
},
{
"ref":"tf.core.api.Api.Es",
"url":34,
"doc":"Get the edge feature sub API. If feature name is not a valid python identifier, or if you do not know its name in advance, you can not use  E.feature , but you should use  Es(feature) .",
"func":1
},
{
"ref":"tf.core.api.Api.Cs",
"url":34,
"doc":"Get the computed data sub API. If component name is not a valid python identifier, or if you do not know its name in advance, you can not use  C.component , but you should use  Cs(component) .",
"func":1
},
{
"ref":"tf.core.api.Api.Fall",
"url":34,
"doc":"Returns a sorted list of all usable, loaded node feature names.",
"func":1
},
{
"ref":"tf.core.api.Api.Eall",
"url":34,
"doc":"Returns a sorted list of all usable, loaded edge feature names.",
"func":1
},
{
"ref":"tf.core.api.Api.Call",
"url":34,
"doc":"Returns a sorted list of all usable, loaded computed data names.",
"func":1
},
{
"ref":"tf.core.api.Api.isLoaded",
"url":34,
"doc":"Show information about loaded features. Parameters      features: iterable | string, optional None The features to get info for. If absent or None: all features seen by TF. If a string, it is a comma and/or space spearated list of feature names. Otherwise the items of the iterable are feature names. pretty: boolean, optional True If True, it prints an overview of all features seen by TF with information about kind, type, source location and loaded status. The amount of information printed can be tweaked by other parameters. Otherwise, it returns this information as a dict. valueType: boolean, optional True Only relevant if  pretty=True : whether to print the value type of the values in the feature file. path: boolean, optional True Only relevant if  pretty=True : whether to print the path name of the feature file. meta: string|list|boolean, optional \"description\" Only relevant if  pretty=True : controls what metadata of the feature should be printed. If it is None, False, or the empty string or empty list: no metadata will be printed. It it is the boolean value True: all metadata will be printed. If it is a list of key names or a string with key names separated by white space and/or commas, only these metadata keys will be printed. Returns    - dict of dict The features are keys, the value per feature is None or a dict with the following information:  None if the feature is not loaded. If the feature is loaded:   kind :  node ,  edge ,  config ,  computed ;   type is the type of values:  int , or  str or    ;   edgeValues : if an edge feature it indicates whether the edges have values. Otherwise  None .   meta : dictionary containing the metadata of the feature If  pretty , nothing is returned, but the dict is pretty printed.",
"func":1
},
{
"ref":"tf.core.api.Api.makeAvailableIn",
"url":34,
"doc":"Exports members of the API to the global namespace. Only the members whose names start with a capital are exported. If you are working with a single data source in your program, it is a bit tedious to write the initial  TF.api. or  A.api all the time. By this method you can avoid that.  ! explanation \"Longer names\" There are also longer names which can be used as aliases to the single capital letters. This might or might not improve the readability of your program. short name | long name  - |  -  N |  Nodes  F |  Feature  Fs |  FeatureString  Fall |  AllFeatures  E |  Edge  Es |  EdgeString  Eall  AllEdges  C |  Computed  Cs  ComputedString  Call |  AllComputeds  L |  Locality  T |  Text  S |  Search Parameters      scope: dict A dictionary into which the members of the core API will be inserted. The only sensible choice is:  globals() . Returns    - tuple A grouped list of API members that has been hoisted to the global scope. Notes   -  ! explanation \"Why pass  globals() ?\" Although we know it should always be  globals() , we cannot define a function that looks into the  globals() of its caller. So we have to pass it on.",
"func":1
},
{
"ref":"tf.core.api.Api.ensureLoaded",
"url":34,
"doc":"Checks if features are loaded and if not loads them. All features in question will be made available to the core API. Parameters      features: string | iterable of strings It is a string containing space separated feature names, or an iterable of feature names. The feature names are just the names of  .tf files without directory information and without extension. Returns    - set The names of the features in question as a set of strings.",
"func":1
},
{
"ref":"tf.core.api.Api.ignored",
"url":34,
"doc":"Which features were found but ignored. Features are ignored if the feature is also present in another location that is loaded later."
},
{
"ref":"tf.core.api.addOtype",
"url":34,
"doc":"",
"func":1
},
{
"ref":"tf.core.api.addLocality",
"url":34,
"doc":"",
"func":1
},
{
"ref":"tf.core.api.addNodes",
"url":34,
"doc":"",
"func":1
},
{
"ref":"tf.core.api.addText",
"url":34,
"doc":"",
"func":1
},
{
"ref":"tf.core.api.addSearch",
"url":34,
"doc":"",
"func":1
},
{
"ref":"tf.core.text",
"url":35,
"doc":" Text API Here are the functions that enable you to get the actual text in the dataset. There are several things to accomplish here, such as  support the structure of the corpus  support a rigid section system usable by the TF browser  handle multilingual section labels;  switch between various text representations. The details of the Text API are dependent on the  tf.parameters.WARP feature  otext , which is a config feature.  ! hint \"T\" The Text API is exposed as  T or  Text .  ! note \"otext is optional\" If your dataset does not have an  otext feature, the Text API will not be build. If it exists, but does not specify structure or sections, those parts of the Text API will not be built. Likewise for text representations.  Structure If a corpus has sectional elements, such as series, volume, book, part, document, chapter, fragment, verse, halfverse, line, etc, then you can configure those elements as structural types. If your TF dataset designer has done that, the  T.api will provide a number of handy functions to navigate your corpus along its structure, programmatically. The [banks](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/programs/structure.ipynb) example corpus shows a full example. Structure is defined in the  otext feature, by means of the keys  structureTypes and  structureFeatures . These are comma-separated lists of equal length.  structureTypes specifies the node types that act as structural types, in the order from biggest to smallest.  structureFeatures specifies a feature that corresponds to each structural type. This feature must contain the label of the structural element, e.g. the title of a book, the number of a verse, etc. The order of the section types is significant. Suppose you have a book with a single chapter. Is the chapter part of the book, or is the book part of the chapter? The order decides. If  book is mentioned in  structureTypes before  chapter then the chapter is part of the book, and not the other way around. However, it is allowed to have nesting of elements of the same kind.  ! explanation \"Proper embedding not required\" There are no assumptions on how exactly the structural elements lie embedded in each other, and whether they consist of uninterrupted stretches of material or not. Suppose a we have a book with two disjoint chapters and there is a verse that has material in both chapters. Then that verse is part of neither chapter, but it is still part of the book. If you go down from that book to its substructural elements, you find not only its chapters, but also that verse. So the great freedom with respect to structural elements also brings greater responsibility when using that structure.  Sections In  otext the main section levels (usually  book ,  chapter ,  verse ) can be defined. It loads the features it needs (so you do not have to specify those features, unless you want to use them via  F ). And finally, it makes some functions available by which you can make handy use of that information.  ! explanation \"Section levels from a limited, rigid system\" There are up to three section levels, and this is a hard coded boundary. That makes this section system unsuitable to faithfully reflect the rich sectioning that may be present in a corpus. On the other hand, applications (such as TF apps) can access a predictable sectioning system by which they can divide the material in practical portions. The rule of thumb is: Level 1 divides the corpus into top level units, of which there might be (very) many. The TF browser has a control that can deal with long lists. Level 2 divides a level 1 section into a division that can be loaded into a webpage, without overwhelming the browser. Even better, it should be just one or a few screenfuls of text, when represented in  plain view. Level 3 divides a level 2 section into divisions that roughly corresponds to lines. Such lines typically take up one screenful if represented in  pretty view.  ! explanation \"Section levels are generic\" In this documentation, we call the main section level  book , the second level  chapter , and the third level  verse . Text-Fabric, however, is completely agnostic about how these levels are called. It is prepared to distinguish three section levels, but how they are called, must be configured in the dataset. The task of the  otext feature is to declare which node type and feature correspond with which section level. Text-Fabric assumes that the first section level may have multilingual headings, but that section levels two and three have single language headings (numbers of some kind).  ! explanation \"String versus number\" Chapter and verse numbers will be considered to be strings or integers, depending on whether your dataset has declared the corresponding feature  valueType as  str or as  int . Conceivably, other works might have chapter and verse numbers like  XIV , '3A', '4.5', and in those cases these numbers are obviously not  int s.  ! explanation \"levels of node types\" Usually, Text-Fabric computes the hierarchy of node types correctly, in the sense that node types that act as containers have a lower level than node types that act as containees. So books have the lowest level, words the highest. See [levels]( levels). However, if this level assignment turns out to be wrong for your dataset, you can configure the right order in the  otext feature, by means of a key  levels with value a comma separated list of levels. Example: @levels=tablet,face,column,line,case,cluster,quad,comment,sign  Book names and languages The names of the books may be available in multiple languages. The book names are stored in node features with names of the form  book@ la , where  la is the [ISO 639](https: en.wikipedia.org/wiki/ISO_639) two-letter code for that language. Text-Fabric will always load these features.  Text representation Text can be represented in multiple ways. We provide a number of formats with structured names. A format name is a string of keywords separated by  - :  what - how - fullness - modifier For Hebrew any combination of the follwoing could be useful formats: keyword | value | meaning    - |   - |    -  what |  text | words as they belong to the text  what |  lex | lexemes of the words  how |  orig | in the original script (Hebrew, Greek, Syriac) (all Unicode)  how |  trans | in (latin) transliteration  how |  phono | in phonetic/phonological transcription  fullness |  full | complete with accents and all diacritical marks  fullness |  plain | with accents and diacritical marks stripped, in Hebrew only the consonants are left  modifier |  ketiv | (Hebrew): where there is ketiv/qere, follow ketiv instead of qere (default); The default format is  text-orig-full , we assume that every TF dataset defines this format. A format is a template string, with fixed text and variable text. The variable text comes from features. You specify the interpolation of features by surrounding the feature name by  { } . For example, if  letters and  after are features, this is a text format:   {letters}{after}   If you need tabs and newlines in a format, specify them by \\t and \\n. You can also conditionally choose between features, to substitute the value of another feature in case of empty values. For example, if you want to use the  normal feature to represent a word, but if there is also a rare feature  special that you want to use if it is defined for that word, you can make a format   {special/normal}   This tries the feature  special first, and if that is undefined, it takes  normal .  ! caution \"undefined versus empty\" The criterion to skip the value of feature  special and use the value of feature  normal is that  special either has no value, or its value is  None (Text-Fabric essentially makes no difference between the two). But if the value of  special happens to be the empty string, it will be used!  ! hint \"longer chains\" You can chain multiple features with  / , as many as you want:  {veryspecial/special/often/normal}  You can also add a fixed default. If you want to display a  . if neither  special nor  normal exist, you can say   {special/normal:.}   You can also specify the empty string as the default:   {special/normal:}   However, you do not need to do that, because the default is the empty string by default! TF datasets may also define formats of the form  nodetype -default where  nodetype is a valid type of node in the dataset. These formats will be invoked in cases where no explicit format is specified as a fall back for some kind of nodes. See  T.text() below. A node type may also be prepended to a format, with  as separator:  nodetype textformat In general, a format can be applied to any kind of node, and it will lookup the features defined in its template for that node. But some features have meaningful values for particular node types only. So formats may indicate that they should be applied to nodes of a specific type. See  T.text() below. Remember that the formats are defined in the  otext warp config feature of your set, not by Text-Fabric.  ! note \"Freedom of names for formats\" There is complete freedom of choosing names for text formats. They do not have to complied with the above-mentioned scheme.  ! note \"layout in formats\" So far, text formats only result in plain text. A corpus app ( tf.advanced.app ) may define and implement extra text formats which may invoke all HTML+CSS styling that you can think of.  The T.text() function The way th  tf.core.text.Text.text responds to its parameters may look complicated, but the retionale is that the defaults should be sensible. Consider the simplest call to this function:  T.text(node) . This will apply the default format to  node . If  node is non-slot, then in most cases the default format will be applied to the slots contained in  node . But for special node types, where the best representation is not obtained by descending down to the contained slot nodes, the dataset may define special default types that use other features to furnish a decent representation.  ! explanation \"lexemes\" In some corpora case this happens for the type of lexemes:  lex . Lexemes contain their occurrences as slots, but the representation of a lexeme is not the string of its occurrences, but resides in a feature such as  voc_lex_utf8 (vocalized lexeme in Unicode). If the dataset defines the format  lex-default={lex}  , this is the only thing needed to regulate the representation of a lexeme. Hence,  T.text(lx) results in the lexeme representation of  lx . But if you really want to print out all occurrences of lexeme  lx , you can say  T.text(lx, descend=True) .  ! explanation \"words and signs\" In some corpora the characters or signs are the slot level, and there is a non slot level of words. Some text formats are best defined on signs, others best on words. For example, if words are associated with lexemes, stored in a word feature  lex , we can define a text format lex-orig-full=word {lex}  When you call  T.text(n) for a non-slot, non-word node, normally the node will be replaced by the slot nodes it contains, before applying the template in the format. But if you pass a format that specifies a different node type, nodes will be replaced by contained nodes of that type. So T.text(n, fmt='lex-orig-full') will lookup all word nodes under  n and apply the template  {lex} to them.  ! caution \"same and different behaviours\" The consequences of the rules might be unexpected in some cases. Here are a few observations:  formats like  phrase-default can be implicitly invoked for phrase nodes, but  descend=True prevents that;  when a format targeted at phrases is invoked for phrase nodes,  descend=True will not cause the expansion of those nodes to slot nodes, because the phrase node is already expanded to the target type of the format;  ! hint \"memory aid\"  If  fmt is explicitly passed, it will be the format used no matter what, and it determines the level of the nodes to descend to;  Descending is the norm, it can only be prevented by setting default formats for node types or by passing  descend=False to  T.text() ;   descend=True is stronger than type-specific default formats, but weaker than explicitly passed formats;   Pass  explain=True for a dynamic explanation.  ! note \"Non slot nodes allowed\" In most cases, the nodes fed to  T.text() are slots, and the formats are templates that use features that are defined for slots. But nothing prevents you to define a format for non-slot nodes, and use features defined for a non-slot node type. If, for example, your slot type is  glyph , and you want a format that renders lexemes, which are not defined for glyphs but for words, you can just define a format in terms of word features. It is your responsibility to take care to use the formats for node types for which they make sense.  ! caution \"Escape whitespace in formats\" When defining formats in  otext.tf , if you need a newline or tab in the format, specify it as   and   ."
},
{
"ref":"tf.core.text.Text",
"url":35,
"doc":"Low level text representation, including section headings. In addition to the methods that are directly defined, there are also methods  xxxName() and  xxxNode() where  xxx is whatever the node type of level 1 sections is.  ! note \"level 1 node types\" In the BHSA the  xxx is  book , in the DSS it is  scroll , in Old Babylonian it is  document , and in Uruk it is  tablet . Here we take the BHSA as example:  bookName() and  bookNode() T.bookName(node, lang='en') T.bookNode(name, lang='en') with node:int the node in question, name:str the name in question, and  lang='en' the language of the book name."
},
{
"ref":"tf.core.text.Text.sectionTuple",
"url":35,
"doc":"Gives a tuple of nodes that correspond to a sections More precisely, we retrieve the sections that contain a reference node, which is either the first slot or the last slot of the node in question. Parameters      n: integer The node whose containing section to retrieve. lastSlot: boolean, optional False Whether the reference node will be the last slot contained by  n or the first slot. fillup: boolean, optional False Whether to fill up the tuple with missing section elements. Returns    - section: tuple of int If  n is not a section node, a reference node  r will be taken according to the  lastSlot parameter. If  fillup  False : If  r is a level 0 section node,  section is the 1-element tuple  (r,) . If  r is a level 1 section node,  section is a 2-element tuple, i.e. the enclosing level 0 section node and  r itself. If  r is a level 2 section node,  section is a 3-element tuple, i.e. the enclosing level 0 and 1 section nodes and  r itself. If  fillup  True , always a complete 3-tuple of a level 0, 1, and 2 section nodes is returned.",
"func":1
},
{
"ref":"tf.core.text.Text.sectionFromNode",
"url":35,
"doc":"Gives the full heading of a section node. Parameters      n: integer The node whose heading to retrieve. lastSlot: boolean, optional False Whether the reference node will be the last slot contained by  n or the first slot. lang: string, optional en The language assumed for the section parts, as far as they are language dependent. Must be a 2-letter language code. fillup: boolean, optional False Whether to fill up the tuple with missing section elements. Returns    - heading: tuple of pairs If  n is not a section node, a reference node  r will be taken according to the  lastSlot parameter. It is the tuple of integer/string values for section ancestors of  r and  r itself, where the  fillup parameter plays the same role as in  Text.sectionTuple . Notes   -  ! hint \"crossing verse boundaries\" Sometimes a sentence or clause in a verse continue into the next verse. In those cases, this function will return different results for  lastSlot=False and  lastSlot=True . Warnings     Nodes that lie outside any book, chapter, or verse will get a  None in the corresponding members of the returned tuple.",
"func":1
},
{
"ref":"tf.core.text.Text.nodeFromSection",
"url":35,
"doc":"Given a section tuple, return the node of it. Parameters      section: string  section consists of a book name (in language  lang ), and a chapter number and a verse number (both as strings or number depending on the value type of the corresponding feature). lang: string, optional en The language assumed for the section parts, as far as they are language dependent. Must be a 2-letter language code. Returns    - section node: integer If section labels for all three levels is present, the result is a level 3 node. If the level 3 label has been left out, the result is a level 2 node. If both level 1 and level 2 labels have been left out, the result is a level 1 node.",
"func":1
},
{
"ref":"tf.core.text.Text.structureInfo",
"url":35,
"doc":"Gives a summary of how structure has been configured in the dataset. If there are headings that are the same for multiple structural nodes, you'll get a warning here, and you are told how you can get all of those. It also shows a short description of all structure-related methods of the  T API.",
"func":1
},
{
"ref":"tf.core.text.Text.structure",
"url":35,
"doc":"Gives the structure of node and everything below it as a tuple. Parameters      node: integer, optional None The node whose structure is asked for. If  node is None, the complete structure of the whole dataset is returned. Returns    - structure: tuple Nested tuple of nodes involved in the structure below a node.",
"func":1
},
{
"ref":"tf.core.text.Text.structurePretty",
"url":35,
"doc":"Gives the structure of node and everything below it as a string. Parameters      node: integer, optional None The node whose structure is asked for. If  node is None, the complete structure of the whole dataset is returned. fullHeading: boolean, optional False Normally, for each structural element, only its own subheading is added. But if you want to see the full heading, consisting of the headings of a node and all of its parents, pass  True for this parameter. Returns    - structure: string Pretty representation as string with indentations of the structure below a node.",
"func":1
},
{
"ref":"tf.core.text.Text.top",
"url":35,
"doc":"Gives all top-level structural nodes in the dataset. These are the nodes that are not embedded in a structural node of the same or a higher level.",
"func":1
},
{
"ref":"tf.core.text.Text.up",
"url":35,
"doc":"Gives the parent of a structural node. Parameters      n: integer The node whose parent to retrieve. Returns    - parent: integer The parent is that structural node that whose heading you get from the heading of  n minus its last element. Notes   -  !hint \"Example\" The parent of   book, Genesis), (chapter, 3), (verse, 16  is the node that has heading   book, Genesis), (chapter, 3  .",
"func":1
},
{
"ref":"tf.core.text.Text.down",
"url":35,
"doc":"Gives the children of a structural node. Parameters      n: integer The node whose children to retrieve. Returns    - children: tuple of integers The children are those structural nodes whose headings are one longer than the one from  n . Notes   -  !hint \"Example\" The children of   book, Genesis), (chapter, 3  are the nodes with heading   book, Genesis), (chapter, 3), (verse, 1  , etc.",
"func":1
},
{
"ref":"tf.core.text.Text.headingFromNode",
"url":35,
"doc":"Gives the full heading of a structural node. Parameters      n: integer The node whose heading to retrieve. Returns    - heading: tuple of pairs It is the tuple of pairs (node type, feature value) for all ancestors of  n . Notes   -  !hint \"Example\" E.g., the heading of the verse node corresponding to Genesis 3:16 is   book, Genesis), (chapter, 3), (verse, 16  .  !hint \"Power tip\" If you are interested in the complete mapping: it is stored in the dictionary  hdFromNd .",
"func":1
},
{
"ref":"tf.core.text.Text.nodeFromHeading",
"url":35,
"doc":"Gives the node corresponding to a heading, provided it exists. Parameters      head: tuple of pairs See the result of  headingFromNode . Returns    - node: int If there is more than one node that corresponds to the heading, only the last one in the corpus will be returned.  hdMult contains all such cases. Notes   -  !hint \"Power tip\" If you are interested in the complete mapping: it is stored in the dictionary  ndFromHd .",
"func":1
},
{
"ref":"tf.core.text.Text.text",
"url":35,
"doc":"Gives the text that corresponds to a bunch of nodes. The [banks](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/programs/formats.ipynb) example corpus shows examples. Parameters      nodes: dict  nodes can be a single node or an arbitrary iterable of nodes of arbitrary types. No attempt will be made to sort the nodes. If you need order, it is better to sort the nodes first. fmt: boolean, optional None The text-format of the text representation. If it is not specified or  None , each node will be formatted with a node type specific format, defined as  nodeType -default , if it exists. If there is no node specific format, the default format  text-orig-full will be used. If  text-orig-full is not defined, an error message will be issued, and the nodes will be represented by their types and numbers. If a value for  fmt is passed, but it is not a format defined in the  otext.tf feature, there will be an error message and  None is returned. descend: boolean, optional None Whether to descend to constituent nodes. If  True , nodes will be replaced by a sequence of their consituent nodes, which have a type specified by the format chosen, or, if the format does not specify such a type, the node will be replaced by the slots contained in it. If  False , nodes will not be replaced. If  descend is not specified or None, a node will be replaced by its constituent nodes, unless its type is associated with the given format or, if no format is given, by the default format of its type, or, if there is no such format, by its slots.  ! caution \"no nodes to descend to\" If you call  T.text(n, fmt=myfmt) and  myfmt is targeted to a node type that is bigger than the node type of  n , then the so-called descending leads to an empty sequence of nodes and hence to an empty string. explain: boolean, optional False The logic of this function is subtle. If you call it and the results baffles you, pass  explain=True and it will explain what it is doing.",
"func":1
},
{
"ref":"tf.core.text.Text.splitFormat",
"url":35,
"doc":"",
"func":1
},
{
"ref":"tf.core.text.Text.splitDefaultFormat",
"url":35,
"doc":"",
"func":1
},
{
"ref":"tf.core.text.Text.languages",
"url":35,
"doc":"A dictionary of the languages that are available for book names."
},
{
"ref":"tf.core.text.Text.formats",
"url":35,
"doc":"The text representation formats that have been defined in your dataset."
},
{
"ref":"tf.core.nodefeature",
"url":36,
"doc":" Mappings from nodes to values. Every node feature is logically a mapping from nodes to values, string or integer. A feature object gives you methods that you can pass a node and that returns its value for that node. It is easiest to think of all node features as a dictionary keyed by nodes. However, some features have an optimized representation, and do not have a dictionary underneath. But you can still iterate over the data of a feature as if it were a dictionary:  tf.core.nodefeature.NodeFeature.items "
},
{
"ref":"tf.core.nodefeature.NodeFeatures",
"url":36,
"doc":""
},
{
"ref":"tf.core.nodefeature.NodeFeature",
"url":36,
"doc":"Provides access to (node) feature data. For feature  fff it is the result of  F.fff or  Fs('fff') ."
},
{
"ref":"tf.core.nodefeature.NodeFeature.items",
"url":36,
"doc":"A generator that yields the items of the feature, seen as a mapping. It does not yield entries for nodes without values, so this gives you a rather efficient way to iterate over just the feature data, instead of over all nodes. If you need this repeatedly, or you need the whole dictionary, you can store the result as follows: data = dict(F.fff.items( ",
"func":1
},
{
"ref":"tf.core.nodefeature.NodeFeature.v",
"url":36,
"doc":"Get the value of a feature for a node. Parameters      n: integer The node in question Returns    - integer | string | None The value of the feature for that node, if it is defined, else  None .",
"func":1
},
{
"ref":"tf.core.nodefeature.NodeFeature.s",
"url":36,
"doc":"Query all nodes having a specified feature value. This is an other way to walk through nodes than using  tf.core.nodes.Nodes.walk . Parameters      value: int | string The feature value that all resulting nodes have. Returns    - tuple of int All nodes that have this value for this feature, sorted in the canonical order. ( tf.core.nodes )",
"func":1
},
{
"ref":"tf.core.nodefeature.NodeFeature.freqList",
"url":36,
"doc":"Frequency list of the values of this feature. Inspect the values of this feature and see how often they occur. Parameters      nodeTypes: set of string, optional None If you pass a set of nodeTypes, only the values for nodes within those types will be counted. Returns    - tuple of 2-tuple A tuple of  (value, frequency) , items, ordered by  frequency , highest frequencies first.",
"func":1
},
{
"ref":"tf.core.nodefeature.NodeFeature.meta",
"url":36,
"doc":"Metadata of the feature. This is the information found in the lines starting with  @ in the  .tf feature file."
},
{
"ref":"tf.core.nodes",
"url":37,
"doc":" Node organization This module is about ordering nodes in terms of the slot nodes they are attached to.  Canonical Order Nodes are linked to subsets of slots, and there is a canonical ordering on subsets of integers that is inherited by the nodes. The canonical order is a way to sort the nodes in your corpus in such a way that you can enumerate all nodes in the order you encounter them if you walk through your corpus. Formally : A node  A comes before a node  B if  A contains the smallest slot that occurs in only one of  A and  B . Briefly this means:  embedder nodes come before the nodes that lie embedded in them;  earlier stuff comes before later stuff,  if a verse coincides with a sentence, the verse comes before the sentence, because verses generally contain sentences and not the other way round;  if two objects are intersecting, but none embeds the other, the one with the smallest slot that does not occur in the other, comes first.  ! note \"first things first, big things first\" That means, roughly, that you start with a book node (Genesis), then a chapter node (Genesis 1), then a verse node, Genesis 1:1, then a sentence node, then a clause node, a phrase node, and the first word node. Then follow all word nodes in the first phrase, then the phrase node of the second phrase, followed by the word nodes in that phrase. When ever you enter a higher structure, you will first get the node corresponding to that structure, and after that the nodes corresponding to the building blocks of that structure. This concept follows the intuition that slot sets with smaller elements come before slot set with bigger elements, and embedding slot sets come before embedded slot sets. Hence, if you enumerate a set of nodes that happens to constitute a tree hierarchy based on slot set embedding, and you enumerate those nodes in the slot set order, you will walk the tree in pre-order. This order is a modification of the one as described in (Doedens 1994, 3.6.3). ![fabric]( /images/DoedensLO.png) > Doedens, Crist-Jan (1994),  Text Databases. One Database Model and Several > Retrieval Languages , number 14 in Language and Computers, Editions Rodopi, > Amsterdam, Netherlands and Atlanta, USA. ISBN: 90-5183-729-1, > https: books.google.nl/books?id=9ggOBRz1dO4C. The order as defined by > Doedens corresponds to walking trees in post-order. For a lot of processing, it is handy to have a the stack of embedding elements available when working with an element. That is the advantage of pre-order over post-order. It is very much like SAX parsing in the XML world."
},
{
"ref":"tf.core.nodes.Nodes",
"url":37,
"doc":""
},
{
"ref":"tf.core.nodes.Nodes.makeSortKeyChunk",
"url":37,
"doc":"",
"func":1
},
{
"ref":"tf.core.nodes.Nodes.sortNodes",
"url":37,
"doc":"Delivers a tuple of nodes sorted by the  canonical ordering . Parameters      nodeSet: iterable An iterable of nodes to be sorted. Returns    - list The sorted nodes as list See Also     tf.core.nodes: canonical ordering",
"func":1
},
{
"ref":"tf.core.nodes.Nodes.walk",
"url":37,
"doc":"Generates all nodes in the  canonical order . ( tf.core.nodes ) By  walk() you traverse all nodes of your corpus in a very natural order. See  tf.core.nodes . The order is much like walking a tree in pre-order: first parents, then children from left to right. The thing is: in general the nodes do not form a tree, but a more liberal structure: a graph. But even then we can order the nodes in such a way that nodes that embed slots from other nodes come before those other nodes, provided those other nodes start later. When we generate those nodes and consume them, we now when each node starts, but we loose track of where exactly they end. To remedy that, you can call this function with  events=True . In that case, a stream of events is generated, where each event has the form  (node, False) or  (node, True) , where  False means: beginning of node and  True means: end of node. In case of slot nodes, only one event per slot is generated:  (node, None) .  ! hint \"More ways of walking\" Under  tf.core.nodefeature.NodeFeatures there is another convenient way to walk through subsets of nodes. Parameters      nodes: iterable of int, optional None If  None , walks through all nodes of the corpus in canonical order. Otherwise, walks through the given nodes in canonical order. events: boolean, optional False If True, wraps the generated nodes in event tuples as described above. Returns    - nodes: int One at a time.",
"func":1
},
{
"ref":"tf.core.nodes.Nodes.otypeRank",
"url":37,
"doc":"Dictionary that provides a ranking of the node types. The node types are ordered in  C.levels.data , and if you reverse that list, you get the rank of a type by looking at the position in which that type occurs. The  slotType has rank 0 ( otypeRank[F.otype.slotType]  0 ), and the more comprehensive a type is, the higher its rank."
},
{
"ref":"tf.core.nodes.Nodes.sortKey",
"url":37,
"doc":"Sort key function for the canonical ordering between nodes.  ! hint \"usage\" The following two pieces of code do the same thing:  sortNodes(nodeSet) and  sorted(nodeSet, key=sortKey) . See Also     tf.core.nodes: canonical ordering tf.core.nodes.Nodes.sortNodes: sorting nodes"
},
{
"ref":"tf.core.nodes.Nodes.sortKeyTuple",
"url":37,
"doc":"Sort key function for the canonical ordering between tuples of nodes. It applies  sortKey to each member of the tuple. Handy to sort search results. We can sort them in canonical order like this: sorted(results, key=lambda tup: tuple(sortKey(n) for n in tup This is exactly what  sortKeyTuple does, but then a bit more efficient: sorted(results, key=sortKeyTuple) See Also     tf.core.nodes: canonical ordering"
},
{
"ref":"tf.core.nodes.Nodes.sortKeyChunk",
"url":37,
"doc":"Sort key function for the canonical ordering between chunks of nodes. sorted(chunks, key=sortKeyChunk) A chunk is a tuple consisting of a node and a subset of its slots. Mostly, this subset of slots is contiguous (no gaps), and mostly it is maximal: the slots immediately before and after the chunk do not belong to the node. But the sortkey also works if these conditions are not met. Notes   - The use case for this function is that we have a bunch of nodes, each linked to a set of slots. For each node, we have split its slot set in maximal contiguous parts, its chunks. Now we want to order those chunks in the canonical ordering. See Also     tf.core.nodes: canonical ordering"
},
{
"ref":"tf.core.timestamp",
"url":38,
"doc":" Timed messages Error and informational messages can be issued, with a time indication."
},
{
"ref":"tf.core.timestamp.VERBOSE",
"url":38,
"doc":"Increased verbosity."
},
{
"ref":"tf.core.timestamp.AUTO",
"url":38,
"doc":"Convenient level of silence."
},
{
"ref":"tf.core.timestamp.TERSE",
"url":38,
"doc":"More silence."
},
{
"ref":"tf.core.timestamp.DEEP",
"url":38,
"doc":"No output, except error messages."
},
{
"ref":"tf.core.timestamp.SILENT_D",
"url":38,
"doc":"Default value for the silent parameter. The value is  \"terse\" "
},
{
"ref":"tf.core.timestamp.silentConvert",
"url":38,
"doc":"",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp",
"url":38,
"doc":"Create a controller for timed messages. You can specify the degree of verbosity and also an indentation level. The verbosity affects the display of the  info ,  warning , and  error methods that are defined in this class, but can also affects messages emitted by other parts of the application, such as:  the display of the number of results in searches  the header that is displayed after the incantation of text-fabric. Parameters      silent: string, optional tf.core.timestamp.SILENT_D The verbosity. Here are the values and their effects:  \"verbose\" or  False : Show all  info ,  warning ,  error messages. In incantation headers, show the full metadata of all features.  \"auto\" : Like  \"verbose\" , but in incantation headers, show the feature descriptions only, not the full metadata.  \"terse\" or  None :  (default) Like  \"auto\" , but do not show  log messages.  \"deep\" or  True : Like  \"terse\" but do not show  log and  warning messages. Do not show fetched datasets between the incantation and the header, and do not show the header either. Do not show the number of results after searches."
},
{
"ref":"tf.core.timestamp.Timestamp.raw_msg",
"url":38,
"doc":"",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.reset",
"url":38,
"doc":"",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.cache",
"url":38,
"doc":"",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.debug",
"url":38,
"doc":"Sends a debug message to the standard output. Debug messages are normally silenced, in that case nothing happens. Parameters      msg: string The string to be displayed tm: boolean, optional True Whether the message is to be prepended with the elapsed time. nl: boolean, optional True Whether a newline should be appended to the message. cache: integer, optional 0 Whether the message should be cached. force: boolean, optional False If True, any silent condition is overriden.  ! caution \"Silence\" Informational messages are not displayed in silent mode.",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.info",
"url":38,
"doc":"Sends an informational message to the standard output. Info messages may have been silenced, in that case nothing happens. Parameters      msg: string The string to be displayed tm: boolean, optional True Whether the message is to be prepended with the elapsed time. nl: boolean, optional True Whether a newline should be appended to the message. cache: integer, optional 0 Whether the message should be cached. force: boolean, optional False If True, any silent condition is overriden.  ! caution \"Silence\" Informational messages are not displayed in silent mode.",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.warning",
"url":38,
"doc":"Sends an warning message to the standard output. Warning messages may have been silenced, in that case nothing happens. Parameters      msg: string The string to be displayed tm: boolean, optional True Whether the message is to be prepended with the elapsed time. nl: boolean, optional True Whether a newline should be appended to the message. cache: integer, optional 0 Whether the message should be cached. force: boolean, optional False If True, any silent condition is overriden.  ! caution \"Silence\" Warning messages are not displayed if silent mode is  deep .",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.error",
"url":38,
"doc":"Sends an warning message to the standard error. In a Jupyter notebook, the standard error is displayed with a reddish background colour. Parameters      msg: string The string to be displayed tm: boolean, optional True Whether the message is to be prepended with the elapsed time. nl: boolean, optional True Whether a newline should be appended to the message. cache: integer, optional 0 Whether the message should be cached.  ! caution \"Silence\" Warning messages are displayed irrespective of the silent mode.",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.indent",
"url":38,
"doc":"Changes the indentation and timing of forthcoming messages. Messages can be indented. Multiline messages will have the indent prepended to each of its lines. The reported time is with respect to a starting point, which can be reset. The starting points at different levels are independent of each other. level: integer|boolean, optional None The indentation level. If an integer, it sets the indentation level. If a boolean, it decreases or increases the indentation level, but not below zero.  True increases the indent with one level,  False decreases the indent. reset: boolean, optional False If  True , the elapsed time to will be reset to 0 at the given level.",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.isSilent",
"url":38,
"doc":"The current verbosity. Returns    - string See  VERBOSE ,  AUTO ,  TERSE ,  DEEP .",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.setSilent",
"url":38,
"doc":"Set the verbosity. Parameters      silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp ",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.silentOn",
"url":38,
"doc":"Suppress informational messages. Parameters      deep: boolean, optional False If  True also suppress warnings.",
"func":1
},
{
"ref":"tf.core.timestamp.Timestamp.silentOff",
"url":38,
"doc":"Enable informational messages.",
"func":1
},
{
"ref":"tf.core.edgefeature",
"url":39,
"doc":"Mappings from edges to values. Every edge feature is logically a mapping from pairs of nodes to values, string or integer. A feature object gives you methods that you can pass a node and that returns its value for that node. It is easiest to think of all edge features as a dictionary keyed by nodes. The values are either sets or dictionaries. If the value is a set, then the elements are the second node in the pair and the value is  None . If the value is a dictionary, then the keys are the second node in the pair, and the value is the value that the edge feature assigns to this pair. However, some features have an optimized representation, and do not have a dictionary underneath. But you can still iterate over the data of a feature as if it were a dictionary:  tf.core.edgefeature.EdgeFeature.items "
},
{
"ref":"tf.core.edgefeature.EdgeFeatures",
"url":39,
"doc":""
},
{
"ref":"tf.core.edgefeature.EdgeFeature",
"url":39,
"doc":"Provides access to (edge) feature data. For feature  fff it is the result of  E.fff or  Es('fff') ."
},
{
"ref":"tf.core.edgefeature.EdgeFeature.items",
"url":39,
"doc":"A generator that yields the items of the feature, seen as a mapping. This gives you a rather efficient way to iterate over just the feature data. If you need this repeatedly, or you need the whole dictionary, you can store the result as follows: data = dict(E.fff.items( ",
"func":1
},
{
"ref":"tf.core.edgefeature.EdgeFeature.f",
"url":39,
"doc":"Get outgoing edges  from a node. The edges are those pairs of nodes specified in the feature data, whose first node is the  n . Parameters      node: integer The node  from which the edges in question start. Returns    - set | tuple The nodes reached by the edges  from a certain node. The members of the result are just nodes, if this feature does not assign values to edges. Otherwise the members are tuples of the destination node and the value that the feature assigns to this pair of nodes. If there are no edges from the node, the empty tuple is returned, rather than  None .",
"func":1
},
{
"ref":"tf.core.edgefeature.EdgeFeature.t",
"url":39,
"doc":"Get incoming edges  to a node. The edges are those pairs of nodes specified in the feature data, whose second node is the  n . Parameters      node: integer The node  to which the edges in question connect. Returns    - set | tuple The nodes where the edges  to a certain node start. The members of the result are just nodes, if this feature does not assign values to edges. Otherwise the members are tuples of the start node and the value that the feature assigns to this pair of nodes. If there are no edges to the node, the empty tuple is returned, rather than  None .",
"func":1
},
{
"ref":"tf.core.edgefeature.EdgeFeature.b",
"url":39,
"doc":"Query  both incoming edges to, and outgoing edges from a node. The edges are those pairs of nodes specified in the feature data, whose first or second node is the  n . Parameters      node: integer The node  from which the edges in question start or  to which the edges in question connect. Returns    - set | dict The nodes where the edges  to a certain node start. The members of the result are just nodes, if this feature does not assign values to edges. Otherwise the members are tuples of the start node and the value that the feature assigns to this pair of nodes. If there are no edges to the node, the empty tuple is returned, rather than  None . Notes   -  ! hint \"symmetric closure\" This method gives the  symmetric closure of a set of edges: if there is an edge between  n and  m , this method will deliver its value, no matter the direction of the edge.  ! example \"symmetric edges\" Some edge sets are semantically symmetric, for example  similarity . If  n is similar to  m , then  m is similar to  n . But if you store such an edge feature completely, half of the data is redundant. By virtue of this method you do not have to do that, you only need to store one of the edges between  n and  m (it does not matter which one), and  E.fff.b(n) will nevertheless produce the complete results.  ! caution \"conflicting values\" If your set of edges is not symmetric, and edges carry values, it might very well be the case that edges between the same pair of nodes carry different values for the two directions. In that case, this method gives precedence to the edges that  depart from the node to those that go  to the node.  ! example \"conflicting values\" Suppose we have n  value=4  > m m  value=6  > n then E.b(n) = (m, 4) E.b(m) = (n, 6)",
"func":1
},
{
"ref":"tf.core.edgefeature.EdgeFeature.freqList",
"url":39,
"doc":"Frequency list of the values of this feature. Inspect the values of this feature and see how often they occur. If the feature does not assign values, return the number of node pairs in this edge. If the edge feature does have values, inspect them and see how often they occur. The result is a list of pairs  (value, frequency) , ordered by  frequency , highest frequencies first. Parameters      nodeTypesFrom: set of string, optional None If you pass a set of nodeTypes here, only the values for edges that start  from a node with such a type will be counted. nodeTypesTo: set of string, optional None If you pass a set of nodeTypes here, only the values for edges that go  to a node with such a type will be counted. Returns    - tuple of 2-tuple A tuple of  (value, frequency) , items, ordered by  frequency , highest frequencies first.",
"func":1
},
{
"ref":"tf.core.edgefeature.EdgeFeature.meta",
"url":39,
"doc":"Metadata of the feature. This is the information found in the lines starting with  @ in the  .tf feature file."
},
{
"ref":"tf.core.helpers",
"url":40,
"doc":""
},
{
"ref":"tf.core.helpers.abspath",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.expanduser",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.unexpanduser",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.setDir",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.expandDir",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.getLocation",
"url":40,
"doc":"Get backend, org, repo of directory. Parameters      targetDir: string, optional None If None, we take the current directory. Otherwise, if it starts with a  / we take it as the absolute target directory. Otherwise, we append it to the absolute path of the current directory, with a  / in between. We assume the target directory is inside  ~/backend/org/repo Returns    - tuple backend, org, repo",
"func":1
},
{
"ref":"tf.core.helpers.dirEmpty",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.clearTree",
"url":40,
"doc":"Remove all files from a directory, recursively, but leave subdirs. Reason: we want to inspect output in an editor. But if we remove the directories, the editor looses its current directory all the time. Parameters      path: The directory in question. A leading  ~ will be expanded to the user's home directory.",
"func":1
},
{
"ref":"tf.core.helpers.initTree",
"url":40,
"doc":"Make sure a directory exists, optionally clean it. Parameters      path: The directory in question. A leading  ~ will be expanded to the user's home directory. If the directory does not exist, it will be created. fresh: boolean, optional False If True, existing contents will be removed, more or less gently. gentle: boolean, optional False When existing content is removed, only files are recursively removed, not subdirectories.",
"func":1
},
{
"ref":"tf.core.helpers.fileExists",
"url":40,
"doc":"Whether a path exists as file on the file system.",
"func":1
},
{
"ref":"tf.core.helpers.fileRemove",
"url":40,
"doc":"Removes a file if it exists as file.",
"func":1
},
{
"ref":"tf.core.helpers.fileCopy",
"url":40,
"doc":"Copies a file if it exists as file. Wipes the destination file, if it exists.",
"func":1
},
{
"ref":"tf.core.helpers.dirExists",
"url":40,
"doc":"Whether a path exists as directory on the file system.",
"func":1
},
{
"ref":"tf.core.helpers.dirRemove",
"url":40,
"doc":"Removes a directory if it exists as directory.",
"func":1
},
{
"ref":"tf.core.helpers.dirCopy",
"url":40,
"doc":"Copies a directory if it exists as directory. Wipes the destination directory, if it exists.",
"func":1
},
{
"ref":"tf.core.helpers.dirMake",
"url":40,
"doc":"Creates a directory if it does not already exist as directory.",
"func":1
},
{
"ref":"tf.core.helpers.isInt",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.mathEsc",
"url":40,
"doc":"Escape $ signs to   $  . To prevent them from being interpreted as math in a Jupyter notebook in cases where you need them literally.",
"func":1
},
{
"ref":"tf.core.helpers.mdEsc",
"url":40,
"doc":"Escape certain markdown characters. Parameters      val: string The input value math: boolean, optional False Whether retain TeX notation. If True,  $ is not escaped, if False, it is not escaped.",
"func":1
},
{
"ref":"tf.core.helpers.htmlEsc",
"url":40,
"doc":"Escape certain HTML characters by HTML entities. To prevent them to be interpreted as HTML in cases where you need them literally. Parameters      val: string The input value math: boolean, optional False Whether retain TeX notation. If True,  $ is not escaped, if False, it is not escaped.",
"func":1
},
{
"ref":"tf.core.helpers.xmlEsc",
"url":40,
"doc":"Escape certain HTML characters by XML entities. To prevent them to be interpreted as XML in cases where you need them literally.",
"func":1
},
{
"ref":"tf.core.helpers.mdhtmlEsc",
"url":40,
"doc":"Escape certain Markdown characters by HTML entities or span elements. To prevent them to be interpreted as Markdown in cases where you need them literally. Parameters      val: string The input value math: boolean, optional False Whether retain TeX notation. If True,  $ is not escaped, if False, it is not escaped.",
"func":1
},
{
"ref":"tf.core.helpers.camel",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.check32",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.console",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.cleanName",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.isClean",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.flattenToSet",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.setFromSpec",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.rangesFromSet",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.rangesFromList",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.specFromRanges",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.specFromRangesLogical",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.valueFromTf",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.tfFromValue",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.makeIndex",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.makeInverse",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.makeInverseVal",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.nbytes",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.collectFormats",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.itemize",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.fitemize",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.project",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.wrapMessages",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.makeExamples",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.setFromValue",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.setFromStr",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.mergeDictOfSets",
"url":40,
"doc":"",
"func":1
},
{
"ref":"tf.core.helpers.mergeDict",
"url":40,
"doc":"Merge overrides into a source dictionary recursively. Parameters      source: dict The source dictionary, which will be modified by the overrides. overrides: dict The overrides, itself a dictionary.",
"func":1
},
{
"ref":"tf.core.helpers.getAllRealFeatures",
"url":40,
"doc":"Get all config features and all loaded node and edge features. Except  omap@v-w features. When we take volumes or collections from works, we need to pass these features on. This will exclude the computed features and the node/edge features that are not loaded by default.",
"func":1
},
{
"ref":"tf.core.helpers.formatMeta",
"url":40,
"doc":"Reorder meta data. Parameters      meta: dict Dictionary of meta data: keyed by feature, valued by a dict of metadata in the form of key values Returns    - dict A copy of the dict but with the values for metadata keys  desc and  eg merged under a new key  description , and the keys  desc and  eg deleted.",
"func":1
},
{
"ref":"tf.core.prepare",
"url":41,
"doc":" Precompute data. For Text-Fabric to work efficiently, some derived data needs to be precomputed. The precomputed data has a similar function as indexes in a database. Precomputation is triggered when  tf.fabric.Fabric loads features, and the order and nature of the steps is configured in  tf.core.fabric.PRECOMPUTE . The functions in this module implement those tasks."
},
{
"ref":"tf.core.prepare.levels",
"url":41,
"doc":"Computes level data. For each node type, compute the average number of slots occupied by its nodes, and order the node types on that. Parameters      info: function Method to write informational messages to the console. error: function Method to write error messages to the console. otype: iterable The data of the  otype feature. oslots: iterable The data of the  oslots feature. otext: iterable The data of the  otext feature. Returns    - tuple An ordered tuple, each member with the information of a node type:  node type name  average number of slots contained in the nodes of this type  first node of this type  last node of this type The order of the tuple is descending by average number of slots per node of that type. Notes   -  ! explanation \"Level computation and customization\" All node types have a level, defined by the average amount of slots object of that type usually occupy. The bigger the average object, the lower the levels. Books have the lowest level, words the highest level. However, this can be overruled. Suppose you have a node type  phrase and above it a node type  cluster , i.e. phrases are contained in clusters, but not vice versa. If all phrases are contained in clusters, and some clusters have more than one phrase, the automatic level ranking of node types works out well in this case. But if clusters only have very small phrases, and the big phrases do not occur in clusters, then the algorithm may assign a lower rank to clusters than to phrases. In general, it is too expensive to try to compute the levels in a sophisticated way. In order to remedy cases where the algorithm assigns wrong levels, you can add a  @levels key to the  otext config feature. See  tf.core.text .",
"func":1
},
{
"ref":"tf.core.prepare.order",
"url":41,
"doc":"Computes order data for the canonical ordering. The canonical ordering between nodes is defined in terms of the slots that nodes contain, and if that is not decisive, the rank of the node type is taken into account, and if that is still not decisive, the node itself is taken into account. Parameters      info: function Method to write informational messages to the console. error: function Method to write error messages to the console. otype: iterable The data of the  otype feature. oslots: iterable The data of the  oslots feature. levels: tuple The data of the  levels precompute step. Returns    - tuple All nodes, slot and nonslot, in canonical order. See Also     tf.core.nodes: canonical ordering",
"func":1
},
{
"ref":"tf.core.prepare.rank",
"url":41,
"doc":"Computes rank data. The rank of a node is its place in among the other nodes in the canonical order (see  tf.core.nodes ). Parameters      info: function Method to write informational messages to the console. error: function Method to write error messages to the console. otype: iterable The data of the  otype feature. order: tuple The data of the  order feature. Returns    - tuple The ranks of all nodes, slot and nonslot, with respect to the canonical order.",
"func":1
},
{
"ref":"tf.core.prepare.levUp",
"url":41,
"doc":"Computes level-up data. Level-up data is used by the API function  tf.core.locality.Locality.u . This function computes the embedders of a node by looking them up from the level-up data. Parameters      info: function Method to write informational messages to the console. error: function Method to write error messages to the console. otype: iterable The data of the  otype feature. oslots: iterable The data of the  oslots feature. rank: tuple The data of the  rank precompute step. Returns    - tuple The n-th member is an tuple of the embedder nodes of n. Those tuples are sorted in canonical order ( tf.core.nodes ). Notes   -  ! hint \"Memory efficiency\" Many nodes have the same tuple of embedders. Those embedder tuples will be reused for those nodes. Warnings     It is not advisable to this data directly by  C.levUp.data , it is far better to use the  tf.core.locality.Locality.u function. Only when every bit of performance waste has to be squeezed out, this raw data might be a deal.",
"func":1
},
{
"ref":"tf.core.prepare.levDown",
"url":41,
"doc":"Computes level-down data. Level-down data is used by the API function  tf.core.locality.Locality.d . This function computes the embedded nodes of a node by looking them up from the level-down data. Parameters      info: function Method to write informational messages to the console. error: function Method to write error messages to the console. otype: iterable The data of the  otype feature. levUp: iterable The data of the  levUp precompute step. rank: tuple The data of the  rank precompute step. Returns    - tuple The  n -th member is an tuple of the embedded nodes of  n + maxSlot . Those tuples are sorted in canonical order ( tf.core.nodes ).  ! hint \"Memory efficiency\" Slot nodes do not have embedded nodes, so they do not have to occupy space in this tuple. Hence the first member are the embedded nodes of node  maxSlot + 1 .  ! caution \"Use with care\" It is not advisable to this data directly by  C.levDown.data , it is far better to use the  tf.core.locality.Locality.d function. Only when every bit of performance waste has to be squeezed out, this raw data might be a deal.",
"func":1
},
{
"ref":"tf.core.prepare.characters",
"url":41,
"doc":"Computes character data. For each text format, a frequency list of the characters in that format is made. Parameters      info: function Method to write informational messages to the console. error: function Method to write error messages to the console. otext: iterable The data of the  otext feature. tFormats: Dictionary keyed by text format and valued by the tuple of features used in that format. tFeats: iterable Each tFeat is the name and the data of a text feature. i.e. a feature used in text formats. Returns    - dict Keyed by format valued by a frequency dict, which is itself keyed by single characters and valued by the frequency of that character in the whole corpus when rendered with that format.",
"func":1
},
{
"ref":"tf.core.prepare.boundary",
"url":41,
"doc":"Computes boundary data. For each slot, the nodes that start at that slot and the nodes that end at that slot are collected. Boundary data is used by the API functions  tf.core.locality.Locality.p . and  tf.core.locality.Locality.n . Parameters      info: function Method to write informational messages to the console. error: function Method to write error messages to the console. otype: iterable The data of the  otype feature. oslots: iterable The data of the  oslots feature. rank: tuple The data of the  rank precompute step. Returns    - tuple  first: tuple of tuple The  n -th member is the tuple of nodes that start at slot  n , ordered in  reversed canonical order ( tf.core.nodes );  last: tuple of tuple The  n -th member is the tuple of nodes that end at slot  n , ordered in canonical order; Notes   -  ! hint \"why reversed canonical order?\" Just for symmetry.",
"func":1
},
{
"ref":"tf.core.prepare.sections",
"url":41,
"doc":"Computes section data. Text-Fabric datasets may define up to three section levels, roughly corresponding with a volume, a chapter, a paragraph. If the corpus has a richer section structure, it is also possible a different, more flexible and more extensive nest of structural sections. See  structure . Text-Fabric must be able to go from sections at one level to the sections at one level lower. It must also be able to map section headings to nodes. For this, the section features are needed, since they contain the section headings. Parameters      info: function Method to write informational messages to the console. error: function Method to write error messages to the console. otype: iterable The data of the  otype feature. oslots: iterable The data of the  oslots feature. otext: iterable The data of the  otext feature. levUp: tuple The data of the  levUp precompute step. levels: tuple The data of the  levels precompute step. sFeats: iterable Each sFeat is the data of a section feature. Returns    - tuple  sec1 Mapping from section-level-1 nodes to mappings from section-level-2 headings to section-level2 nodes.  sec2 Mapping from section-level-1 nodes to mappings from section-level-2 headings to mappings from section-level3 headings to section-level-3 nodes. Warnings     Note that the terms  book ,  chapter ,  verse are not baked into Text-Fabric. It is the corpus data, especially the  otext config feature that spells out the names of the sections.",
"func":1
},
{
"ref":"tf.core.prepare.structure",
"url":41,
"doc":"Computes structure data. If the corpus has a rich section structure, it is possible to define a flexible and extensive nest of structural sections. Independent of this, Text-Fabric datasets may also define up to three section levels, roughly corresponding with a volume, a chapter, a paragraph. See  sections . Text-Fabric must be able to go from sections at one level to the sections at one level lower. It must also be able to map section headings to nodes. For this, the section features are needed, since they contain the section headings. Parameters      info: function Method to write informational messages to the console. error: function Method to write error messages to the console. otype: iterable The data of the  otype feature. oslots: iterable The data of the  oslots feature. otext: iterable The data of the  otext feature. rank: tuple The data of the  rank precompute step. levUp: tuple The data of the  levUp precompute step. sFeats: iterable Each sFeat the data of a section feature. Returns    - tuple  headingFromNode (Mapping from nodes to section keys)  nodeFromHeading (Mapping from section keys to nodes)  multiple  top  up  down Notes   - A section key of a structural node is obtained by going a level up from that node, retrieving the heading of that structural node, then going up again, and so on till a top node is reached. The tuple of headings obtained in this way is the section key.",
"func":1
},
{
"ref":"tf.core.data",
"url":42,
"doc":""
},
{
"ref":"tf.core.data.Data",
"url":42,
"doc":""
},
{
"ref":"tf.core.data.Data.load",
"url":42,
"doc":"Load a feature. _withGc: boolean, optional True If False, it disables the Python garbage collector before loading features. Used to experiment with performance.",
"func":1
},
{
"ref":"tf.core.data.Data.unload",
"url":42,
"doc":"",
"func":1
},
{
"ref":"tf.core.data.Data.save",
"url":42,
"doc":"",
"func":1
},
{
"ref":"tf.core.data.Data.cleanDataBin",
"url":42,
"doc":"",
"func":1
},
{
"ref":"tf.fabric",
"url":43,
"doc":" Fabric The main class that works the core API is  tf.fabric.Fabric . It is responsible for feature data loading and saving.  ! note \"Tutorial\" The tutorials for specific annotated corpora (see  tf.about.corpora ) put the Text-Fabric API on show for vastly different corpora.  ! note \"Generic API versus apps\" This is the API of Text-Fabric in general. Text-Fabric has no baked in knowledge of particular corpora. However, Text-Fabric comes with several  apps that make working with specific  tf.about.corpora easier. Such an app may be as simple as a  config.yaml file, even an empty one. The extra functions of those apps are available through the advanced API:  A , see  tf.app . Fabric has built-in volume support: it can load volumes of a work and it can collect volumes into a new work. Fabric is an extension of  tf.core.fabric where volume support is added."
},
{
"ref":"tf.fabric.Fabric",
"url":43,
"doc":"Initialize the core API for a corpus.  ! note \"Implementation\" Fabric is implemented as a subclass of  tf.core.fabric.FabricCore See  tf.core.fabric.FabricCore for most of the functionality. Here we document the volume support only. Parameters      collection: string, optional None If the collection exists, it will be loaded instead of the whole corpus. If the collection does not exist an error will be generated. volume: string, optional None If the volume exists, it will be loaded instead of the whole corpus. If the volume does not exist an error will be generated. When determining whether the volume exists, only the first members of  locations and  modules will be used. There the volumes reside under a directory  _local . You may want to add  _local to your  .gitignore , so that volumes generated in a backend directory will not be pushed.  ! caution \"Volumes and collections\" It is an error to load a volume as a collection and vice-versa You get a warning if you pass both a volume and a collection. The collection takes precedence, and the volume is ignored in that case."
},
{
"ref":"tf.fabric.Fabric.getVolumes",
"url":43,
"doc":"Lists available volumes within the dataset. See  tf.volumes.extract.getVolumes .",
"func":1
},
{
"ref":"tf.fabric.Fabric.extract",
"url":43,
"doc":"Extract volumes from the currently loaded work. This function is only provided if the dataset is a work, i.e. it is loaded as a whole. When a single volume of a work is loaded, there is no  extract method. See  tf.volumes.extract and note that parameters  workLocation ,  volumesLocation ,  api will be supplied automatically.",
"func":1
},
{
"ref":"tf.fabric.Fabric.collect",
"url":43,
"doc":"Creates a work out of a number of volumes. Parameters      volumes: tuple Just the names of the volumes that you want to collect. collection: string The name of the new collection See  tf.volumes.collect for the other parameters and note that parameter  workLocation will be supplied automatically from  collection .",
"func":1
},
{
"ref":"tf.fabric.Fabric.load",
"url":31,
"doc":"Loads features from disk into RAM memory. Parameters      features: string | iterable Either a string containing space separated feature names, or an iterable of feature names. The feature names are just the names of  .tf files without directory information and without extension. add: boolean, optional False The features will be added to the same currently loaded features, managed by the current API. Meant to be able to dynamically load features without reloading lots of features for nothing. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp Returns    - boolean | object If  add is  True a boolean indicating success is returned. Otherwise, the result is a new  tf.core.api.Api if the feature could be loaded, else  False .",
"func":1
},
{
"ref":"tf.fabric.Fabric.explore",
"url":31,
"doc":"Makes categorization of all features in the dataset. Parameters      silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp show: boolean, optional True If  False , the resulting dictionary is delivered in  TF.featureSets ; if  True , the dictionary is returned as function result. Returns    - dict | None A dictionary with keys  nodes ,  edges ,  configs ,  computeds . Under each key there is the set of feature names in that category. How this dictionary is delivered, depends on the parameter  show . Notes   -  ! explanation \"configs\" These are config features, with metadata only, no data. E.g.  otext .  ! explanation \"computeds\" These are blocks of precomputed data, available under the  C API, see  tf.core.computed.Computeds . The sets do not indicate whether a feature is loaded or not. There are other functions that give you the loaded features:  tf.core.api.Api.Fall for nodes and  tf.core.api.Api.Eall for edges.",
"func":1
},
{
"ref":"tf.fabric.Fabric.loadAll",
"url":31,
"doc":"Load all loadable features. Parameters      silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp ",
"func":1
},
{
"ref":"tf.fabric.Fabric.clearCache",
"url":31,
"doc":"Clears the cache of compiled TF data. Text-Fabric precomputes data for you, so that it can be loaded faster. If the original data is updated, Text-Fabric detects it, and will recompute that data. But there are cases, when the algorithms of Text-Fabric have changed, without any changes in the data, where you might want to clear the cache of precomputed results. Calling this function just does it, and it is equivalent with manually removing all  .tfx files inside the hidden  .tf directory inside your dataset.  ! hint \"No need to load\" It is not needed to execute a  TF.load() first. See Also     tf.clean",
"func":1
},
{
"ref":"tf.fabric.Fabric.save",
"url":31,
"doc":"Saves newly generated data to disk as TF features, nodes and/or edges. If you have collected feature data in dictionaries, keyed by the names of the features, and valued by their feature data, then you can save that data to  .tf feature files on disk. It is this easy to export new data as features: collect the data and metadata of the features and feed it in an orderly way to  TF.save() and there you go. Parameters      nodeFeatures: dict of dict The data of a node feature is a dictionary with nodes as keys (integers!) and strings or numbers as (feature) values. This parameter holds all those dictionaries, keyed by feature name. edgeFeatures: dict of dict The data of an edge feature is a dictionary with nodes as keys, and sets or dictionaries as values. These sets should be sets of nodes (integers!), and these dictionaries should have nodes as keys and strings or numbers as values. This parameter holds all those dictionaries, keyed by feature name. metaData: dict of dict The meta data for every feature to be saved is a key-value dictionary. This parameter holds all those dictionaries, keyed by feature name.  ! explanation \"value types\" The type of the feature values ('int' or 'str') should be specified under key  valueType .  ! explanation \"edge values\" If you save an edge feature, and there are values in that edge feature, you have to say so, by specifying  edgeValues=True in the metadata for that feature.  ! explanation \"generic metadata\" This parameter may also contain fields under the empty name. These fields will be added to all features in  nodeFeatures and  edgeFeatures .  ! explanation \"config features\" If you need to write the  config feature  otext , which is a metadata-only feature, just add the metadata under key  otext in this parameter and make sure that  otext is not a key in  nodeFeatures nor in  edgeFeatures . These fields will be written into the separate config feature  otext , with no data associated. location: dict The (meta)data will be written to the very last directory that TF searched when looking for features (this is determined by the  locations and  modules parameters in  tf.fabric.Fabric . If both  locations and  modules are empty, writing will take place in the current directory. But you can override it: If you pass  location=something , TF will save in  something/mod , where  mod is the last meber of the  modules parameter of TF. module: dict This is an additional way of overriding the default location where TF saves new features. See the  location parameter. If you pass  module=something , TF will save in  loc/something , where  loc is the last member of the  locations parameter of TF. If you pass  location=path1 and  module=path2 , TF will save in  path1/path2 . silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp ",
"func":1
},
{
"ref":"tf.fabric.Fabric.exportMQL",
"url":31,
"doc":"Exports the complete TF dataset into single MQL database. Parameters      dirName: string dbName: string Returns    - None The exported data will be written to file  dirName / dbName.mql . If  dirName starts with  ~ , the  ~ will be expanded to your home directory. Likewise,    will be expanded to the parent of the current directory, and  . to the current directory, both only at the start of  dirName . See Also     tf.convert.mql",
"func":1
},
{
"ref":"tf.fabric.Fabric.importMQL",
"url":31,
"doc":"Converts an MQL database dump to a Text-Fabric dataset.  ! hint \"Destination directory\" It is recommended to call this  importMQL on a TF instance called with TF = Fabric(locations=targetDir) Then the resulting features will be written in the targetDir. In fact, the rules are exactly the same as for  save() . Parameters      mqlFile: string Path to the file which contains the MQL code. slotType: string You have to tell which object type in the MQL file acts as the slot type, because TF cannot see that on its own. otext: dict You can pass the information about sections and text formats as the parameter  otext . This info will end up in the  otext.tf feature. Pass it as a dictionary of keys and values, like so: otext = { 'fmt:text-trans-plain': '{glyphs}{trailer}', 'sectionFeatures': 'book,chapter,verse', } meta: dict Likewise, you can add a dictionary keyed by features that will added to the metadata of the corresponding features. You may also add metadata for the empty feature    , this will be added to the metadata of all features. Handy to add provenance data there. Example: meta = {  : dict( dataset='DLC', datasetName='Digital Language Corpus', author=\"That 's me\", ), \"sp\": dict( description: \"part-of-speech\", ), }  ! note \"description\" Text-Fabric will display all metadata information under the key  description in a more prominent place than the other metadata.  ! caution \"valueType\" Do not pass the value types of the features here.",
"func":1
},
{
"ref":"tf.fabric.Fabric.banner",
"url":31,
"doc":"The banner the Text-Fabric. Will be shown just after start up, if the silence is not  deep ."
},
{
"ref":"tf.fabric.Fabric.version",
"url":31,
"doc":"The version number of the Text-Fabric library."
},
{
"ref":"tf.fabric.Fabric.features",
"url":31,
"doc":"Dictionary of all features that TF has found, whether loaded or not. Under each feature name is all info about that feature. The best use of this is to get the metadata of features: TF.features['fff'].metaData This works for all features  fff that have been found, whether the feature is loaded or not. If a feature is loaded, you can also use  F.fff.meta of  E.fff.meta depending on whether  fff is a node feature or an edge feature.  ! caution \"Do not print!\" If a feature is loaded, its data is also in the feature info. This can be an enormous amount of information, and you can easily overwhelm your notebook if you print it."
},
{
"ref":"tf.lib",
"url":44,
"doc":" Uitility functions Read and write TF node sets from/to file."
},
{
"ref":"tf.lib.writeSets",
"url":44,
"doc":"Writes a dictionary of named sets to file. The dictionary will be written as a gzipped, pickled data structure. Intended use: if you have constructed custom node sets that you want to use in search templates that run in the TF browser. Parameters      sets: dict of sets The keys are names for the values, which are sets of nodes. dest: string A file path. You may use  ~ to refer to your home directory. The result will be written from this file. Returns    - boolean  True if all went well,  False otherwise.",
"func":1
},
{
"ref":"tf.lib.readSets",
"url":44,
"doc":"Reads a dictionary of named sets from file. This is used by the TF browser, when the user has passed a   sets=fileName argument to it. Parameters      source: string A file path. You may use  ~ to refer to your home directory. This file must contain a gzipped, pickled data structure. Returns    - data | boolean The data structure contained in the file if all went well, False otherwise.",
"func":1
},
{
"ref":"tf.dataset",
"url":45,
"doc":" Dataset operations This package contains functions to operate on TF datasets as a whole There are the following basic operations:  Modify, see  tf.dataset.modify , (add/merge/delete types and features to/from a single data source)  Node maps, see  tf.dataset.nodemaps , (make node mappings between versions of TF data) See also the [dataset chapter](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/tutorial/compose.ipynb) in the Banks tutorial."
},
{
"ref":"tf.dataset.nodemaps",
"url":46,
"doc":" Nodemaps When different versions of a TF dataset exist, it makes sense to map the nodes from the older version to nodes of the newer version. If we have annotations on the older version (possibly created with considerable man-machine labor), we can use such node mappings to transfer the annotations to the newer version without redoing all the work. Mapping the nodes consists of two stages: 1.  slot mapping This is very dependent on what happened between versions. 2.  node mappings per node type These can be generically constructed once we have a slot mapping. This module contains the function  makeVersionMapping which is a function to furnish node mappings for node types given a slot mapping exists.  Nodes in general The basic idea we use for the general case is that that nodes are linked to slots. In text-fabric, the standard  oslots edge feature lists for each non-slot node the slots it is linked to. Combining the just created slot mappings between versions and the  oslots feature, we can extend the slot mapping into a general node mapping. In order to map a node \\(n\\) in version \\(V\\), we look at its slots \\(s\\), use the already established  slot mapping to map these to slots \\(t\\) in version \\(W\\), and collect the nodes \\(m\\) in version \\(W\\) that are linked to those \\(t\\). They are good candidates for the mapping. ![5]( /images/diffs.005.png)  Refinements When we try to match nodes across versions, based on slot containment, we also respect their  otype s. So we will not try to match a  clause to a  phrase . We make implicit use of the fact that for most  otype s, the members contain disjoint slots.  Multiple candidates Of course, things are not always as neat as in the diagram. Textual objects may have split, or shifted, or collapsed. In general we find 0 or more candidates. Even if we find exactly one candidate, it does not have to be a perfect match. A typical situation is this: ![6]( /images/diffs.006.png) We do not find a node \\(m\\in W\\) that occupies the mapped slots exactly. Instead, we find that the target area is split between two candidates who also reach outside the target area. In such cases, we make edges to all such candidates, but we add a dissimilarity measure. If \\(m\\) is the collection of slots, mapped from \\(n\\), and \\(m_1\\) is a candidate for \\(n\\), meaning \\(m_1\\) has overlap with \\(m\\), then the  dissimilarity of \\(m_1\\) is defined as:  |m_1\\cup m| - |m_1\\cap m| In words: the number of slots in the union of \\(m_1\\) and \\(m\\) minus the number of slots in their intersection. In other words: \\(m_1\\) gets a penalty for  each slot \\(s\\in m_1\\) that is not in the mapped slots \\(m\\);  each mapped slot \\(t\\in m\\) that is not in \\(m_1\\). If a candidate occupies exactly the mapped slots, the dissimilarity is 0. If there is only one such candidate of the right type, the case is completely clear, and we do not add a dissimilarity value to the edge. If there are more candidates, all of them will get an edge, and those edges will contain the dissimilarity value, even if that value is \\(0\\).  Diagnostic labels We report the success in establishing the match between non-slot nodes. We do so per node type, and for each node type we list a few statistics, both in absolute numbers and in percentage of the total amount of nodes of that type in the source version. We count the nodes that fall in each of the following cases. The list of cases is ordered by decreasing success of the mapping.   b  unique, perfect : there is only one match for the mapping and it is a perfect one in terms of slots linked to it;   d  multiple, one perfect : there are multiple matches, but at least one is perfect; this occurs typically if nodes of a type are linked to nested and overlapping sequences of slots;   c  unique, imperfect : there is only one match, but it is not perfect; this indicates that some boundary reorganization has happened between the two versions, and that some slots of the source node have been cut off in the target node; yet the fact that the source node and the target node correspond is clear;   f  multiple, cleanly composed : in this case the source node corresponds to a bunch of matches, which together cleanly cover the mapped slots of the source node; in other words: the original node has been split in several parts;   e  multiple, non-perfect : all remaining cases where there are matches; these situations can be the result of more intrusive changes; if it turns out to be a small set they do require closer inspection;   a  not mapped : these are nodes for which no match could be found. An involved example of creating node mappings between versions (not using this code) is [versionMappings.ipynb](https: nbviewer.jupyter.org/github/ETCBC/bhsa/blob/master/programs/versionMappings.ipynb). A simpler example, using this code is [map.ipynb](https: nbviewer.jupyter.org/github/clariah/wp6-missieven/blob/master/programs/map.ipynb).  Usage   from tf.dataset import Versions V = Versions(api, va, vb, slotMap) V.makeVersionMapping()  "
},
{
"ref":"tf.dataset.nodemaps.Versions",
"url":46,
"doc":"Map the nodes of a nodetype between two versions of a TF dataset. There are two scenarios in which you can use this object:  Extend a slot map to a node mapping . If this object is initialized with a  slotMap , it can extend that mapping to a complete node mapping and save the mapping as an  f\"omap@{va}-{vb}\" edge feature in the dataset version  vb . In this use case, the apis for both  va and  vb should be full TF APIs, in particular, they should provide the  tf.core.locality API.  Use an existing node map to upgrade features from one version to another . In this use case, you do not have to pass a  slotMap , but in the  vb dataset there should be an  omap@a-b feature, i.e. a node map from the nodes of  va to those of  vb . The apis for both  va and  vb may be partial TF APIs, which means that they only have to provide the  tf.core.nodefeature.NodeFeatures ( F ) and  tf.core.edgefeature.EdgeFeatures ( E ) apis. Parameters      api: dict TF-API objects to several versions of a dataset, keyed by version label va: string version label of the version whose nodes are the source of the mapping vb: string version label of the version whose nodes are the target of the mapping slotMap: dict, optional None The actual mapping between slots of the old version and the new version silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp "
},
{
"ref":"tf.dataset.nodemaps.Versions.makeNodeMapping",
"url":46,
"doc":"",
"func":1
},
{
"ref":"tf.dataset.nodemaps.Versions.exploreNodeMapping",
"url":46,
"doc":"",
"func":1
},
{
"ref":"tf.dataset.nodemaps.Versions.getDiagnosis",
"url":46,
"doc":"Show the diagnosis of a mapping. You can get various amounts of information about this:  A dictionary that maps all nodes of a given type to a diagnostic label  A list of nodes of a node type that have a given diagnostic label  The label of a given node Parameters      node: string | int, optional None The node or node type that you want to diagnose. If a string, it is a node type, and you get information about the nodes of that node type. If an int, it is a node, and you get information about that node. If  None , you get information about all nodes. label: char, optional None If given, it is a diagnostic label (see  tf.dataset.nodemaps ), and the result is dependent on the value passed to  node : if that is a single node, a boolean is returned telling whether that node has the given label; if that is a node type, a tuple is returned of all nodes in that node type that have this label; if that is None, a tuple is returned of all nodes with that label. If not given, the result depends again on the value passed to  node : if that is a single node, you get its diagnostic label; if that is a node type, you get a dict, keyed by node, and valued by diagnostic label, for all nodes in the node type; if that is None, you get a dictionary keyed by node, and valued by diagnostic label but now for all nodes.",
"func":1
},
{
"ref":"tf.dataset.nodemaps.Versions.legend",
"url":46,
"doc":"Show the labels and descriptions of the diagnosis classes. When the mapping turns out to be not perfect for a node, the result can be categorized according to severity. This function shows that classification. See also  tf.dataset.nodemaps .",
"func":1
},
{
"ref":"tf.dataset.nodemaps.Versions.omapName",
"url":46,
"doc":"",
"func":1
},
{
"ref":"tf.dataset.nodemaps.Versions.writeMap",
"url":46,
"doc":"",
"func":1
},
{
"ref":"tf.dataset.nodemaps.Versions.makeVersionMapping",
"url":46,
"doc":"",
"func":1
},
{
"ref":"tf.dataset.nodemaps.Versions.migrateFeatures",
"url":46,
"doc":"Migrate features from one version to another based on a node map. If you have a dataset with several features, and if there is a node map between the versions, you can migrate features from the older version to the newer. The naive approach per feature is: For each node in the old version that has a value for the feature, map the node to the new version. That could be several nodes. Then give all those nodes the value found on the node in the old set. The problem with that is this: Suppose node  n in the old version maps to nodes  p and  q in the new version, but not with the same quality. Suppose the value is  v . Then the feature assignment will assign  v to nodes  p and  q . But there could very wel be a later node  m with value  w in the old version that also maps to  p , and with a lower quality. Then later the node  p in the new version will be assigned the value  w because of this, and this is sub otpimal. So we make sure that for each feature and each node in the new version the value assigned to it is the value of the node in the old version that maps with the highest quality to the new node. Parameters      featureNames: tuple The names of the features to migrate. They may be node features or edge features or both. location: string, optional None If absent, the migrated features will be saved in the newer dataset. Otherwise it is a path where the new features should be saved. silent: string, optional None See  tf.core.timestamp.Timestamp This will override the  silent setting that has been used when creating the  Versions object.",
"func":1
},
{
"ref":"tf.dataset.nodemaps.Versions.caption",
"url":46,
"doc":"",
"func":1
},
{
"ref":"tf.dataset.modify",
"url":47,
"doc":" Modify  Usage   from tf.dataset import modify modify( location, targetLocation, mergeFeatures=None, deleteFeatures=None, addFeatures=None, mergeTypes=None, deleteTypes=None, addTypes=None, featureMeta=None, silent=\"auto\", )  "
},
{
"ref":"tf.dataset.modify.modify",
"url":47,
"doc":"Modifies the supply of node types and features in a single data set. Dependent on the presence of the parameters, the following steps will be executed before the result is written out as a new TF dataset:  merge existing features into an other feature, removing the features that went in;  delete any number of existing features;  add any number of features and their data;  merge existing node types into a new one, removing the types that went in, without loss of nodes; So far, no new nodes have been added or removed. But then:  delete any number of node types with their nodes;  add any number of new node types, with nodes and features. The last two actions lead to a shifting of nodes, and all features that map them, will be shifted accordingly. You can also pass meta data to be merged in. Finally, the resulting features will be written to disk.  ! hint \"Only added/merged features\" It is possible to output only the added and merged features instead of a complete dataset. Just pass the boolean value  True to  deleteFeatures below. Parameters      location: string You can pass just the location of the original dataset in the file system, i.e. the directory that contains the .tf files. targetLocation: string The directory into which the result dataset will be written. mergeFeatures: dict, optional None You can merge several features into one. This is especially useful if there are many features each operating on different node types, and you want to unify them into one feature. The situation may occur that several of the features to be merged supply conflicting values for a node. Then the last feature in the merge list wins. The result feature may exist already. Also then there is a risk of conflict. Again, the merge result wins. Example    - mergeFeatures=dict( resultFeature1=[feat1, feat2], resultFeature2=\"feat3, feat4\", ), If the resulting feature is new, or needs a new description, you can provide metadata in the  featureMeta argument. For new features you may want to set the  valueType , although we try hard to deduce it from the data available. deleteFeatures: boolean | string | iterable, optional None This should be either a boolean value  True or an iterable or space/comma separated string of features that you want to delete from the result.  True means: all features will be deleted that are not the result of merging or adding features (see  mergeFeatures above and  addFeatures below. addFeatures: dict, optional None You can add as many features as you want, assigning values to all types, including new nodes of new types that have been generated in the steps before. You can also use this parameter to override existing features: if a feature that you are adding already exists, the new data will be merged in, overriding assignments of the existing feature if there is a conflict. The meta data of the old and new feature will also be merged. This parameter must have this shape: Example    - addFeatures=dict( nodeFeatures=dict( feat1=data1, feat2=data2, ), edgeFeatures=dict( feat3=data3, feat4=data4, ), If the resulting features are new, or need a new description, you can provide metadata in the  featureMeta argument. For new features you may want to set the  valueType , although we try hard to deduce it from the data available. mergeTypes: dict, optional None You can merge several node types into one. The merged node type will have the union of nodes of the types that are merged. All relevant features will stay the same, except the  otype feature of course. You can pass additional information to be added as features to nodes of the new node type. These features can be used to discriminate between the merged types. This parameter must have this shape: Example    - mergeTypes=dict( outTypeA=( 'inType1', 'inType2', ), outTypeB=\"inType3, inType4\", ) Example    - mergeTypes=dict( outTypeA=dict( inType1=dict( featureI=valueI, featureK=valueK, ), inType2=dict( featureL=valueL, featureM=valueM, ), ), outTypeB=dict( inType3=dict( featureN=valueN, featureO=valueO, ), inType4=dict( featureP=valueP, featureQ=valueQ, ), ), ) It does not matter if these types and features already occur. The outTypes may be existing types of really new types. The new features may be existing or new features. Do not forget to provide meta data for new features in the  featureMeta argument. This will migrate nodes of type  inType1 or  inType2 to nodes of  outTypeA . In the extended form, when there are feature specifications associated with the old types, after merging the following assignments will be made:  featureI = valueI to nodes coming from  inType1 and  featureK = valueK to nodes coming from  inType2 . No nodes will be removed!  ! caution \"slot types\" Merging is all about non-slot types. It is an error if a new type or an old type is a slot type. deleteTypes: string | iterable, optional None You can delete node types from the result altogether. You can specify a list of node types as an iterable or as a space separated string. If a node type has to be deleted, all nodes in that type will be removed, and features that assign values to these nodes will have those assignments removed. Example    - deleteTypes=('line', 'sentence') Example    - deleteTypes=\"line sentence\"  ! caution \"slot types\" Deleting is all about non-slot types. It is an error to attempt to delete slot type. addTypes: dict, optional None You may add as many node types as you want. Per node type that you add, you need to specify the current boundaries of that type and how all those nodes map to slots. You can also add features that assign values to those nodes: Example    - dict( nodeType1=dict( nodeFrom=from1, nodeTo=to1, nodeSlots=slots1, nodeFeatures=nFeatures1, edgeFeatures=eFeatures1, ), nodeType2=dict( nodeFrom=from2, nodeTo=to2, nodeSlots=slots2, nodeFeatures=nFeatures2, edgeFeatures=eFeatures2, ), ), The boundaries may be completely arbitrary, so if you get your nodes from another TF data source, you do not need to align their values. If you also add features about those nodes, the only thing that matters is that the features assign the right values to the nodes within the boundaries. Assignments to nodes outside the boundaries will be ignored. The slots that you link the new nodes to, must exist in the original. You cannot use this function to add slots to your data set.  ! caution \"existing node types\" It is an error if a new node type already exists in the original.  ! info \"nodeFeatures, edgeFeatures\" You can add any number of features. Per feature you have to provide the mapping that defines the feature. These features may be new, or they may already be present in the original data. If these features have values to nodes that are not within the boundaries of the new node type, those values will not be assigned but silently discarded. Example    - dict( feat1=dict( n1=val1, n2=val2, ), feat2=dict( n1=val1, n2=val2, ), ), Edge features without values are specified like this: Example    - dict( feat1=dict( n1={m1, m2}, n2={m3, m4}, ), feat2=dict( n1={m5, m6}, n2={m7, m8}, ), ), Edge features with values are specified like this: Example    - dict( feat1=dict( n1={m1: v1, m2: v2}, n2={m3: v3, m4: v4}, ), feat2=dict( n1={m5: v5, m6: v6}, n2={m7: v7, m8: v8}, ), ), featureMeta: dict, optional None If the features you have specified in one of the paramers above are new, do not forget to pass metadata for them in this parameter It is especially important to state the value type: Example    - featureMeta=dict( featureI=dict( valueType='int', description='level of node' ), featureK=dict( valueType='str', description='subtype of node' ), ), You can also tweak the section/structure configuration and the text-formats that are specified in the  otext feature. Just specify them as keys and values to the  otext feature. The logic of tweaking meta data is this: what you provide in this parameter will be merged into existing meta data. If you want to remove a key from a feature, give it the value None. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp ",
"func":1
},
{
"ref":"tf.server",
"url":48,
"doc":" Local TF-data and web server"
},
{
"ref":"tf.server.web",
"url":49,
"doc":" Web interface  About TF contains a web interface in which you can enter a search template and view the results. This is realized by a web app based on [Flask](http: flask.pocoo.org/docs/1.0/). This web app connects to the  tf.server.kernel and merges the retrieved data into a set of [templates](https: github.com/annotation/text-fabric/tree/master/tf/server/views).  Start up TF kernel, web server and browser page are started up by means of a script called  text-fabric , which will be installed in an executable directory by the  pip installer.  Routes There are 4 kinds of routes in the web app: url pattern | effect  - |  -  /server/static/ . | serves a static file from the server-wide [static folder](https: github.com/annotation/text-fabric/tree/master/tf/server/static)  /data/static/ . | serves a static file from the app specific static folder  /local/static/ . | serves a static file from a local directory specified by the app anything else | submits the form with user data and return the processed request  Templates There are two templates in [views](https: github.com/annotation/text-fabric/tree/master/tf/server/views) :   index : the normal template for returning responses to user requests;   export : the template used for exporting results; it has printer/PDF-friendly formatting: good page breaks. Pretty displays always occur on a page by their own. It has very few user interaction controls. When saved as PDF from the browser, it is a neat record of work done, with DOI links to the corpus and to Text-Fabric.  CSS We format the web pages with CSS, with extensive use of [flexbox](https: css-tricks.com/snippets/css/a-guide-to-flexbox). There are several sources of CSS formatting:  the CSS loaded from the app dependent extraApi, used for pretty displays;  [index.css](https: github.com/annotation/text-fabric/blob/master/tf/server/static/index.css): the formatting of the  index web page with which the user interacts;  [export.css](https: github.com/annotation/text-fabric/blob/master/tf/server/views/export.css) the formatting of the export page;  [base.css](https: github.com/annotation/text-fabric/blob/master/tf/server/views/base.css) shared formatting between the index and export pages.  Javascript We use a [modest amount of Javascript](https: github.com/annotation/text-fabric/blob/master/tf/server/static/tf.js) on top of [JQuery](https: api.jquery.com). For collapsing and expanding elements we use the [details](https: developer.mozilla.org/en-US/docs/Web/HTML/Element/details) element. This is a convenient, Javascript-free way to manage collapsing. Unfortunately it is not supported by the Microsoft browsers, not even Edge.  ! caution \"On Windows?\" Windows users should install Chrome of Firefox."
},
{
"ref":"tf.server.web.Web",
"url":49,
"doc":""
},
{
"ref":"tf.server.web.factory",
"url":49,
"doc":"",
"func":1
},
{
"ref":"tf.server.web.main",
"url":49,
"doc":"",
"func":1
},
{
"ref":"tf.server.command",
"url":50,
"doc":""
},
{
"ref":"tf.server.command.portIsInUse",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.getPort",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.repSlug",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.argApp",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.argKill",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.argShow",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.argNoweb",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.argCollect",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.argKernel",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.argWeb",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.command.argParam",
"url":50,
"doc":"",
"func":1
},
{
"ref":"tf.server.monitor",
"url":51,
"doc":" Send commands to a running kernel This may be used to monitor a kernel."
},
{
"ref":"tf.server.monitor.main",
"url":51,
"doc":"",
"func":1
},
{
"ref":"tf.server.kernel",
"url":52,
"doc":" Text-Fabric kernel Text-Fabric can be used as a service. The full API of Text-Fabric needs a lot of memory, which makes it unusably for rapid successions of loading and unloading, like when used in a web server context. However, you can start TF as a service process, after which many clients can connect to it, all looking at the same (read-only) data. We call this a  TF kernel . The API that the TF kernel offers is limited, it is primarily template search that is offered. see  Kernel API below.  Start You can run the TF kernel as follows:   python -m tf.server.kernel ddd   where  ddd points to a corpus, see  tf.app.use .  ! example See the [start-up script](https: github.com/annotation/text-fabric/blob/master/tf/server/start.py) of the text-fabric browser.  Connect The TF kernel can be connected by an other Python program as follows:   from tf.server.kernel import makeTfConnection TF = makeTfConnection(lhost, port) api = TF.connect()   After this,  api can be used to obtain information from the TF kernel. See the web server of the text-fabric browser,  tf.server.web .  Kernel API The API of the TF kernel is created by the function  makeTfKernel . It returns a class  TfKernel with a number of exposed methods that can be called by other programs. For the machinery of interprocess communication we rely on the [rpyc](https: github.com/tomerfiliba/rpyc) module. See especially the docs on [services](https: rpyc.readthedocs.io/en/latest/docs/services.html services).  ! explanation \"Shadow objects\" The way rpyc works in the case of data transmission has a pitfall. When a service returns a Python object to the client, it does not return the object itself, but only a shadow object so called  netref objects. This strategy is called [boxing](https: rpyc.readthedocs.io/en/latest/docs/theory.html boxing). To the client the shadow object looks like the real thing, but when the client needs to access members, they will be fetched on the fly. This is a performance problem when the service sends a big list or dict, and the client iterates over all its items. Each item will be fetched in a separate interprocess call, which causes an enormous overhead. Boxing only happens for mutable objects. And here lies the work-around: The service must send big chunks of data as immutable objects, such as tuples. They are sent within a single interprocess call, and fly swiftly through the connecting pipe."
},
{
"ref":"tf.server.kernel.makeTfKernel",
"url":52,
"doc":"",
"func":1
},
{
"ref":"tf.server.kernel.makeTfConnection",
"url":52,
"doc":"",
"func":1
},
{
"ref":"tf.server.kernel.main",
"url":52,
"doc":"",
"func":1
},
{
"ref":"tf.server.servelib",
"url":53,
"doc":" Common Server Related Functions  About Here are functions that are being used by various parts of the TF browser infrastructure, such as   tf.server.kernel   tf.server.web   tf.server.start "
},
{
"ref":"tf.server.servelib.getInt",
"url":53,
"doc":"",
"func":1
},
{
"ref":"tf.server.servelib.getFormData",
"url":53,
"doc":"Get form data. The TF browser user interacts with the web app by clicking and typing, as a result of which a HTML form gets filled in. This form as regularly submitted to the web server with a request for a new incarnation of the page: a response. The values that come with a request, must be peeled out of the form, and stored as logical values. Most of the data has a known function to the web server, but there is also a list of webapp dependent options.",
"func":1
},
{
"ref":"tf.server.servelib.getAbout",
"url":53,
"doc":"",
"func":1
},
{
"ref":"tf.server.servelib.zipTables",
"url":53,
"doc":"",
"func":1
},
{
"ref":"tf.server.serve",
"url":54,
"doc":" Dress TF nodes up for serving on the web When the TF kernel has retrieved data, it comes in the form of nodes. But the kernel is the one that is able to dress those nodes up with meaningful data. That dressing up is happening in this module, it has the higher level functions for composing tables and passages."
},
{
"ref":"tf.server.serve.serveTable",
"url":54,
"doc":"",
"func":1
},
{
"ref":"tf.server.serve.serveQuery",
"url":54,
"doc":"",
"func":1
},
{
"ref":"tf.server.serve.servePassage",
"url":54,
"doc":"",
"func":1
},
{
"ref":"tf.server.serve.serveExport",
"url":54,
"doc":"",
"func":1
},
{
"ref":"tf.server.serve.serveDownload",
"url":54,
"doc":"",
"func":1
},
{
"ref":"tf.server.serve.serveAll",
"url":54,
"doc":"",
"func":1
},
{
"ref":"tf.server.start",
"url":55,
"doc":" Start kernel and webserver What the  text-fabric script does is the same as:   python -m tf.server.start   During start up the following happens: Kill previous processes : The system is searched for non-terminated incarnations of the processes it wants to start up. If they are encountered, they will be killed, so that they cannot prevent a successful start up. Start TF kernel : A  tf.server.kernel is started. This process loads the bulk of the TF data, so it can take a while. When it has loaded the data, it sends out a message that loading is done, which is picked up by the script. Start TF web server : A short while after receiving the \"data loading done\" message, the TF web server is started.  ! hint \"Debug mode\" If you have passed  -d to the  text-fabric script, the  Flask web server will be started in debug and reload mode. That means that if you modify  web.py or a module it imports, the web server will reload itself automatically. When you refresh the browser you see the changes. If you have changed templates, the css, or the javascript, you should do a \"refresh from origin\". Load web page : After a short while, the default web browser will be started with a url and port at which the web server will listen. You see your browser being started up and the TF page being loaded. Wait : The script now waits till the web server is finished. You finish it by pressing Ctrl-C, and if you have used the  -d flag, you have to press it twice. Terminate the TF kernel\" : At this point, the  text-fabric script will terminate the TF kernel. Clean up : Now all processes that have started up have been killed. If something went wrong in this sequence, chances are that a process keeps running. It will be terminated next time you call the  text-fabric .  ! hint \"You can kill too\" If you run   text-fabric -k   all tf-browser-related processes will be killed.   text-fabric -k ddd   will kill all such processes as far as they are for data source  ddd .  Additional arguments You can direct the loading of corpus data by means of additional arguments, analogously to the  use() command, documented in  tf.about.usefunc . The main argument specifies the data source in the same way as the first argument of the  use() function:   org/repo   org/repo:specifier   app:path/to/app   data:path/to/data The following arguments of the  use() function can be used on the command line, prepended with    :    checkout    mod    set    locations    modules    version  Implementation notes Different corpora will use different ports for the kernel and webserver communication. The ports are computed from the arguments with which text-fabric is called. That is done by the [crc32](https: docs.python.org/3.7/library/zlib.html zlib.crc32) function. There is no guarantee that collisions occur, and that the ports computed this way are free. So we will look for the first available port after this. On the whole, the following things are fairly well taken care of:  Invocations of text-fabric with different arguments lead to different ports  Repeated invocations of text-fabric with the same arguments lead to the same ports. In particular, the following invocations lead to different ports:   text-fabric annotation/banks   and   text-fabric annotation/banks:clone   and likewise for all other arguments."
},
{
"ref":"tf.server.start.filterProcess",
"url":55,
"doc":"",
"func":1
},
{
"ref":"tf.server.start.indexProcesses",
"url":55,
"doc":"",
"func":1
},
{
"ref":"tf.server.start.showProcesses",
"url":55,
"doc":"",
"func":1
},
{
"ref":"tf.server.start.connectPort",
"url":55,
"doc":"",
"func":1
},
{
"ref":"tf.server.start.main",
"url":55,
"doc":"",
"func":1
},
{
"ref":"tf.server.wrap",
"url":56,
"doc":" Wrap material into HTML Lower level functions for wrapping TF data into actual HTML that can be served."
},
{
"ref":"tf.server.wrap.pageLinks",
"url":56,
"doc":"Provide navigation links for results sets, big or small. It creates links around  position in a set of  nResults . The spread indicates how many links before and after  position are generated in each column. There will be multiple columns. The right most column contains links to results  position - spread to  position + spread . Left of that there is a column for results  position - spread spread to  position + spread spread , stepping by  spread . And so on, until the stepping factor becomes bigger than the result set.",
"func":1
},
{
"ref":"tf.server.wrap.passageLinks",
"url":56,
"doc":"Provide navigation links for passages, in the form of links to sections of level 0, 1 and 2 (books, chapters and verses). If  sec0 is not given, only a list of sec0 links is produced. If  sec0 is given, but  sec1 not, a list of links for sec1s within the given  sec0 is produced. If both  sec0 and  sec1 are given, de sec1 entry is focused.",
"func":1
},
{
"ref":"tf.server.wrap.wrapOptions",
"url":56,
"doc":"Wraps the boolean options, including the app-specific ones, into HTML.",
"func":1
},
{
"ref":"tf.server.wrap.wrapSelect",
"url":56,
"doc":"Provides a buttoned chooser for the node types. Some options need node types as values:  baseTypes ,  condenseType ,  hiddenType . See  tf.advanced.options . The chooser supports single value and multiple value mode. Parameters      option: string The name of the option allowedValues: dict Keyed by option, the values are tuples of allowed values for that option in the right order. value: string | set of string The current value of the option. In the case of multiple values, this os a set of values. group: string An extra class name helping to group the relevant buttons together item: string An extra pair of class names for formatting each option line multiple: boolean If  True , the options appear as check boxes, and multiple values can be selected. Otherwise, the options appear as radio boxes, of which at most one can be selected. Returns    - html A HTML fragment containing the options with the current value(s) selected.",
"func":1
},
{
"ref":"tf.server.wrap.wrapProvenance",
"url":56,
"doc":"",
"func":1
},
{
"ref":"tf.about",
"url":57,
"doc":" Documents Higher level documentation."
},
{
"ref":"tf.about.releasesold",
"url":58,
"doc":"Newer releases:  tf.about.releases  Older releases  10  10.2  10.2.7 2022-10-12 Small fixes. Packaging is now done with setup.cfg instead of setup.py.  10.2.6 2022-09-23 The function  tf.core.nodes.Nodes.walk() also accepts a parameter  nodes , so that you can not only walk through the total nodes set, but also through arbitrary nodesets. Always in canonical order. There is a new function  tf.core.helpers.xmlEsc() .  10.2.5 2022-09-13  fix of a bug in the TF-browser caused by the previous change: the headings of section-3 levels came out wrong  the second parameter of  plainTuple() and  prettyTuple() is now optional. It passes the sequence number of the tuple to display. This is useful if the tuple is a member of a bigger list, but not if the tuple stands on its own.  10.2.2-4 2022-09-08 Changes in the output of Text-Fabric to the console. It is detected whether it runs in interactive mode (e.g. Jupyter notebook) or not. If not, the display methods of the Jupyter notebook are suppressed, and many outputs are done in plain text instead of HTML. Fixes in volume support. Small fixes in version mappings.  10.2.1 2022-08-23 Changes in the messages that TF emits. Several functions have an optional  silent parameter by which you could control the verbosity of TF. That parameter now accepts different values, although the old values still work with nearly the same effect. The default value for silent results in slightly terser behaviour than the previous default setting. See  tf.core.timestamp.Timestamp .  10.2.0 2022-08-18 The  tf.app.use function has an extra optional parameter  loadData=True by which you can prevent data loading. That is useful if you want to inspect properties of a dataset without the costly loading of much data. There is a new function to get existing volumes in a dataset:  tf.volumes.extract.getVolumes() . It is also available as methods on the  tf.advanced.app.App and  tf.fabric.Fabric objects so you can also say  TF.getVolumes() and  A.getVolumes() . Improvements in the function  tf.volumes.extract.extract() :  its third argument ( volumes ) is replaced from a positional argument into a keyword argument with default value  True .  Fixed a bug in reporting results Improvement in the function  tf.volumes.collect.collect() :  Fixed a crash that occurred while executing this function under certain conditions  10.1  10.1.0 2022-07-13 Addition of a module  tf.convert.variants that can be used in a  tf.convert.walker conversion. It can be used to process TEI app-lem-rdg elements (critical apparatus). What it does for you is to create sentence-like nodes from sentence-boundary information. It deals with the cases where variants have different sentence boundaries. Some minor fixes in defaults and documentation.  10.0  10.0.4 2022-07-04 Addition to the  tf.convert.walker api:  cv.link() to manually link a node to existing slots instead of relying on the automatic linking.  10.0.3 2022-06-22 Bug fix in the Text-Fabric browser. Spotted by Jorik Groen. The Text-Fabric browser was not able to download data correctly, because it communicated the name of the backend incorrectly to the TF-kernel.  10.0.2 2022-06-20 It is now also possible to have datasets and modules of datasets coming from different backends. Refactoring:  ditched the word  host . Used  backend instead.  the  ~/text-fabric-data cache dir now first has a layer of subdirectories according to the backend that the data comes from:  github ,  gitlab and whatever server is serving a GitLab instance.  subfolder download for GitLab is supported if the gitlab backend supports it. If not, we fall back on downloading the whole repo and then discarding what we do not need. Gitlabs with versions at least 14.4.0 support downloading of subfolders.  10.0.1 2022-06-17 Small fix. GitLab.com supports downloading of subfolders, and I am prepared to make use of that but the current python-gitlab module does not support that part of the API. So I work around it.  10.0.0 2022-06-17  Additions  Backend support : see  tf.advanced.repo.checkoutRepo() and  tf.advanced.app.App . A backend is an online repository where TF apps/data can be stored. Up till now, Text-Fabric worked with a single backend:  GitHub . It uses the API of GitHub to find releases and commits and to download required data on demand. With this version, Text-Fabric can also talk to GitLab instances. The most prominent calls on the backend are the  use() function and the start of the Text-Fabric browser. They will work with a GitLab backend if you pass the instance address with the optional parameter  backend :  python A = use(\"annotation/banks\", backend=\"gitlab.huc.knaw.nl\")   or  python A = use(\"annotation/banks\", backend=\"gitlab.com\")   In the Text-Fabric browser that looks as follows:  sh text-fabric annotation/banks  backend=gitlab.huc.knaw.nl   or  sh text-fabric annotation/banks  backend=gitlab.com   When  backend is omitted or is  None , the backend defaults to  github .  Limitations GitLab does not support Jupyter Notebooks. And even if you converted them to HTML, GitLab does not offer a rendered view on HTML pages, unless you use GitLab Pages. But that is not always enabled. Currently, Text-Fabric does not support publishing to GitLab pages, although everything up to building a Pages site is supported. When on a closed on-premise installation of GitLab, there is no way to see rendered notebooks on NBViewer, simply because NBViewer has no access to the shielded notebooks.  -  9  9.5  9.5.2 2022-06-14  Small fix in  tf.core.helpers.initTree .  New function  tf.advanced.text.showFormats ; call as  A.showFormats() that gives a nicely formatted list of all text-formats and the templates by which they are defined.  Small fix in text formats: when you specify a text-format with default values, the empty string is now also allowed as default value.  9.5.1 2022-05-31 Bug discovered thanks to an observation of Oliver Glanz: In search templates, a quantifier has to follow an atom line, like so   word gn=f /without/  nu=pl /-/   This looks for a word with female gender, without it being a word in the plural. An alternative syntax with the same semantics is   word gn=f /without/  nu=pl /-/   However, the parser in Text-Fabric got distracted by the intervening  gn=f and did not connect the quantifier with the preceding  word , which gave erroneous results. That has been fixed, and now the second form leads to the same results as the first one.  9.5.0 2022-05-18 New behaviour in walking nodes:  tf.core.nodes.Nodes.walk : with  events=True it generates open/close events for nodes, so that you can do something when the node starts and something else when the node ends. New utility functions  tf.core.helpers.clearTree and  tf.core.helpers.initTree . Various friction reducing changes:  functions with file or directory arguments always perform an expansion of a leading  ~ to the user's home directory.  9.4  9.4.4 2022-05-16 Several minor improvements in various parts of the app.  9.4.2-3 2022-05-04 The  weblink function can now also be driven by feature values. See  tf.advanced.settings and look in section  webFeature . Additional small fixes.  9.4.1 2022-05-03 Fixed a bug introduced by the previous change which caused a failure in the export from the TF-browser.  9.4.0 2022-04-29  Preprocessing took a bit too much time. The culprit was the computation of boundaries of nodes. It could be sped up by changing the data representation somewhat (going from  array to  tuple ) in some cases. Since the new data representation is incompatible with the previous one, we bumped the internal version for that ( tf.parameters.PACK_VERSION ). That means that Text-Fabric will recompute your precomputed corpus data if needed.  If you inadvertently type a query in the text-fabric browser that takes for ever to execute, it is difficult to get the tf-browser in a usable state again. We have chosen a remedy: we limit the search results to 4  the maximum node in your corpus. This holds for all query execution, also when executed outside the text-fabric browser. When outside the text-fabric browser, you can pass the  limit parameter to  A.search or  S.search to enforce a different and bigger limit. Setting it to  None or 0 restores the default of 4  maxNode. You cannot pass custom limits in the text-fabric browser.  9.3  9.3.2 2022-03-21 Bug in Text-Fabric browser: corpora that show a pretty display for section items instead of a list of subsection items (setting  browseContentPretty in  tf.advanced.settings ) did not respond to the display options, because in this particular case the options were not passed to the  tf.advanced.display.pretty() function. That has been remedied. The only corpus that makes use of this setting (that I know of) is the [Nino-cunei/uruk](https: github.com/Nino-cunei/uruk) corpus.  9.3.0-1 2022-02-10 The text-Fabric browser now displays hard-to-type characters, depending on the text format chosen. It is right below the query window. From there you can click to copy characters and then paste them in the query window.  9.2  9.2.5 2022-02-04 When precomputing section data, better error messages are generated when section nodes do not have values for the features that are supposed to contain their headings. Removed a debug statement that I left previously.  9.2.4 2022-02-02 Bug fix. When writing TF data to file, the function  _writeDataTf in  tf.core.data.Data had a bug that caused misalignment if the feature data had explicit  None values. That has been fixed. Now it makes no difference anymore whether you save feature data where node  n has value  None , or where node  n is absent. Thanks to Martijn Naaijer for spotting it.  9.2.3 2022-01-31 Improvement in app loading: added an argument  legacy=True to  use() , so that older versions of older apps still can be loaded.  9.2.1-2 2022-01-24 The text-fabric browser did not start-up well. That has been fixed. Loading an app from an arbitrary location on the local machine has been fixed.  9.1 2022-01-06 A big reorganization, so that all things related to a corpus can be stored in the same neighbourhood. Before this release we had the situation that  a corpus is resides in org/corpus  its tutorials resides in annotation/tutorials/corpus  its tf-app resides in annotation/app-corpus  its layered search interface is provided by annotation/app-corpus In the new situation we have  a corpus is resides in org/corpus  its tutorials resides in org corpus/tutorial  its tf-app resides in org/corpus/app  its layered search interface is provided by org/corpus-search So, in order to make a full fledged TF corpus there is no longer any dependency on the annotation organization. Additional fixes: quite a bit, among which  When downloading zip files from releases, the Uruk images got the wrong paths. That has been fixed in zipData, used by the text-fabric-zip command.  9.1.13 2022-01-02 Test release. Since 9.1.7 the text-fabric distribution has become bloated because setuptools includes a lot more files by default. I now distribute a wheel only, and took care that it has no more than the usual files included.  9.1.12 2021-12-24  New data is computed and stored for a corpus: for each text format a frequency list of the characters in the corpus when rendered in that text format:  tf.core.prepare.characters  A new function  tf.advanced.text.specialCharacters which provides a widget from which you can easily copy the special characters in the corpus. Call it as  A.specialCharacters(fmt=textformat) .  In the  tf.convert.walker module there is an extra  cv method:  tf.convert.walker.CV.activeNodes .  Fix a bug that prevented the text-fabric browser to start up in some cases.  9.1.11 2021-12-16 Loading of features somehow became painfully slow. There binary representations of feature data are pickled Python datastructure. I now optimize the pickled strings before writing them to disk. Then they load much faster afterwards. In order to feel the effects: perform a  tf.core.fabric.FabricCore.clearCache() , which will wipe out all previously generated binary feature data, so that the next time the binary features will be created afresh. Further improvements:   omap@v-w features will not be loaded by default by  tf.app.use() calls. If needed, they can be loaded afterwards by  A.load(\"omap@v-w\") call  When these mappings are needed by modules of TF, the module will have ensured they are loaded.  9.1.10 2021-12-15 Improved  tf.dataset.nodemaps.Versions.migrateFeatures . When migrating features from one data version to another along a node mapping between the two versions, the quality of the links between old nodes and new nodes is taken into account. We migrate feature values only through the best links available.  9.1.9 2021-12-13  Made sure that path names of files and directories, when retrieved by means of os.path.expanduser or os.path.abspath use forward slashes rather than backward slashes. These two functions might introduces path with backslashes when on Windows. The rest of TF works with forward slashes exclusively. We want prevent paths with mixed forward slashes and backslashes.  The  mod parameter in A.use() accepts not only comma separated strings of data modules, but also iterables of such modules.  If you want to override the checkout specifiers of standard modules (e.g. the  etcbc/parallels/tf or  etcbc/phono/tf modules of the  bhsa , you can now override them by passing these modules in the  mod parameter.  9.1.8 2021-12-10 Fixed missing expander triangles in the feature overview after the incantation. This happened in the classical notebook, not in jupyter lab. The classical notebook styles the summary element in such a way as to rob it from the triangle. A simple overriding CSS instruction was enough. Thanks to Oliver Glanz for spotting it.  9.1.7 2021-12-09 More information on the metadata of features on the interface.  After  use(\"xxx\") you get an expandable list of features. Formerly, a feature was represented by its name, hyperlinked to the feature documentation. Now you see also the data type of the feature, its description, and you can expand further to see all metadata of a feature.  TF.isLoaded and A.isLoaded ( tf.core.api.Api.isLoaded ) can show/hide more information, such as the file path to a feature, its data type, its description, and all of its metadata.  importMQL ( tf.core.fabric.FabricCore.importMQL ) accepts a parameter  meta which one can use to specify metadata that is common to all features. Now you can use it to pass feature-specific metadata as well.  Several datasources have been converted by means of importMQL: bhsa, extrabiblical and calap. Of these, I have updated the BHSA to have richer metadata in their features (only version 2021) including the standard modules phono, parallels, trees. And while I was at it, also did the non-standard modules valence and bridging.  9.1.6 2021-11-17 Bug in search, spotted by Oliver Glanz, with thanks to him for reporting it. Queries with  .f f. . But this is not the converse, the two are identical. The converse is  .f>g. . See [code](https: github.com/annotation/text-fabric/blob/947aa5071d545ed5c875fe24eeb7329d4a8e9893/tf/search/relations.py L1450-L1457)  9.1.5 2021-11-17 Added an extra method  A.load() by which you can load extra features after loading the main dataset.  9.1.4 2021-11-14  Small fix in the  tf.volumes.collect.collect function.  Small fix in search when run from the TF browser. Features that are mentioned in feature comparison relations were not shown in the search results. Now they do.  9.1.2,3 2021-11-03 In TF-apps, in the config.yaml where you specify an online location based on section headings, you can configure the app to put leading zeroes before section headings. See [webUrlZeros](https: annotation.github.io/text-fabric/tf/advanced/settings.html weburlzeros). Small fixes in the handling of these configuration settings.  9.1.1 2021-10-25  Layered search The layered search app hints in which browsers multiple highlighting is supported. It now works in Safari 15.0 on the Mac. It also works in browsers on iOs and iPadOs. The hints have been updated.  9.0  9.0.5 2021-09-10  Additions to the API The display functions are   tf.advanced.display.table   tf.advanced.display.plainTuple   tf.advanced.display.plain   tf.advanced.display.show   tf.advanced.display.prettyTuple   tf.advanced.display.pretty Some of them are defined with the parameter  asString=False . When omitted or False, the result will be displayed in the notebook. But when used by the TF-browser, the result will not be displayed, but returned as HTML. Text-Fabric knows when it is used by the TF browser or not. But there are cases when you want to tell Text-Fabric to not display the result, but to deliver it as HTML. For that the  _asString parameter was used. However, it was not defined for all of these display functions. The improvement is, that it now works for  all of the above display functions. When you pass  asString=True , the result will not be displayed (in the notebook), but returned as HTML.  9.0.4 2021-08-26  Fixes  Section headings in the BHSA were not always rendered in ltr mode. Fixed.  9.0.2, 9.0.3 2021-08-24  Fixes  Bug reported by Gyusang Jin: when a string specification of features that must be loaded contains newlines, an error will occur.  TF.loadLog() did not provide useful information anymore. Instead, there is now TF.isLoaded and A.isLoaded ( tf.core.api.Api.isLoaded ). For compatibility, loadLog still can be called, but is identical to isLoaded.  9.0.1 2021-08-23  Fixes  Bug reported by Jaime Toledo (https: github.com/annotation/text-fabric/issues/73)  Bug reported by Christian Jensen (https: github.com/annotation/text-fabric/issues/74) Thanks for reporting!  9.0.0 2021-07-29  Additions  Volume support : see  tf.about.volumes . This allows for partially loading a TF-dataset. It is the start of making Text-Fabric more agile. By being able to load portions of a work, and still not loose the connection with the whole work, it has potential for large corpora that do nit fit into RAM. However, as it stands now, in order to make portions of a work, the whole work will be loaded. When the portions are made, they can be loaded without loading the whole work. Later in the development of version 9 I hope to be able to synthesize whole works out of portions without the need of having the whole work in RAM.   tf.advanced.volumes.volumesApi   tf.volumes.extract   tf.fabric.Fabric.extract   tf.advanced.volumes.extract   tf.volumes.collect   tf.fabric.Fabric.collect   tf.advanced.volumes.collect   tf.fabric.Fabric now takes optional  volume= and  collection= parameters   tf.app.use now takes optional  volume= and  collection= parameters   tf.advanced.app.App now takes optional  volume= and  collection= parameters   tf.core.api.Api.isLoaded . A convenient way to get information about loaded features.  Changes  \"tf.compose.modify\" has moved to  tf.dataset.modify  \"tf.compose.combine\" has been replaced by  tf.volumes.collect  \"tf.compose.nodemaps\" has moved to  tf.dataset.nodemaps  \"tf.compose.Versions\" has moved to  tf.dataset.nodemaps.Versions  -  8  8.5  8.5.14 2021-07-06 Small fix in the search client: the totals of nodes where displayed as undefined for node types for which no layers have been defined.  8.5.13 2021-06-28 No changes except that the version requirement for Python is back to 3.6.3.  8.5.7,8,9,10,11,12 2021-06-14 Small fixes in the distribution of tf.client.make  8.5.6 2021-06-09  Updates in  tf.advanced.repo : a function  releaseData that releases a version of TF data of a corpus to GitHub. The release number gets bumped, the data is zipped and attached to the release. This helps to write pipeline scripts that transfer corpus updates to the TF eco-system.  8.5.5 2021-06-08  Updates in the  tf.client : more ways of building the layeredsearch client. Driven by the NENA pipeline.  8.5.4 2021-05-20  Updates in the  tf.convert.recorder : a new method to export positions using much less data, provided certain assumptions hold.  Updates in the  tf.client : a more memory-friendly way to store the corpus data, especially the positions data. The method can be switched on and off, depending whether the corpus satisfies the preliminaries for this space optimization.  8.5.3 2021-05-11 Updates in the layered search app and its distribution. The Recorder API has some additions  tf.convert.recorder  8.5.2 2021-05-06 Updates in the layered search app and its distribution.  8.5.1 2021-05-04 Small fixes in the the layered search app and its documentation.  8.5.0 2021-05-03 There is a new piece of functionality in Text-Fabric: making search interfaces for existing corpus apps. These are static HTML+CSS+Javascript pages, that provide  layered search . Text-Fabric has a new command  text-fabric-make dataset interfacename which generates such an app from a bit of configuration and code, which you have to provide in the  app- dataset repo. See  tf.client .  8.4  8.4.14 2021-04-20 A minor addition: you can now get the CSS of an app and re-use it in notebooks without loading the whole API. See  advanced.display.getCss .  8.4.13 2021-03-22 A few minor improvements:  the  tf.convert.recorder is improved. It can now save postion files per node type.  the  tf.core.timestamp.Timestamp.indent method now accepts a boolean for its  level parameter. By this you can increase and decrease the current indentation level of messages.  8.4.12 2021-02-11 Fix in  tf.convert.recorder.Recorder.read : this method wrote to the positions file, rather than reading from it. Thanks to Sophie Arnoult for spotting it.  8.4.11 2021-02-03 Enhancement: the TF-browser can now export the contents of the node pad, decorated with location information and text content. Previously, you only got a bare list of nodes in  nodes.tsv . Now you also get a  nodesx.tsv , analogously to  resultsx.tsv . See  tf.about.browser . However, such a list of node tuples may not be as uniform as a list of query results. Non-uniform lists lead to a messy output table, but still usable. Thanks to Jorik Groen for asking for this. This also affects the  A.export() function ( tf.advanced.display.export ), which was only able to export uniform lists. Now it can also export non-uniform lists.  8.4.10 2021-02-01 Bug fix: when loading an additional feature into an existing TF API, the feature did not get properly reloaded if it had already been loaded and the feature data had changed.  8.4.9 2021-02-01 Updated links to the documentation. The documentation has now a working search interface.  8.4.8 2021-01-30 Added logic to map nodes between versions of TF datasets. This logic existed in a notebook that explores versions of the Hebrew Bible: [versionMappings](https: nbviewer.jupyter.org/github/ETCBC/bhsa/blob/master/programs/versionMappings.ipynb). Whereas the code to map slots between versions is highly dependent on the dataset in question, the code to extend a slot mapping to a node mapping is generic. That code is now in \"tf.compose.nodemaps\" (as of version 9 in  tf.dataset.nodemaps ). It is used in the [missieven](https: nbviewer.jupyter.org/github/clariah/wp6-missieven/blob/master/programs/map.ipynb) corpus.  8.4.7 2021-01-20 Renamed some CSS classes in the display style sheet of Text-Fabric. These names interfered with class names used in Jupyter Book. Added several transcriptions for Arabic characters. See  tf.writing.arabic .  8.4.6 2020-12-30 Small fixes in the functions that load a TF app: you could already directly load the data of an app-less corpus from disk, now you can do the same if such data resides on GitHub. Various other things had to be tweaked a little.  8.4.5 2020-10-29 Small fix of a problem introduced by the previous enhancement.  8.4.4 2020-10-15 Enhancement in web links to nodes: there is a new setting  webOffset in the configuration of a TF app that let you specify an offset between a logical page number and a physical page number. See the webOffset setting of  tf.advanced.settings . It is needed by the new [missieven corpus](https: github.com/clariah/wp6-missieven/blob/master/app/config.yaml).  8.4.3 2020-09-25 Minor fix in the display:   Left-to-right transcriptions in right-to-left corpora still had rtl tendencies Fixed by using the CSS mechanism  unicode-bidi: embed more consistently.  8.4.2 2020-09-20 Minor fixes in the display:   The Text-Fabric browser showed the chunks around a gap in the wrong order for right to left scripts. Fixed by using CSS mechanisms such as  display: inline-block and  unicode-bidi: embed .   Chrome did not display dotted borders good enough: in some circumstances the dots were hardly visible . Sadly one of those circumstances is the default zoom level of the browser: if the user enlarges or decreases the zoom level, the dots become better visible. It seems that using the  rem unit for specifying border-sizes contributes to this behaviour. So I specified all border widths in  px , assuming 20px = 1rem.  8.4.1 2020-09-08 Better error message if a standard module of a data set cannot be found. E.g. the parallels modules for the BHSA, DSS. Addition in  tf.convert.walker , in the  cv.node() function to add nodes: it accepts an additional optional parameter to link an explicit set of slots to a node.  8.4.0 2020-07-09 Added the  tf.convert.tf.explode function, by which you can  explode feature files into TF files without optimizations.  8.3  8.3.5 2020-06-29 Fixed an error when opening the Uruk corpus in the Text-Fabric browser.  8.3.4 2020-06-26 Various small fixes:  Fix in result display in TF browser: the members of a result form a row again instead of a column.  Better error message in some cases in  tf.convert.walker .  Moved documentation of the walker functions into the docstrings of those functions.  8.3.3 Small fix by Cody Kingham: when calling  use(api= .) with an TF api constructed before, the  TF attribute of this api is not transported to the app object. 2020-06-13  8.3.1, 8.3.2 2020-06-11 Gentium Plus font installed. Greek Character table added. Small fixes, one blocking for the Text-Fabric browser.  8.3.0 2020-06-10  Backward incompatibility  ! caution \"corpus apps\" The API between TF and its apps has changed. If you upgrade TF to this version, you also have to upgrade the TF apps you work with. You can do that by adding the checkout specifier  latest when you call the corpus, e.g. for the BHSA (one time is enough):   A = use(\"bhsa:latest\", hoist=globals()\")   Text-Fabric is now better in detecting if you load an incompatible app and will give you a useful hint. The post-incantation messages of TF are now better formatted and more modest. Most information is collapsed and expandible by a triangle. Under the hood improvement of the display algorithm. Both  plain and  pretty rely on the same  unravel algorithm that turns a graph fragment into a tree for display. See  tf.advanced.unravel . The unravel function is also exposed as  A.unravel(node) , see  tf.advanced.unravel.unravel . Now you can define your own rendering function, taking the unraveled tree as input.  New display settings See  tf.advanced.options .   plainGaps : normally, gaps are shown in plain displays. But the control is yours, with  plainGaps=False gaps are suppressed.   hiddenTypes : you can prevent node types from adding to the structure of the display, which might become very cluttered. E.g. the atom types of the BHSA, and also the subphrases and half verses. Before, it was a binary choice: the app determines which node types are hidden by default, and the user can switch them all on or all off. Now the app still determines the default, but the user can hide/unhide all combinations of node types.  TF browser Various fixes:  Starting in v8, the ports through which the TF-browser communicates are no longer hardwired in the app config, but are determined at run time: the first available ports are choses. This had the negative consequence that different corpora could use the same port in turn, thereby wreaking havoc with the sessions for those corpora. Now the ports are determined as a function of the arguments to  text-fabric .  Text alignment and line wrapping has improved, especially in plain displays.  8.2  8.2.2 2020-06-02 When you load a corpus by means of  use , you can now also override the config settings of the app on the fly. See  tf.advanced.app.App  8.2.1 2020-05-30 Fixed two silly bugs, one of which a show stopper, preventing precomputation after download of data to complete.  8.2.0 2020-05-29 Improved display algorithm: corpora need less configuration for TF to generate good displays. In particular, the atom types of the BHSA are now handled without tricky branches in the code. See  tf.advanced.display . Core API: a bit of streamlining: all exposed methods now fall under one of  A TF N F E L T S .  ! hint \"new\" If you want to talk to yourself in markdown or HTML you can use  A.dm(markdownString) and  A.dh(htmlString) . See  tf.advanced.helpers.dm and  tf.advanced.helpers.dh .  Backward incompatibility  ! caution \"corpus apps\" The API between TF and its apps has changed. If you upgrade TF to this version, you also have to upgrade the TF apps you work with. You can do that by adding the checkout specifier  latest when you call the corpus, e.g. for the BHSA (one time is enough):   A = use(\"bhsa:latest\", hoist=globals()\")    ! caution \"logging functions\" The methods  info  error  warning are no longer hoisted to the global name space. Use  A.info or  TF.info for these methods.  ! caution \"node functions\"  N() has become:  N.walk()  sortNodes ,  sortKey ,  sortkeyTuple ,  sortkeyChunk and  otypeRank are no longer hoisted to the global name space. Use  N.sortNodes etc. instead for all these methods.  ! hint \"fix the compatibility relatively easily\" If you use the functions in question a lot in a program or notebook, define them right after the incantation as follows:  python A = use('xxx', hoist=globals( info = A.info error = A.error silentOn = A.silentOn  . sortNodes = N.sortNodes  .   etc.  8.1  8.1.2 2020-05-22 Thoroughly reorganized docs. All available documentation has now moved into docstrings. The formatted docstrings form the online documentation as well. See  tf .  8.1.0, 8.1.1 2020-05-14  New method in the  L -API ( tf.core.locality.Locality.i ):  L.i(node, otype=nodeTypes) . It delivers the  intersectors of a node, i.e. the nodes that share slots with the given  node .  Fixed a subtle bug in the  A.pretty() which manifested itself in the Old Babylonian corpus. A line with clusters in it displayed the clusters twice if  baseTypes has a non slot type. When doing a  plain within a  pretty , the displayer \"forgot\" the nodes encountered in  plain , so they could not be skipped by the rest of  pretty .  More improvements in the display logic where things refuse to be hierarchical.  To the display option  extraFeatures you may also pass values like  type:feature , see options ( tf.advanced.options ) under list of display parameters.  8.0  8.0.3 2020-05-12   A.header() was used by the TF-browser to produce a colofon. Now it can be used in a Jupyter Notebook to produce the overview of features used, normally displayed after the incantantation.  There is a new  A.showProvenance() that can be used to show detailed provenance of the corpus data and all its modules. When you exported from the TF-browser, this data was included (and still is), but now you can invoke it from a program as well (typically in a Jupter notebook)   Provenance When exporting data from the TF-browser, a provenance sheet is generated with entries for the data modules. Now you can generate this sheet in a Jupyter notebook as well, by means of  A.showProvenance() .  Online data fetching/checking does not happen by default anymore if there is already local data. This reduces the number of GitHub API requests greatly, and users are less prone to hit the limit.  8.0.2 2020-05-11 Small fix in  webLink() .  8.0.1 2020-05-10 Small fixes in order to accomodate NBviewer. There were two problems  the online nbviewer clipped many boxes in the display (cause: name conflict between CSS class names in Text-Fabric and in NBviewer)  the lineheight in the classic Jupyter notebook is fixed on a value that is too low, in Jupyter lab it is ok. Fix: we add CSS code that unsets the line height that the classic notebook sets.  8.0.0 2020-05-08  NB: This is a backwards incompatible change. Strongly recommended:   pip install  upgrade text-fabric    All known corpus apps (the ones in under the  annotation org on GitHub) have been adapted to this change.  Text-Fabric auto-downloads the newest version of an app by default. As a consequence, if you have not upgraded Text-Fabric, it will fail.  The functionality offered by corpus apps is now called the  Advanced API , as opposed to the  core API . Everything under  A is the advanced API. The things under  F ,  E ,  L ,  T , etc. are the core API.   A will work also for TF datasets without an app. The advanced API will compute reasonable defaults based on what it finds in the TF data. It is still possible to write full-fledged TF apps that extend the capabilities of the advanced API.  Several special effects of individual TF apps are now supported by the advanced API. The most intricate it support for displaying discontinuous types piece by piece, as in the BHSA. The other one is support for graphics inclusion as in the Uruk corpus.  Improvements in  plain() and  pretty() : they deliver better results and they make it easier for tf-app developers.  Pretty displays can be tamed by cutting of the unfolding of structure at some level and replacing it by plain displays ( baseTypes display option).  Highlights in plain display will be done, also for nodes deeply buried in the top node. This is determined by  baseTypes : a node of type in  baseTypes will get full highlighting, all other nodes will get highlighting by boxes around the material.  Core API improvement: The  Locality ( L ) functions  d() ,  u() ,  l() ,  r() take an optional parameter  otype holding the node type of the related nodes that will be delivered. This can now also be an iterable of types (preferably a set of frozenset).  Text-Fabric will detect when apps have a version mismatch with the general framework. If so, it will issue warnings and it will gracefully fall back to the core API. Note that if you use Text-Fabric prior version 8, there will be no graceful fallback.  -  7  7.11  7.11.2 2020-04-07 Improvement in  plain() display of nodes with highlights:  if a parent node  contains a highlighted child node that is not separately displayed, the parent node receives a secondary highlight.  if a child node  is contained in a highlighted parent node that is not separately displayd, the child node receives a secondary highlight. (This was already the case) Secondary highlights are suppressed if either the parent or the child node is a section node.  7.11.1 2020-04-06  Performance imporovement in Text-Fabric browser: displaying passages in the presence of a query with very many results took too long. That has improved.  It is now possible to pass the optional parameter  descend to the highlight function  hlText . That is needed by some TF apps when they want to use text formats for nodes with a smaller node type than the node type for which the format has been designed.  7.11.0 2020-03-22  In TF browser: passages are not expanded if the user hits the expand icon, for some corpora. It happened when the type of level 3 sections is not the same as the type of level 2 sections ( int vs  str ). TF looked at the wrong level when determining the type. Fixed.  When fetching data from GitHub, we got a deprecation warning from  pygithub . Replaced the call to a deprecated method by a call to a new method.  Mismatch between docs and implementation of  A.plain() : the  isLinked parameter is  False according to the docs, but was coded as  True . The docs have been adapted.  For tf-app developers: when defining  _pretty() , it is no longer required to compute whether the node type counts as big. It is done for you in the TF-generic method  prettyPre() . But you can still use another definition of  bigTyoe if your corpus requires is. See e.g. the Quran app.  For tf-app developers: the  _plain() function tended to add a link under the material also in cases where there was already a hyperlinked passage indicator. This is now suppressed.  All known corpus apps (the ones in under the  annotation org on GitHub) have been adapted to this change.  7.10  7.10.2 Fix: in some  open() statements, the encoding parameter  encoding=\"utf8\" was not passed. On some system that causes problems. The parameter has been added in all appropriate cases.  7.10.0, 7.10.1 2020-02-13 GitHub is deprecating its token system for authentication when using the GitHub API. Text-Fabric uses the GitHub API to fetch data from repositories. In order to increase the rate limit from 50 x per hour to 5000 x per hour, users were advised to create a pair of client-id and client-token strings. The advise is now: create a personal access token. See Rate limiting in ( tf.advanced.repo ). Also: a bug fix to the walker conversion, again: thanks Ernst for spotting it.  7.9  7.9.1-2 2020-02-13 Fixed a few bugs in the  cv.stop() function in the walker conversion, see  tf.convert.walker . Thanks to Ernst Boogert for spotting them.  7.9.0 2019-12-16 Add behaviour to the \"tf.compose.modify()\" function (as of version 9  tf.dataset.modify() ) so that you can output modified features only instead of a whole dataset. (Following a suggestion by Cody Kingham). 2019-07-24  7.8  7.8.12 2019-07-24 Fix a bug spotted by Robert Voogdgeert: in search templates with qunatifiers: if the line before the quantifier is not an atom line but a feature line, TF crashes. Not anymore. The fix is at the syntactical level of queries. I have tested most known queries and they gave identical results as before.  7.8.11 2019-07-23 Following a suggestion by Camil Staps: In search templates, the comment sign  % does not have to be at the start of a line, it may also be indented by white space. Still, you cannot use % to comment out trailing parts of lines after non-blank parts.  7.8.9-10 2019-07-11 When TF wants to fetch data from GitHub, but cannot get connection, it will give some sort of message as to why.  7.8.8 2019-07-05 Something new:  Recorder , a device to export plain text from TF in such a way that the position of nodes in that text is stored. Then you can annotate the plain text in some tool, e.g. BRAT, and after that, the Recorder can turn those annotations into TF features. It is not documented yet, but this [notebook](https: nbviewer.jupyter.org/github/annotation/text-fabric/blob/master/test/varia/recorder.ipynb) shows you a complete examnple.  7.8.7 2019-07-03 Fixed adding multiple click events in the javascript of the TF browser.  7.8.6 2019-07-02 Unmentionable fixes.  7.8.5 2019-06-21 Added fonts for the upcoming [NENA](https: github.com/CambridgeSemiticsLab/nena_tf) corpus with TF aapp by Cody Kingham. Updated docs for app writers.  7.8.4 2019-06-14 All queries go a tad faster. Additional small fixes.  7.8.3 2019-06-13 Performance tweaks in querying. Especially long running queries perform better. The query planning can now handle multiple relationships of the kind  a   and     that look for  n and  m such that there is an  edgeFeature edge from  n to  m , and likewise      that look for  n and  m such that there is an  edgeFeature edge from  n to  m , or from  m to  n , or both. See the  tf.about.searchusage . This corresponds to edge features. See also the [Banks example](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/tutorial/app.ipynb).  7.6.2 2019-04-12 Small but important fix in the display logic of the  pretty() function. The bug is not in the particular corpus apps that partly implementt  pretty() , but in the generic  tf.advanced.display library that implements the other part. Thanks to Gyusang Jin, Christiaan Erwich and Cody Kingham for spottting it. I wrote an account of the bug and its fixing in this [notebook](https: nbviewer.jupyter.org/github/annotation/text-fabric/blob/master/test/fixing/Ps18-49.ipynb).  7.6.1 2019-04-10 Small fix in reporting of the location of data being used.  7.6.0 2019-04-09 Simplified sharing: pushing to GitHub is enough. It is still recommended to make a release on GitHub now and them, but it is not necessary. The  use() function and the calling of the TF browser undergo an API change.  API addition: When calling up data and a corpus app, you can go back in history: to previous releases and previous commits, using a  checkout parameter. You can specify the checkout parameter separately for  the corpus app code (so you can go back to previous instantiations of the corpus app)  the main data of the app plus its standard data modules  every data-module that you include by means of the   mod= parameter. The values of the checkout parameters tell you to use data that is:   clone : locally present under  ~/github in the appropriate place   local : locally present under  ~/text-fabric-data in the appropriate place   latest : from the latest online release   hot : from the latest online commit     : (default): from the latest online release, or if there are no releases, from the latest online commit   2387abc78f9de . : a concrete commit hash found on GitHub (under Commits)   v1.3 : a release tag found on GitHub (under Releases) Or consult the [repo](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/tutorial/repo.ipynb) notebook.  API deletion (backwards incompatible): The parameters  check= . and  lgc= . of  use() and  -lgc and  -c when calling the TF browser have been removed. These parameters were all-or-nothing, they were applied TF app code, main data, and included data modules.  Advice In most cases, just do not use the checkout parameters at all. Then the corpus app will be kept updated, and you keep using the newest data. If you want to producing fixed output, not influenced by future changes, run TF once with a particular version or commit, and after that supply the value  local as long as you wish. If you are developing data yourself, place the data in your repository under  ~/github , and use the value  clone for checkout.  Sharing If you create your own features and want to share them, it is no longer needed to zip the data and attach it to a newly created release on GitHub. Just pushing your repo to GitHub is sufficient. Still it is a good practice to make a release every now and then. Even then, you do not need to attach your data as a binary. But, if you have much data or many files, doing so makes the downloading more efficient for the users.   checkoutRepo() There is a new utility function  checkoutRepo() , by which you can maintain a local copy of any subdirectory of any repo on GitHub. See  tf.advanced.repo . This is yet another step in making your scholarly work reproducible.  Fix in query parsing Queries like   sentence   . This is a bug in the Markdown renderer used by GitHub and NBViewer. It happens if table cells have doubly nested    elements. It did not show up in local notebooks. In order to avoid it, TF does no longer work with the Markdown renderer. Instead, it produces output in HTML and uses the HTML renderer in notebooks. That fixes the issue.  When using  A.export() to export data to Excel-friendly CSV files, some node types will get their text exported, and some just a label. It depended on whether the node type was a section or not. Now it depends on whether the node type is small or big. We export text for small node types. A node type is small if it is not bigger than the condense type. This behaviour is now the same as for pretty displays.  7.4.9 2019-03-08  Changes in font handling  New flag in  pretty() :  full=False . See  tf.advanced.display  7.4.8 2019-03-07  When looking for data in  lgc=True mode, TF will report clearly when data cannot be found in local github clones. In such cases TF will look for an online release of the repo with the desired data attached. Before it was not clear enough that TF was looking online, despite the  lgc flag, because of missing data. So if you misspelled a module path, you got messages that did not point you to the root cause.  Some fixes in the plain display having to do with the passage label.  7.4.7 2019-02-28 When converting a new corpus, Old Babylonian Letters (cuneiform), I tuned the conversion module a bit. Several improvements in the conversion program. Better warnings for potential problems. Several other small changes have been applied here and there.  7.4.6 2019-02-07 When querying integer valued features with inequality conditions, such as   word level>0   an unpleasant error was raised if not all words have a level, or if some words have level  None . That has been fixed now. Missing values and  None values always cause the  > and    element.  7.3.12 2019-01-16 Small fix in oslots validation. You can save a data set without the oslots feature (a module). The previous release wrongly flagged a oslots validation error because of a missing oslots feature. That has been remedied.  7.3.11 2019-01-16 If the oslots feature is not valid, weird error messages used to occur when TF tried to load a dataset containing it. The oslots feature was loaded, but the computing of derived data threw a deep error. Not anymore. When TF saves the oslots feature it checks whether it is valid: It should map all non-slot nodes and only non-slot nodes to slots. So, right after you have converted a data source to TF you can check whether the oslots is valid, during  TF.save() . And further down the line, if you somehow have let a faulty oslots pass, and try to load a dataset containing such a oslots feature, TF checks whether the range of nodes mapped by oslots does not have holes in it. If so, it generates a clear error and stops processing.  7.3.10 2019-01-10 Moved the app tutorials from the annotation/app-appName repos into a new annotation/tutorials repo. The reason: the app-appName are used for downloading the app code. It should not be burdened with extra material, which is also often updated, giving rise to many spurious redownloads of the app code. Additionally, for education purposes it is handy to have the tutorials for all apps inside one repo. For example, to use in a Microsoft Azure environment.  7.3.9 2019-01-09 Better browsing for corpora with very many top level sections, such as Uruk. For more info: see [ 36](https: github.com/annotation/text-fabric/issues/36)  7.3.8 2019-01-07 Small fix.  7.3.7 2019-01-07 Small fixes in the core: the Text API can now work with corpora with only two levels of sections, such as the Quran.  7.3.6 2019-01-04 Arabic transcription functions  7.3.5 2018-12-19 TF-browser: Fixed a performance bottleneck in showing passages. The computation of the highlights took too much time if the query in question has many results.  7.3.4 2018-12-18 In the  plain() representation NBconvert has a glitch. We can prevent that by directly outputting the plain representation as HTML, instead of going through Markdown. Fixed that.  7.3.3 2018-12-17 The TF browser could not fiund its templates, because I had forgotten to include the template files in the Python package. (More precisely, I had renamed the templates folder from  views , which was included, to  templates , and I had forgotten to adapt the  MANIFEST.in file).  7.3.1 2018-12-14 Glitch in the Uruk app: it imports other modules, but because of the dynamic way it is imported itself, a trick is needed to let it import its submodules correctly. 2018-12-13  7.3.0 2018-12-13  Text-Fabric has moved house from  Dans-labs to  annotation on GitHub.  The corpus apps have been moved to separate repos with name  app- xxxx within [annotation](https: github.com/annotation)  The tutorials have been moved from the repos that store the corpus data to the  app - xxxx repositories.  7.2  7.2.3 2018-12-13 The TF-browser exports an Excel export of results. Now you can also export to Excel from a notebook, using  A.export(results) . Jump to the tutorial: [exportExcel](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/exportExcel.ipynb) For more info: see [ 38](https: github.com/annotation/text-fabric/issues/38)  7.2.2 2018-12-12  ! abstract \"Web framework: Bottle => Flask\" The dependency on [Bottle](https: bottlepy.org) as webserver has been replaced by [Flask](http: flask.pocoo.org/docs/1.0/) because Bottle is lagging behind in support for Python 3.7.  ! abstract \"Plain display in Uruk\" The plain display of lines and cases now outputs their ATF source, instead of merely  line 1 or  case a .  ! abstract \"Further code reorganization Most Python files are now less than 200 lines, although there is still a code file of more than 1000 lines.  7.2.1 2018-12-10  Fix broken links to the documentation of the TF API members, after the incantation.  Fix in the Uruk lineart option: it could not be un-checked.  7.2.0 2018-12-08  ! abstract \"TF Browser\"  The TF kernel/server/website is also fit to be served over the internet  There is query result highlighting in passage view (like in SHEBANQ)  Various tweaks  ! abstract \"TF app API\"   prettySetup() has been replaced with  displaySetup() and  displayReset() , by which you can configure a whole bunch of display parameters selectively.  All display functions ( pretty plain prettyTuple plainTuple show table ) accept a new optional parameter  withPassage which will add a section label to the display. This parameter can be regulated in  displaySetup .   A.search() accepts a new optional parameter:  sort= . by which you can ask for canonically sorted results ( True ), custom sorted results (pass your onw key function), or unsorted results ( False ).  New functions  A.nodeFromSectionStr() and  A.sectionStrFromNode() which give the passage string of any kind of node, if possible.  The function  A.plain() now responds to the  highlights parameter: you can highlight material inside plain displays. and  [display tutorial](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/display.ipynb)  New function  T.sectionTuple(n) which gives the tuple of section nodes in which  n is embedded   Modified function  T.sectionFromNode(n, fillup=False) It used to give a tuple (section1, section2, section3), also for nodes of type section1 and section2 (like book and chapter). The new behaviour is the same if  fillup=True . But if  fillup=False (default), it returns a 1-tuple for section1 nodes and a 2-tuple for section2 nodes.  New API member  sortKeyTuple to sort tuples of nodes in the canonical ordering ( tf.core.nodes ).  The code to detect the file name and path of the script/notebook you are running in, is inherently brittle. It is unwise to base decisions on that. This code has been removed from TF. So TF no longer knows whether you are in a notebook or not. And it will no longer produce links to the online notebook on GitHub or NBViewer.  Various other fixes  ! abstract \"Documentation\" The entry points and paths from superficial to in-depth information have been adapted. Writing docs is an uphill battle.  ! abstract \"Under the hood\" As TF keeps growing, the need arises over and over again to reorganize the code, weed out duplicate pieces of near identical functionality, and abstract from concrete details to generic patterns. This release has seen a lot of that.  7.1  7.1.1 2018-11-21  Queries in the TF browser are limited to three minutes, after that a graceful error message is shown.  Other small fixes.  7.1.0 2018-11-19  You can use custom sets in queries in the TF browser  Reorganized the docs of the individual apps, took the common parts together  New functions  writeSets and  readSets in  tf.lib  7.0  7.0.3 2018-11-17  In the BHSA, feature values on the atom-types and subphrases are now shown too, and that includes extra features from foreign data sets  The feature listing after the incantation in a notebook now lists the loaded modules in a meaningful order.  7.0.2 2018-11-16  Small fixes in  text-fabric-zip  Internal reorgnization of the code  Documentation updates (but internal docs are still lagging behind)  7.0.1 2018-11-15  Fixed messages and logic in finding data and checking for updates (thanks to feedback of Christian H\u00f8ygaard-Jensen)  Fixed issue  30  Improved the doc links under features after the incantation.  Typos in the documentation  7.0.0 2018-11-14 Just before SBL Denver, two years after SBL San Antonio, where I started writing Text-Fabric, here is major version 7. Here is what is new:  you can call in \"foreign data\": tf feature files made by yourself and other researchers;  the foreign data shows up in the text-fabric browser;  all features that are used in a query, show up in the pretty displays in the TF browser, also the foreign features;  there is a command to prepare your own data for distribution via GitHub;  the incantantion is simpler, but ut has changed in a backwards-incompatible way;  after the incantation, for each feature it is shown where it comes from. Under the hood:  apps (bhsa, peshitta, syrnt, uruk) have been refactored thoroughly;  a lot of repeated code inside apps has been factored out  it is easier to turn corpora into new text-fabric apps. Quick start: the new [share](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/share.ipynb) See the  tf.about.datasharing for concrete and detailed hints how to make most of this version.  -  6  6.4  6.4.5-6 2018-11-08  Bug fix: Now TF can truly work if you do not have a feature  text.tf in your dataset.  Tests added for basic relations in search: all relations are rigorously tested, a few small bugs fixed.  The comment sign in queries is now  % , only at the start of a line.  6.4.3-4 2018-11-06 Big bug fix in queries: basic relationships in combination with custom sets. The implementation of the basic relationships did not reckon with custom sets that contains both slot nodes and non-slot nodes. And it did not trigger the right code when a custom set has only slot nodes. That has been remedied. Some of the search tutorials have been expanded to include a number of these critical cases. A more complete test suite outside the tutorials is still on my to do list. Thanks to Cody Kingham for spotting and reporting this bug.  6.4, 6.4.1-2 2018-11-02  A passage browsing interface that interacts with the search results.  The interface scrolls to the highlighted row. Minor things:  More refined warnings when you run out of memory  TF checks whether you are running 64 bit Python. If not, a warning is issued.  6.3  6.3.2 2018-10-27  Better documentation for installation of Text-Fabric on Ubuntu.  Added new module requirements: ipykernel and notebook.  6.3.1 2018-10-24 An optional parameter  silent=False has been added to the initialisation calls of the specific app APIs: you can say now   A = Xxxx(silent=True)   where  Xxxx is a know corpus. and then all non-error messages will be suppressed. If the underlying TF API needs to precompute data, it will still be shown, because this may cause an otherwise unexpected delay. Since this is a releatively rare case, and since this can be remedied by running the call again, I leave this behaviour as it is.  6.3.0 2018-10-19  Character tables for Hebrew abd Syriac, with links to them from the TF browser  Better font handling  In the  pretty and  plain functions you can pass a  fmt parameter, to control the text representation (original script, transcription, phonetics)  You can also control the text representation in the Text-Fabric browser.  6.2  6.2.2 2018-10-18  Added ETCBC/WIT transcriptions to the SyrNT data source. Now both Peshitta and Syriac New Testament have ETCBC transcriptions.  The older, rectangular logo makes place for the more crisp, circular one  6.2.1 2018-10-17  New app: Syrnt (Syriac New Testament. It works much like the Peshitta, but the SyrNT data has linguistic annotations at the word and lexeme levels. After this upgrade you can browse the SyrNT by saying  text-fabric syrnt on the command line.  6.2.0 2018-10-16  New app: Peshitta. It works much like the BHSA, but there is one big difference: the current Peshitta data does not have linguistic annotations. There are just books, chapters, verses and words. We expect to add lemmatizations of words shortly. After this upgrade you can browse the peshitta by saying  text-fabric peshitta on the command line.  Fixed a bug in exportMQL: when there are no enumerated values, do not write out an empty  CREATE ENUMERATION statement to the MQL file.  6.1  6.1.0 2018-10-12  More precise provenance data when you export results from the Text-Fabric data;  Under the hood reorganization of configuration data of apps like Bhsa and Uruk;  App-specific parts of the code have moved to more generic parts: a big cleanup has performed;  This will make it easier to add new apps.  6.0  6.0.7-8-9 2018-10-11  Avoid computing the notebook name when the user passes a name for the notebook to  Uruk() or  Bhsa() . And when the computing needs to be done, all exceptions will be caught, because the code for determining the notebook name is brittle, and may crash if the Jupyter version does not match.  Fixed the bug that the Bhsa and Uruk did not run properly outside a notebook or outside a github repo.  In Bhsa and Uruk, the generated info after the incantation can be collapsed (features, API members).  6.0.6 2018-10-10 In the BHSA, the edge features are now shown too after the incantation. If you hoist the API members into your namespace, you will get a list of hoisted names, linked to the API documentation.  6.0.5 2018-10-09 When using BHSA and Uruk in a notebook, there is an even simpler incantation which auto downloads features. In the BHSA it is shown which features are loaded, with direct links to the feature docs.  6.0.4 2018-10-09 When using BHSA and Uruk in a notebook, there is a simpler incantation which auto downloads features. Some issues concerning paths in zipfiles of downloaded data have been solved.  6.0.3 Easier incantations for  Bhsa() and  Uruk() .  It is no longer needed to pass the name of the notebook, but you can still do so:  name='mynotebook'  You can leave out the  api argument in  Bhsa() . Then you do not have to load features by means of  TF.load() ,  Bhsa() will load a standard set of features, and if the BHSA data is missing, it will download them first. The former ways of calling  Bhsa() and  Uruk() are still valid. Note that all arguments have become optional. 2018-10-08 The Text-Fabric browser will always print a banner with its name and version. If you pass it the argument  help or -h or  version or -v it will show the relevant information and stop executing.  6.0.2 2018-10-07 The Text-Fabric browser takes it data by default from  ~/text-fabric-data . It will not check local github clones for data. But if you pass the option  -lgc , it will first check your local github clones. So it you do nothing special, the TF browser always works with the auto-downloaded data.  6.0.1 2018-10-06 Not only the core BHSA data will auto load, also the related PHONO and PARALLELS data. A new release has been made of the related data, and they are now in sync with the release of the core data. If you use auto load already, you do not have to do anything. But if you have the etcbc/phono and etcbc/parallels repos in your  ~/github folder, you should do a  git pull origin master on those repos.  N.B. : I am contemplating to have the Text-Fabric browser always use data from  ~/text-fabric-data and no longer from  ~/github/etcbc . Then the TF browser always controls its own data, and it will not occur that the version of the TF browser is not compatible with the version of the TF data in your github repos, or that the main data and the related data are out of synch. The disadvantage is that if you have the github repos on your system, you get redundant data in  ~/text-fabric-data . However, there is only one version kept in  ~/text-fabric-data , so this is not much.  6.0.0 2018-10-05 A big update with several changes:  API change:  T.text() has got more behaviours. This change was needed for the Text-Fabric browser, in order to represent  lexemes in exported files.  ! hint \"Showcase: BHSA dictionary\" Here is how you can collect the BHSA lexemes in an Excel sheet.  [about.md](https: github.com/annotation/text-fabric/blob/master/test/bhsa/bhsa-Dictionary/about.md)  [RESULTSX.tsv](https: github.com/annotation/text-fabric/blob/master/test/bhsa/bhsa-Dictionary/RESULTSX.tsv) It might also be handy for the programmers amongst you.  Auto update The Text-Fabric browser checks if you are using the most recent release of the data.  Font rendering A font rendering issue in Safari 12 in macos Mojave prevented the use of Ezra SIL for Hebrew in notebooks. We now work around this by relying on the distribution of Ezra SIL as webfont in the [font library](https: fontlibrary.org).  Additional small fixes. Not worth telling.  ! hint \"update Text-Fabric\" To update Text-Fabric itself to version 6.0, consult  tf.about.install . Perform this step first, because the new TF may download the new data for you.  ! caution \"Data update needed\" In order to work successfully with the new  T.text() function, you need a newer release (1.4) of the BHSA  data . (In fact, only one line in one feature has changed ( otext.tf ). Here is how you get the new data release:  Automatically If previously your Text-Fabric browser has automatically downloaded the data for you, it will detect the new release and download it automatically. You do not have to do anything, except increase your patience. The download (24 MB) takes some time and after that Text-Fabric will precompute related data, which may take a few minutes. This is a one-time-step after a data update.  Manually If you have a clone of the BHSA repository, then go to that directory and say  git pull origin master . If you get error messages, then you have local changes in your local BHSA repository that conflict with the github version. Probably you have run the tutorials in place. Best thing to do is:  copy your BHSA tutorial directory to somehwere else;  remove your local BHSA repository entirely;  decide whether you really want the whole repo back (nearly 4 GB). If not: you're done, and TF will download automatically the data it needs. If you still need it: move one directory up (into the  etcbc directory) and do  git clone https: github.com/etcbc/bhsa . If you want to consult the tutorials, either:  view them on [nbviewer](https: nbviewer.jupyter.org/github/etcbc/bhsa/tree/master/tutorial/); or  run them in a directory outside the BHSA repo (where you have copied it a minute ago).  -  5  5.6  5.6.4 2018-10-04 Solved a font-rendering issue on Safari 12 (Macos Mojave): locally installed fonts, such as Ezra SIL are not being honored. So I linked to a stylesheet of the [fontlibrary](https: fontlibrary.org) which has a webfont version of Ezra SIL. That worked.  5.6.3 2018-10-04 Exported tab-separated files get extension  .tsv instead of  .csv , because then they render better in GitHub.  5.6.2 2018-10-04 Small optimization. More docs about reading and writing Excel compatible CSV files with Hebrew characters in it.  5.6.1 2018-10-04 Better exporting from TF browser: a good RESULTSX.tsv with results, sensibly augmented with information, directly openable in Excel, even when non-latin unicode code characters are present . All features that occur in the searchTemplate are drawn in into the RESULTSX.tsv, onto the nodes they filter. An additonal feature filtering is now possible in searchTemplates:  feature . This acts as \"no additional constraint\", so it does not influence the result set. But it will be picked up and used to add information into the RESULTSX.tsv.  5.5  5.5.25 2018-10-03 The Text-Fabric browser exports results as node lists and produces also a CONTEXT.tsv with all feature values for all nodes in the results. However, it does not contain full text representations of the nodes and it is also not possible to see in what verses the nodes occur. That has changed. The last column of CONTEXT.tsv contains the full text of a node. And there are three columns at the beginning that contain the references to the sections the node is in. For the BHSA that is the book, chapter and verse.  5.5.24 2018-09-25 BHSA app in Text-Fabric Browser: the book names on the verse pad should be the English book names. That is now in the help texts, including a link to the list of English book names.  5.5.23 2018-09-21 Problem in use of  msgCache in the search engine, which caused  fetch() to fail in some cases. Fixed.  5.5.22 2018-09-13 Fix in left-to-right displays of extra features in  pretty() displays in the BHSA.  5.5.21 2018-08-30 Bug fix in transcription.py w.r.t. to Syriac transcriptions.  5.5.20 2018-08-16 BHSA app: adjusted the color of the gloss attribute: darker.  5.5.19 2018-07-19 Fixed: when opening files for reading and writing for an export of a TF browser session: specify that the encoding is  utf8 . This is needed on those windowses where the default encoding is something else, usually  cp1252 .  5.5.18 2018-07-19 No change, only in the build script. This is a test whether after uploading to PyPi, users can upgrade without using the   no-cache-dir in their pip commands.  5.5.17 2018-07-19 The main functions in kernel and web can be passed arguments, instead that they always read from sys.argv. So that it can be used packaged apps.  5.5.16 2018-07-17 Extra option when starting up the text-fabric web interface:  -docker to let the web server listen at  0.0.0.0 instead of  localhost . So that it can be used in a Docker container.  5.5.15 2018-07-16 Extra option when starting up the text-fabric web interface:  -noweb to not start the web browser. So that it can be used in a Docker container.  5.5.13-14 2018-07-12 Better error reporting of quantified queries.  5.5.12 2018-07-11  Faster export of big csv lists.  Tweaks in the web interface.  Cleaner termination of processes.  The concept  TF data server is now called  TF kernel  5.5.8-11 2018-07-10  Better in catching out-of-memory errors.  Prevents creation of corrupt compiled binary TF data.  Prevents starting the web server if the TF kernel fails to load.  5.5.7 2018-07-09 Optimization is export from TF browser.  5.5.6 2018-07-09 Better help display.  The opened-state of help sections is remembered.  You can open help next to an other open section in the sidebar.  5.5.5 2018-07-08 Crisper icon.  5.5.4 2018-07-6 Docs updated. Little bit of refactoring.  5.5.1-3 2018-07-4 In the TF browser, use a selection of all the features when working with the BHSA. Otherwise in Windows you might run out of memory, even if you have 8GB RAM.  5.5.0 2018-07-4 Text-Fabric can download data for BHSA and Uruk. You do not have to clone github repositories for that. The data downloaded by Text-Fabric ends up in  text-fabric-data under your home directory.  5.4  5.4.5-7 2018-07-03 Experimenting with setuptools to get the text-fabric script working on Windows.  5.4.4 2018-07-02 Added renaming/duplicating of jobs and change of directory.  5.4.3 2018-06-29 Small fixes in error reporting in search.  5.4.1-2 2018-06-28 Text-Fabric browser: at export a csv file with all results is created, and also a markdown file with metadata. Small fixes.  5.4.0 2018-06-26 Improved interface and functionality of the text-fabric browser:  you can save your work  you can enter verse references and tablet P numbers  there is help  there is a side bar  ! cautions \"Docs not up to date\" The API docs are not up-to-date: there are new functions in the Bhsa and Uruk APIs. The server/kernel/client apis are not completely spelled out. However, the help for the text-fabric browser is included in the interface itself.  5.3  5.3.3 2018-06-23 Small fix: command line args for text-fabric.  5.3.0-2 2018-06-22  ! abstract \"Better process management\" When the TF web interface is started, it cleans up remnant process that might get in the way otherwise. You can also say   text-fabric -k   to kill all remnant processes, or   text-fabric -k corpus   to kill the processes for a specific corpus only.  ! abstract \"Manual node entry\" You can enter nodes manually in the TF browser. Handy for quick inspection. You can click on the sequence number to append the node tuple of that row to the tuple input field. That way you can collect interesting results.  ! abstract \"Name and Description\" You can enter a name which will be used as title and file name during export. You can enter a description in Markdown. When you export your query, the description appears formatted on top.  ! abstract \"Provenance\" If you export a query, provenance is added, using DOIs.  ! abstract \"Small fixes\" No more blank pages due to double page breaks.  5.2  5.2.1 2018-06-21  Added an  expand all checkbox in the text-fabric browser, to expand all shown rows or to collapse them.  Export function for search results in the text-fabric browser. What you see is what you get, 1 pretty display per page if you have the browser save it to pdf.  Small tweaks  5.1 2018-06-21 When displaying results in condensed mode, you can now choose the level of the container in which results are highlighted. So far it was fixed to  verse for the bhsa and  tablet for Uruk. The docs are lagging behind! But it is shown in the tutorials and you can observer it in the text-fabric browser.  5.0  5.0.1-4 2018-06-19 Addressed start-up problems.  5.0.0 2018-06-18 Built in web server and client for local query running. It is implemented for Bhsa and Uruk.  -  4  4.4  4.4.2-3 2018-06-13 New distribution method with setuptools. Text-Fabric has now dependencies on modules rpyc and bottle, because it contains a built-in TF kernel and web server. This website is still barely functional, though.  4.4.1 2018-06-10 Search API: Escapes in regular expression search was buggy and convoluted. If a feature value contains a  | then in an RE you have to enter  \\| to match it. But to have that work in a TF search, you needed to say   \\| . On the other hand, in the same case for  . instead of  | , you could just sat  \\. In the new situation you do not have to double escape in REs anymore. You can just say  \\| and  \\. .  4.4.0 2018-06-06 Search API: S.search() accepts a new optional parameter:  withContext . It triggers the output of context information for nodes in the result tuples.  4.3  4.3.4-5 2018-06-05 Search API: The  /with/ /or/ /or/ /-/ quantifier is also allowed with zero  /or/ s. Small fix in the  /with/ quantifier if there are quantifiers between this one and its parent atom.  4.3.3 2018-06-01 Search API: Improved quantifiers in search:   /where/  /have/  /without/  /with/  /or/  /-/ ;  much clearer indentation rules (no caret anymore);  better reporting by  S.study() .  4.3.2 2018-05-31 Search API:  quantifiers may use the name    to refer to their parents  you may use names in the place of atoms, which lessens the need for constructs with  p = q  stricter checks on the syntax and position of quantifiers  4.3.1 2018-05-30 Docs and metadata update  4.3.0 2018-05-30  API Change in Search. In search templates I recently added things like word vt! which checks for words that do not have a value for feature  vt . The syntax for this has now changed to word vt  Unequal ( ) in feature value conditions. Now you can say things like word vt infa|infc meaning that the value of feature is not one of  infa ,  infc . So, in addition to  = we have  for \"not equal\".  Quantifiers. You can now use quantifiers in search. One of them is like  NOTEXIST in MQL.  A number of minor fixes.  4.2  4.2.1 2018-05-25  Several improvements in the pretty display in Bhsa and Uruk APIs  Under the hood changes in  S.search() to prepare for  quantifiers in search templates.  Tokenisation of quantifiers already works  Searches can now spawn auxiliary searches without polluting intermediate data  This has been done by promoting the  S API to a factory of search engines. By deafault,  S creates and maintains a single factory, so to the user it is the same  S . But when it needs to run a query in the middle of processing another query it can just spawn another search engine to do that, without interfering with the original search.  NB: the search tutorial for the Bhsa got too big. It has thoroughly been rewritten.  4.2.0 2018-05-23 The Search API has been extended:  you can use custom sets in your query templates  you can search in shallow mode: instead of full result tuples, you just get a set of the top-level thing you mention in your template. This functionality is a precursor for [quantifiers in search templates](https: github.com/annotation/text-fabric/issues/4) but is also a powerful addition to search in its own right.  4.1  4.1.2 2018-05-17 Bhsa and Uruk APIs:  custom highlight colours also work for condensed results.  you can pass the  highlights parameter also to  show and  prettyTuple  4.1.1 2018-05-16 Bhsa API: you can customize the features that are shown in pretty displays.  4.1.0 2018-05-16 Bhsa and Uruk APIs: you can customize the highlighting of search results:  different colours for different parts of the results  you can choose your colours freely from all that CSS has to offer. See the updated search tutorials.  4.0  4.0.3 2018-05-11 No changes, just quirks in the update process to get a new version of TF out.  4.0.1 2018-05-11 Documentation updates.  4.0.0 2018-05-11  Additions to Search. You can now include the values of edges in your search templates.   F. feature .freqList() accepts a new parameter:  nodeTypes . It will restrict its results to nodes in one of the types in  nodeTypes .  You can now also do  E. feature .freqList() . It will count the number of edges if the edge is declared to be without values, or it will give a frequency list of the edges by value if the edge has values. Like  F.freqList , you can pass parameters to constrain the frequency list to certain node types. You can constrain the node types from which the edges start ( nodeTypesFrom ) and where they arrive ( nodeTypesTo ).  New documentation system based on [MkDocs](https: mkdocs.readthedocs.io/en/stable/).  -  3  3.4  3.4.12 2018-05-02 The Uruk and Bhsa APIs show the version of Text-Fabric that is being called.  3.4.11 2018-05-01 Uruk  cases are divided horizontally and vertically, alternating with their nesting level;  cases have a feature  depth now, indicating at which level of nesting they are.  3.4.8-10 2018-04-30 Various small fixes, such as:  Bhsa: Lexeme links in pretty displays.  Uruk: Prevented spurious    in NbViewer.  3.4.7 Uruk: Modified local image names  3.4.6 Small tweaks in search.  3.4.5 2018-04-28 Bhsa API:  new functions  plain() and  table() for plainly representing nodes, tuples and result lists, as opposed to the abundant representations by  pretty() and  show() .  3.4.4 2018-04-27 Uruk API:  new functions  plain() and  table() for plainly representing nodes, tuples and result lists, as opposed to the abundant representations by  pretty() and  show() .  3.4.2 2018-04-26 Better search documentation. Uruk API: small fixes.  3.4.1 2018-04-25 Bhsa API:  Search/show: you can now show results condensed: i.e. a list of passages with highlighted results is returned. This is how SHEBANQ represents the results of a query. If you have two results in the same verse, with  condensed=True you get one verse display with two highlights, with  condensed=False you get two verse displays with one highlight each. Uruk API:  Search/show: the  pretty ,  prettyTuple ,  show functions of the Bhsa API have bee translated to the Uruk API. You can now get  very pretty displays of search results.  3.4.0 2018-04-23 Search  You can use regular expressions to specify feature values in queries.  You could already search for nodes which have a non-None value for a certain feature. Now you can also search for the complement: nodes that do not have a certain feature. Bhsa API: The display of query results also works with lexeme nodes.  3.3  3.3.4 2018-04-20 Uruk API: Better height and width control for images. Leaner captions.  3.3.3 2018-04-19 Uruk API:  casesByLevel() returns case nodes in corpus order.  3.3.2 2018-04-18 Change in the Uruk api reflecting that undivided lines have no cases now (was: they had a single case with the same material as the line). Also: the feature  fullNumber on cases is now called  number , and contains the full hierarchical part leading to a case. There is an extra feature  terminal on lines and cases if they are not subdivided. Changes in Uruk and Bhsa api:  fixed a bug that occurred when working outside a GitHub repository.  3.3.1 2018-04-18 Change in the Uruk api.  casesByLevel() now takes an optional argument  terminal instead of  withChildren , with opposite values.  withChildren=False is ambiguous: will it deliver only cases that have no children (intended), or will it deliver cases and their children (understood, but not intended).  terminal=True : delivers only cases that are terminal.  terminal=False : delivers all cases at that level.  3.3.0 2018-04-14 Small fix in the bhsa api. Bumped the version number because of the inclusion of corpus specific APIs.  3.2  3.2.6 2018-04-14  Text-Fabric now contains corpus specific extras:   bhsa.py for the Hebrew Bible (BHSA)   uruk.py for the Proto-Cuneiform corpus Uruk  The  Fabric(locations=locations, modules=modules) constructor now uses  [ ] as default value for modules. Now you can use the  locations parameter on its own to specify the search paths for TF features, leaving the  modules parameter undefined, if you wish.  3.2.5 2018-03-23 Enhancement in search templates: you can now test for the presence of features. Till now, you could only test for one or more concrete values of features. So, in addition to things like word number=plural tense=yiqtol you can also say things like word number=plural tense and it will give you words in the plural that have a tense.  3.2.4 2018-03-20 The short API names  F ,  T ,  L etc. have been aliased to longer names:  Feature ,  Text ,  Locality , etc.  3.2.2 2018-02-27 Removed the sub module  uruk.py . It is better to keep corpus dependent modules in outside the TF package.  3.2.1 2018-02-26 Added a sub module  uruk.py , which contains methods to produce ATF transcriptions for nodes of certain types.  3.2.0 2018-02-19  API change Previously, the functions  L.d() and  L.u() took rank into account. In the Hebrew Bible, that means that  L.d(sentence) will not return a verse, even if the verse is contained in the sentence. This might be handy for sentences and verses, but in general this behaviour causes problems. It also disturbs the expectation that with these functions you get  all embedders and embeddees. So we have lifted this restriction. Still, the results of the  L functions have an ordering that takes into account the levels of the returned nodes.  Enhancement Previously, Text-Fabric determined the levels of node types automatically, based on the average slot-size of nodes within the node types. So books get a lower level than chapters than verses than phrases, etc. However, working with cuneiform tablets revealed that containing node types may have a smaller average size than contained node types. This happens when a container type only contains small instances of the contained type and not the bigger ones. Now you can override the computation by text-fabric by means of a key-value in the  otext feature.  3.1  3.1.5 2018-02-15 Fixed a small problem in  sectionFromNode(n) when  n is a node within a primary section but outside secondary/tertiary sections.  3.1.4 2018-02-15 Small fix in the Text API. If your data set does not have language dependent features, for section level 1 headings, such as  book@en ,  book@sw , the Text API will not break, and the plain  book feature will be taken always. We also reformatted all code with a PEP8 code formatter.  3.1.3 2018-01-29 Small adaptions in conversion from MQL to TF, it can now also convert the MQL coming from CALAP dataset (Syriac).  3.1.2 2018-01-27 Nothing changed, only the names of some variables and the text of some messages. The terminology has been made more consistent with the fabric metaphor, in particular,  grid has been replaced by  warp .  3.1.1 2017-10-21 The  exportMQL() function now generates one single enumeration type that serves for all enumeration features. That makes it possible to compare values of different enumeration features with each other, such as  ps and  prs_ps .  3.1.0 2017-10-20 The  exportMQL() function now generates enumeration types for features, if certain conditions are fulfilled. That makes it possible to query those features with the  IN relationship of MQL, like  [chapter book IN (Genesis, Exodus)] .  3.0  3.0.8 2017-10-07 When reading edges with values, also the edges without a value are taken in.  3.0.7 2017-10-07 Edges with edge values did not allow for the absence of values. Now they do.  3.0.6 2017-10-05 A major tweak in the  tf.fabric.Fabric.importMQL function so that it can handle gaps in the monad sequence. The issue arose when converting MQL for version 3 of the [BHSA](https: github.com/etcbc/bhsa). In that version there are somewhat arbitrary gaps in the monad sequence between the books of the Hebrew Bible. I transform a gapped sequence of monads into a continuous sequence of slots.  3.0.5 2017-10-05 Another little tweak in the  tf.fabric.Fabric.importMQL function so that it can handle more patterns in the MQL dump file. The issue arose when converting MQL for version 3 of the [BHSA](https: github.com/etcbc/bhsa).  3.0.4 2017-10-04 Little tweak in the  tf.fabric.Fabric.importMQL function so that it can handle more patterns in the MQL dump file. The issue arose when converting MQL for [extrabiblical](https: github.com/etcbc/extrabiblical) material.  3.0.2, 3.0.3 2017-10-03 No changes, only an update of the package metadata, to reflect that Text-Fabric has moved from [ETCBC](https: github.com/etcbc) to [Dans-labs](https: github.com/Dans-labs).  3.0.1 2017-10-02 Bug fix in reading edge features with values.  3.0.0 2017-10-02 MQL! You can now convert MQL data into a TF dataset:  tf.fabric.Fabric.importMQL . We had already  tf.fabric.Fabric.exportMQL . The consequence is that we can operate with much agility between the worlds of MQL and TF. We can start with source data in MQL, convert it to TF, combine it with other TF data sources, compute additional stuff and add it, and then finally export it as enriched MQL, so that the enriched data can be queried by MQL.  -  2  2.3  2.3.15 2017-09-29 Completion: TF defines the concept of edges that carry a value. But so far we have not used them. It turned out that it was impossible to let TF know that an edge carries values, when saving data as a new feature. Now it is possible.  2.3.14 2017-09-29 Bug fix: it was not possible to get  T.nodeFromSection '2_Chronicles', 36, 23  , the last verse in the Bible. This is the consequence of a bug in precomputing the sections sections. The preparation step used   range(firstVerse, lastVerse)   somewhere, which should of course have been   range(firstVerse, lastVerse + 1)    2.3.13 2017-09-28 Loading TF was not completely silent if  silent=True was passed. Better now.  2.3.12 2017-09-18  Small fix in TF.save(). The spec says that the metadata under the empty key will be inserted into all features, but in fact this did not happen. Instead it was used as a default when some feature did not have metadata specified. From now on, that metadata will spread through all features.  New API function explore, to get a list of all known features in a dataset.  2.3.11 2017-09-18  Small fix in Search: the implementation of the relation operator    (disjoint slot sets) was faulty. Repaired.  The [search tutorial](https: github.com/annotation/text-fabric/blob/master/docs/searchTutorial.ipynb) got an extra example: how to look for gaps. Gaps are not a primitive in the TF search language. Yet the language turns out to be powerful enough to look for gaps. This answers a question by Cody Kingham.  2.3.10 2017-08-24 When defining text formats in the  otext.tf feature, you can now include newlines and tabs in the formats. Enter them as  \\n and  \\t .  2.3.9 2017-07-24 TF has a list of default locations to look for data sources:  ~/Downloads ,  ~/github , etc. Now  ~/Dropbox has been added to that list.  2.3.8 2017-07-24 The section levels (book, chapter, verse) were supposed to be customizable through the otext feature. But in fact, up till version 2.3.7 this did not work. From now on the names of the section types and the features that name/number them, are given in the  otext feature. It is still the case that exactly three levels must be specified, otherwise it does not work.  2.3.7 2017-05-12 Fixes. Added an extra default location for looking for text-fabric-data sources, for the benefit of running text-fabric within a shared notebook service.  2.3.5-6 2017-03-01 Bug fix in Search. Spotted by Cody Kingham. Relational operators between atoms in the template got discarded after an outdent.  2.3.4 2017-02-12 Also the  Fabric() call can be made silent now.  2.3.3 2017-02-11 Improvements:  you can load features more silently. See  TF.load() ;  you can search more silently. See  S.study() ;  you can search more concisely. See the new  S.search() ;  when fetching results, the  amount parameter of  S.fetch() has been renamed to  limit ;  the tutorial notebooks (see links on top) have been updated.  2.3.2 2017-02-03 Bug fix: the results of  F.feature.s() ,  E.feature.f() , and  E.features.t() are now all tuples. They were a mixture of tuples and lists.  2.3.1 2017-01-23 Bug fix: when searching simple queries with only one query node, the result nodes were delivered as integers, instead of 1-tuples of integers.  2.3.0 2017-01-13 We start archiving releases of Text-Fabric at [Zenodo](https: zenodo.org).  2.2  2.2.1 2017-01-09 Small fixes.  2.2.0 2017-01-06  New: sortKey The API has a new member:  sortKey New relationships in templates:  nearness . See for examples the end of the [searchTutorial](https: github.com/annotation/text-fabric/blob/master/docs/searchTutorial.ipynb). Thanks to James Cu\u00e9nod for requesting nearness operators.  Fixes  in  S.glean() word nodes were not printed;  the check whether the search graph consists of a single connected component did not handle the case of one node without edges well;  2.1  2.1.3 2017-01-04 Various fixes.  2.1.0 2017-01-04  New: relations Some relations have been added to search templates:   =: and  := and    :  start at same slot ,  end at same slot ,  start at same slot and end at same slot     :  adjacent before and  adjacent next . The latter two can also be used through the  L -api:  L.p() and  L.n() . The data that feeds them is precomputed and available as  C.boundary .  New: enhanced search templates You can now easily make extra constraints in search templates without naming atoms. See the [searchTutorial](https: github.com/annotation/text-fabric/blob/master/docs/searchTutorial.ipynb) for an updated exposition on searching.  2.0  2.0.0 2016-12-23  New: Search ![warmXmas]( /images/warmXmas.jpg)  Want to feel cosy with Christmas? Put your laptop on your lap, update Text-Fabric, and start playing with search. Your laptop will spin itself warm with your queries! Text-Fabric just got a powerful search facility, based on (graph)-templates. It is still very fresh, and more experimentation will be needed. Feedback is welcome. Start with the [tutorial](https: github.com/annotation/text-fabric/blob/master/docs/searchTutorial.ipynb). The implementation of this search engine can be nicely explained with a textile metaphor: spinning wool into yarn and then stitching the yarns together. That will be explained further in a document that I'll love to write during Xmas.  -  1  1.2  1.2.7 2016-12-14  New  F.otype.sInterval()  1.2.6 2016-12-14  bug fix There was an error in computing the order of nodes. One of the consequences was that objects that occupy the same slots were not ordered properly. And that had as consequence that you could not go up from words in one-word phrases to their containing phrase. It has been remedied.  ! note Your computed data needs to be refreshed. This can be done by calling a new function  TF.clearCache() . When you use TF after this, you will see it working quite hard to recompute a bunch of data.  1.2.5 2016-12-13 Documentation update  1.2.0 2016-12-08  ! note Data update needed  New  Frequency lists   F.feature.freqList() : get a sorted frequency list for any feature. Handy as a first step in exploring a feature.  Export to MQL   TF.exportMQL() : export a whole dataset as a MQL database. Including all modules that you have loaded with it.  Changed The slot numbers start at 0, no longer at 1. Personally I prefer the zero starting point, but Emdros insists on positive monads and objects ids. Most important is that users do not have to add/subtract one from the numbers they see in TF if they want to use it in MQL and vice versa. Because of this you need to update your data too:   cd ~/github/text-fabric-data git pull origin master  "
},
{
"ref":"tf.about.datasharing",
"url":59,
"doc":" Data sharing express guide Text-Fabric is an analytical tool to process corpus data. But it can also help you to transform the insights gained into new data: new features, that you can save in TF format and share with others. Text-Fabric supports the flow of creating research data, packaging it, distributing it, and importing in apps.  Zipping your new data There is a command   text-fabric-zip   to make a distribution of your own features. For an example of all the steps of data sharing, see the [share](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/share.ipynb) tutorial.  Using new data The  text-fabric command has several optional command line arguments:  mod= . By means of these arguments you can load extra features, either from your own system, or from GitHub/GitLab:   text-fabric bhsa  mod=etcbc/valence/tf   or, if the module resides at a different backend than the main data:   text-fabric bhsa  mod= yourgroup/yourrepo/tf   See the incantation in  tf.about.usefunc .  Using old data and apps It is even possible to go back to earlier versions of the data and apps, which might be needed if you want to reproduce results obtained with those versions. For app and data, you can add specifiers to point to a specific release or commit. Read more about your data life-cycle under [use data]( use-data).  Custom sets You can create custom sets of nodes, give them a name, and use those names in search templates. The TF browser can import those sets, so that you can use such queries in the browser too.   text-fabric appname  sets=filePath   Read more in  tf.about.browser .  Data sharing in depth  Assumptions The data sharing workflow is built around the following assumptions: main corpus : You work with a main corpus (it is not necessary anymore that a corpus app exists for the main corpus). The TF features of the corpus must be versioned, i.e. they must sit in a subdirectory named after the version. versioned tf data : The data you share consists of a set of TF features, tied to a specific  version of the main corpus, preferably the most recent version. The new features must sit in a directory named after the version of the main corpus they correspond to. local GitHub or GitLab : The data you share must reside in a directory on your hard drive. The convention is, that you have a directory  github and or  gitlab under your home directory. And inside that you have directories for organizations or people first, and then repositories, exactly as the online GitHub/GitLab is organized. Your own data should be in such a repo as well, e.g.  ch-jensen/participants/actor/tf or  etcbc/lingo/heads/tf or  annotation/banks/sim/tf synchronized with the backend : You must have your local repo contents synchronized with that on the GitHub/GitLab backend. Now other people can use your data. Whenever you push updates, users may fetch the updated data, depending on how they call up your data, see below. released on GitHub/GitLab : If your data is reasonably stable, consider making an official  release on GitHub/GitLab.  ! hint \"Zip the data\" Attach your features as a zip file to that release. Text-Fabric has a command to produce a zip file with exactly the right structure and name. This is especially useful for GitHub, where it speeds up the download process for your data users. On GitLab it does not make a difference, and you can safely omit this step. Consider to connect your repo with [Zenodo](https: zenodo.org). Then every time to make a release, your repo will be archived for the long term, and you get a DOI pointing to the released version. get data : In order to get data, the only thing Text-Fabric needs to know, is a string with the organisation or person, the repository, and the path within the repository up to the parent of the subdirectories corresponding corresponding to the versions of the features.  ! example \"Module specs do not contain versions\" In the  bhsa repository if the  etcbc organization, there is a directory  tf under which you see direcories  2021 ,  2017 ,  c , etc. which contain TF feature files. In order to get these features, your module specififer is  etcbc/bhsa/tf . Based on the string  {org}/{repo}/{path} it will find the online repository, check the latest release, find the zip file, download and expand it to your local ~/text-fabric/data/{org}/{repo}/{path} If there are no releases, it will find the latest commit and use the data from there. But you may go back in the history, see below. everywhere : The extra data is accessible whether you work in a Jupyter notebook, or in the Text-Fabric browser. The extra features are clearly listed after the incantation in a notebook, and they show up in the pretty displays in the TF browser. And when you export data from the TF browser, all data modules are reported in the provenance section.  Step by step When you develop your own data features, you'll probably make many changes before you take the trouble of publishing them as a zip file attached to a release/ Here we describe the easiest workflow to work with your developing data with a view to share it much less often than you modify it.  Produce in your local GitHub/GitLab folder You probably have a program or notebook that synthesizes a bunch of new features. It is a good idea to have that program in a version control system, and publish it on GitHub/GitLab, in a repository of your choice. Set up that program in such a way, that your features end up in the same repository, in a folder of your choosing, but directly under a folder that corresponds with the version of the main data source against which you are building your data. Currently, your features only live on your computer, in your local github folder. You may or may not commit your local changes to the online GitHub/GitLab. But you do not want to create a new release and attach your zipped feature data to it yet. We use the existing [annotation/banks/tf](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/programs/convert.ipynb) data as an example. We assume you have this data locally, in   ~/github/annotation/banks/tf   under which there are versions such as  0.2 , which contain the actual  .tf files. We are going to develop the  sim feature, in   ~/github/annotation/banks/sim/tf    Test the features When you want to load the new features, you can use the  mod parameter:   use(\"annotation/banks\", mod=f\"annotation/banks/sim/tf\")   But TF then tries to download it from GitHub, or look it up from your  ~/text-fabric-data . Both will fail, especially when you let TF manage your  ~/text-fabric-data directory. You have to pass  clone as the checkout option:   use(\"annotation/banks\", mod=f\"annotation/banks/sim/tf:clone\")   The  clone option means: use local data under  ~/github . With this set, TF looks in the right place inside your  ~/github directory. It will not go online, and not look into  ~/text-fabric-data .  Commit and push your features When the time comes to share your new feature data, everything is already in place to do that.  ! caution \"Write access\" You can only do the following steps for repositories for which you have write access, so do not try to perform this on  annotation/banks but use a repo of your own. On the command line, go to the directory of your repository, and say   git add  all . git commit -m \"data update or whatever\" git push origin master   and then your data is shared in the most basic way possible. But very effectively. From now on, other users (and you too) can use that data by passing just the switch   use(\"annotation/banks\", mod=f\"annotation/banks/sim/tf\")   without the  clone option. If you do this, you get a freshly downloaded copy of your features in your  ~/text-fabric-data directory. And every time you do this again, the downloaded data is ready to use. If you want to make sure that you have the most recent stable release of that data, you may say   use(\"annotation/banks\", mod=f\"annotation/banks/sim/tf:latest\")   and then check for updates will be performed and if there is a newer release, it will be downloaded.  Make a release If you want to single out a certain commit as stable data and give it a version number, go to your repo on GitHub, click the releases link, and make a new release. If your repo is on GitLab, it may be a bit more difficult to make a release. Follow the instructions found on GitLab. ![releases]( /images/add-releases.png) Then click  Draft a new release ![releases]( /images/add-draft.png) Fill in the details, especially the release version (something like  0.2 , or  v0.2 ), although nothing in the workflow depends on the exact form of the version number; you will see the release version in the provenance, though. Click the button  Publish release . Now your data is available to others. The users of your data can refer to that copy by means of the version number:   use(\"annotation/banks\", mod=f\"annotation/banks/sim/tf:0.2\")    Package into zip files If you share many features, or a whole TF dataset, it is more economical to zip that data and attach it as a binary to the release. It is vitally important for the TF workflows that that zip file has the right name and the right structure. Text-Fabric comes with a command to create that zip file for you. Execute the following command in your terminal:   text-fabric-zip annotation/banks/tf   You'll see   Create release data for annotation/banks/tf Found 2 versions zip files end up in /Users/dirk/Downloads/annotation-release/banks zipping annotation/banks 0.1 with 10 features  > tf-0.1.zip zipping annotation/banks 0.2 with 10 features  > tf-0.2.zip   and as a result you have this in your Downloads folder   ~/Downloads/github/annotation-release/banks: tf-0.1.zip tf-0.2.zip   Attach these versions, or just the newest version, to the release and publish the release. ![releases]( /images/add-attach.png) Zip your data with the  text-fabric-zip command as explained above. It will look into your local github directory, pickup the features from there, zip them, and put the zip files in your Downloads folder. Then you can pick that zip file up and attach it manually to a new release of your repository on the online GitHub/GitLab.  Continue developing your features Probably you'll make changes to your features after having published them. Then you have the cutting edge version of your features in your local github directory, and the published version in your text-fabric-data directory. When you make new commits, users that call up your data in the standard way, will still get the latest stable release. But users that say   use(\"annotation/banks\", mod=f\"annotation/banks/sim/tf:hot\")   will get your cutting edge latest commit.  Use data Now we are just reading data, so the following steps you can perform literally, without fear of overwriting data.  Check it out! When calling up data and a corpus app, you can go back in history: to previous releases and previous commits, using a  checkout parameter. You have already seen it, and here we spell them out in greater detail. You can specify the checkout parameter separately for  the corpus app code (so you can go back to previous instantiations of the corpus app)  the main data of the app plus its standard data modules  every data-module that you include by means of the   mod= parameter. The values of the checkout parameters tell you to use data that is:   clone : locally present under  ~/github in the appropriate place   local : locally present under  ~/text-fabric-data in the appropriate place   latest : from the latest online release   hot : from the latest online commit     : (default): from your local copy, but if there is no local copy, from the latest online release, or if there are no releases, from the latest online commit   2387abc78f9de . : a concrete commit hash found on GitHub/GitLab (under Commits)   v1.3 : a release tag found on GitHub/GitLab (under Releases) You pass the checkout values as follows:  For the corpus app:  after the app name :  bhsa:clone ,  oldbabylonian:local ,  quran . If you leave it out, it defaults to the empty string: local copy or latest release or commit.  For the main data and standard data modules of the app:  in the  checkout parameter :  checkout=\"clone\" ,  checkout=\"local\" ,  checkout=  . If you omit  checkout out, it defaults to the empty string: latest release or commit. If you need a different checkout specifier for the main data and the standard modules, you can pass the standard modules explicitly to the  mod= parameter of the  use() command and give them the specifiers you need.  For the data that you call up as a module:  after the module name :  annotation/banks/sim/tf:clone ,  annotation/banks/sim/tf:local ,  annotation/banks/sim/tf . If you leave it out, it defaults to the empty string: latest release or commit. The checkout parameter can be used in the  use() function when you call up Text-Fabric in a program (or notebook) and when you call up the text-fabric browser on the command line: (in a program)   use(\"annotation/banks:clone\", checkout=\"latest\", mod=\"annotation/banks/sim/tf:hot\")   (on the command line)   text-fabric banks:clone  checkout=latest  mod=annotation/banks/sim/tf:hot   Note that you can pass different specifiers for the distinct portions of data and code that you want to use. To see it in action, consult the [repo](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/tutorial/repo.ipynb) notebook.  More about using data modules Suppose you have called up a data module: (in a program)   A = use(\"annotation/banks\", mod=\"annotation/banks/sim/tf\")   (on the command line)   text-fabric banks  mod=annotation/banks/sim/tf   You can then use the features of the module in everywhere. Fill out this query:   word letters~th -sim=100> word   and expand a result: The display looks like this: ![sense]( /images/add-sim.png) And if you export the data, the extra module is listed in the provenance. ![sense]( /images/add-sim-prov.png)  More modules at the same time Now that we get the hang of it, we would like to use multiple modules added to a main data source. This we do for the [BHSA](https: github.com/etcbc/bhsa) in the [share](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/share.ipynb) tutorial."
},
{
"ref":"tf.about.use",
"url":60,
"doc":" Usage You can work with the TF-browser or with the TF-API. In both cases, the data will be automatically downloaded.  TF-browser The basic command to start the TF-browser ( tf.about.browser ) is:  sh text-fabric org/repo   (More details in  tf.server.start ). Then your browser will open and there you'll find links to further help. ![tfbrowser]( /images/tfbrowser.png)  On Windows: You can click the Start Menu, and type the command in the search box, and then Enter.  On Linux or Macos: You can open a terminal, and type the command there.  In your own programs  python from tf.app import use A = use(\"org/repo\")   This  A is your handle to the advanced API functions ( tf.advanced ). (More details in  tf.about.usefunc ).  Search templates Text-Fabric has a templates-based search engine ( tf.about.searchusage ) which follows closely the features of the annotations to the corpus. (Uruk)   tablet catalogId=P448702 line case terminal=1 number=2a sign type=ideograph :> sign type=numeral   (Bhsa)   clause /where/ phrase function=Pred /have/ /without/ word sp verb /-/ /-/ phrase function=Subj   (Quran)   query =  '\\n\", aya\\n\", word pos=verb <: word pos=noun posx=proper root=Alh    Text-Fabric API Beyond searching, you can program your own analytical methods. You can \"talk\" to your corpus through the high-level API ( tf.advanced ) dedicated to your corpus which can download its data and display its material. You can use it together with the core API ( tf.core ) to  search your corpus programmatically by means of the same templates,  prepare derived data for analysis in R, and  create new data and distribute it to others."
},
{
"ref":"tf.about.variants",
"url":61,
"doc":" Sentence boundaries in textual variants The TEI guidelines describe an element    for the encoding of textual variants. For a short overview see the [Critical Apparatus Module](https: www.tei-c.org/release/doc/tei-p5-doc/en/html/examples-lem.html TC). This module is for dealing with a corpus encoded in TEI with app-, lem-, and rdg-elements. Especially when you want to turn material between boundaries into nodes. Think of sentences. If sentence boundaries are present, either implicitly as full stops, or explicitly as milestones or processing instructions, this module helps you to generate nodes for the material between the boundaries, even in the presence of textual variants. It solves the problem that arises when sentence boundaries are different in different variants. The solution is to wrap sentences that are partly subject to variation into sentence nodes that are specific to each witness. When we try to do this in XML, the problem becomes utterly hard. However, in the Text-Fabric context there is no obligation to put the sentences in a single tree hierarchy. We have to make sentence nodes such that:  all textual material in all variants is properly assigned to sentence nodes;  for each witness, the text is neatly contained in sentences; each such sentence;  is either a base sentence when the witness agrees completely with the base text  is a witness dependent sentence if part of it disagrees with the base text;  sentences are economical: we want as few variant-dependent sentence nodes as possible. We describe how to use this module in the context of a  tf.convert.walker conversion. After that we will explain in detail what problem it solves, what the result looks like, and how the algorithm performs it steps.  Usage This module is to be used in the context of a  tf.convert.walker conversion. It can be imported as  python from tf.convert.variants import Variants   It should be initialized in the  director() function. It needs a storage dictionary in which it stores relevant imformation. Typically this dict is called  cur and it should be initialized before:  python def director(cv): cur = {} variants = Variants( cv, cur, BASE_WITNESS, SENTENCE, addWarning, addError, )   The node type of the \"sentence\" nodes can be customized, so you can use this module to insert any kind of node based on their boundary information. The name of the base text can also be customised. Usually it is  base , but if one of the witnesses is also called  base , you should pass another name. For more information, see  tf.convert.variants.Variants .  Explanation First we sketch what the result will look like, then we describe the algorithm to achieve that result, and finally we explain how you can invoke the Python module that implements the algorithm.  The app element The    element with its subelements    and    describe textual variants.  xml base text (all witnesses)   base text (not in a b c d)   base text (not in a b c d e f g h)  variant text (in e f)  variant text (in g h)  base text (not in a b c d)   variant text (in a b)  variant text (in c d)  base text (all witnesses)   It is assumed that text outside any app-element is the base text, as well as the content of the lem-elements. The material in the rdg-elements (reading groups) are variants on their sister lem-element. Each reading group specifies in its  wit= attribute which witnesses contain that variant. The base text in the lem-element is witnessed by all witnesses, except those that are mentioned in its sister rdg elements. Lem-elements can contain app-elements in turn. That means that a part of the outer lem-element is itself subject to additional variation, contained in the inner rdg elements. The base text in the inner lem element is witnessed by all witnesses, except those mentioned in its sister rdg-elements, and in its  aunt rdg-elements (and great-(great-) aunt elements,  .). See the following picture. ![]( /images/variants/app.png) In the sequel we will use pictures like this a lot, so here are some points to remember:  a coloured area represent an app element  its top black bar is the content of the lem-element  which may be partly contained in the lem-element of a nested app element  the grey bars below are the content of the rdg-elements  the black bars represent the base text;  labels start with  - and indicate the witnesses that do  not support the base text;  the grey bars represent the variant texts;  labels indicate the witnesses that support the variant in question  the numbers represent textual positions (slots), in the order in which they occur in the source file.  this is also the reading order of the base text if you skip the variants  and it is the reading order of each witness, if you follow the base text except for app-elements that have an rdg with this witness in its wit attribute.  From boundaries to nodes Suppose you want to encode sentences. You could start by marking sentence boundaries at every  . that has the function of full stop. We do not deal with the non-trivial problem of detecting sentence boundaries here. They might have been assigned by hand and encoded as milestones or processing instructions, or they might have been found by applying some heuristic guidelines of more or lesser quality. We assume that all sentence boundaries have been found.  The problem The problem arises when we want to define sentence nodes based on the sentence boundaries. Because a sentence can start in the base text, and end in different variants in different ways. Or a sentence that ends in the base text may have started in different ways in different variants. Or any combination of these phenomena may occur. When that happens, we want to generate multiple nodes for the sentence , one for each witness. But we do not want to duplicate the words in those sentences. Here is a diagram that shows the problem in its generic complexity. ![]( /images/variants/problem.png) We see nested app elements with intricate variations. Here is what to look for:  there is an unequal number of sentence boundaries between the base text and its variants; this happens in the outer app and in each of the two inner apps  the variants are divided over sets of witnesses in each app, but the two inner apps have incompatible sets of witnesses in their variants: the first one has a variant for witnesses  a and  b , while the second one has a variant for witnesses  b and  c  there is  no sentence boundary between the two inner apps. So unfinished sentences from the left inner app continue through the base text to the right inner app, where they may or may not be terminated in either the base text or in a variant  look at variant  g :  it shows up in the left inner app, where it continues the sentence started in the base text at slot  5  in the left inner app, the variant is also witnessed by  f  it is not finished in the left inner app but continues through the base text in slots  28-33  then it enters the right inner app, in a variant that is no longer witnessed by  f , but by  h instead  it is not finished in the right inner app, but continues through the base text from slot  53 till  55 , where it is terminated.  All in all, this particular sentence in  g has the slots  5-7, 22-27, 28-33, 47-52, 53-55  look at the sentence in variant  f :  like the one in  g it has the piece  5-7 in the base text  and also the piece  22-27 in a variant shared with  g  from where it continues with  28-33 in the base text  but in the right inner app there is no variant for witness  f , so here  f follows the base text, which terminates the sentence at the end of piece  34-35 . Hopefully, this builds some intuition how sentences run through witnesses.  The resulting nodes When we follow the reasoning above for all sentences and witnesses, we get this end result. You see all slots in the text, organized by witness. Each horizontal row represent a witness, the top row represents the base text. Not all slots belong to all witnesses, hence many sentence nodes will have gaps, but that is not a problem for Text-Fabric. We have dealt with gaps extensively in the Hebrew Bible, see the [gaps tutorial](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/searchGaps.ipynb). ![]( /images/variants/result.png)  the base text and each individual witness will get their own, separate set of sentence nodes  triangles open and close sentence nodes  rhombes close a sentence node and open the next one  half circles suspend and resume sentence nodes Let's walk through the diagram to see where all the sentence nodes start, are suspended, resumed, and finally end. When doing so, we will encounter steps that will be not trivial to perform, a fact that we have to solve in our algorithm. The points where this happens are marked by a dotted border around triangles or rhombes. We are not there yet, so the following steps are not yet the algorithm, but just a description of the result. However, at the bottom we display a stack will values that will help the algorithm later on.   1 : the start of a sentence node in the base text. It is also the start of sentences in witness  d and  e , because these witnesses will continue this part of the sentence in different ways than the main text.  It is a challenge for the algorithm to find the starting point for variant sentences.   4 : the start of the outer app where there are variants for witnesses  d and  e , but first we encounter the lem-element where the base text continues, and hence the first sentence continues without interruption   5 : stil in the lem-element, the first sentence in the base text terminates, and a new one is started. It appears that this is also the point where several sentences in the individual witnesses must start. For example, in the left inner app there is a variant in witnesses  a and  b that has a sentence boundary, at  17 . If you travel back from there along the text of  a and  b , you see that here at  5 is the corresponding sentence boundary. Likewise, you'll see that in  f and  g there must also start a sentence here.  This is a challenge for the algorithm later .   7 : the left inner app looms, in which the base text continues in its lem-element. Once in that element, we will have base text that does not occur in the witnesses  a b f g . So the sentences in those witnesses that have already started, must be suspended at this point. Hence those half circles.   8 : inside the inner lem-element the second sentence of the base text continues.   10 : the second base text sentence ends, and the third one is started. It also appears that we must start a sentence in witness  c here. That is because of the boundary at  42 , where variants  b and  c have a sentence boundary. This boundary is the for witness  c the first witness-specific boundary. Likewise, a sentence in witness  h starts here, because there appears to be a variant for  g and  h with a running sentence at  47 .  The algorithm needs to extricate individual witnesses out of the variants that are shared by multiple witnesses.   12 : the lem-element in the left inner app ends, and all running sentences at this point must be suspended, which are the third base text sentence and the running sentences in  c and  h .   13 : we dive in the variant witnessed by  a and  b . The running sentences in these witnesses can be resumed.   17 : a sentence break in this variant. The running sentences in  a and  b are terminated, and new ones are started.   21 : end of this variant, we suspend the running sentences in  a and  b   22 : we dive in the variant of witnesses  f and  g and resume their running sentences.   27 : end of this variant, we suspend the running sentences in  f and  g   28 : back in the base text we resume all suspended sentences. Note that this includes all sentences of the rdg elements that are now closed, because they are not yet finished, they will be finished by a later sentence break.   33 : the right inner app looms, the base text continues, so all running sentences can continue, except the ones that are taken up in the rdg elements of the app. That is why we have to suspend  b ,  c ,  g , and  h .   34 : the base text continues in the lem element of the right inner app. Running sentences in all witnesses except the ones mentioned in the rdg elements can continue, which are sentences in  a and  f .   35 : a sentence boundary. The running sentence in the base text is terminated and a new one started. The running sentences in  a and  f are terminated as well, since  a and  f agree with the base text here. For the same reason, no new  a and  f sentences are opened here, observing the fact that there is no further material specific to  a and  f before the next sentence break in the base text.   37 : the lem-element in the right inner app ends, and all running sentences are suspended, which is only the current sentence in the base text.   38 : we dive in the variant witnessed by  b and  c and resume running sentences in these witnessed.  Note that in  c we have a running sentence that triggered the creation of the sentence already at slot  10 .   42 : a sentence break in this variant. The running sentences in  b and  c are terminated, and new ones are started.   46 : end of this variant, we suspend the running sentences in  b and  c   47 : we dive in the variant witnessed by  g and  h and resume their running sentences.  Note that in  h we have a running sentence that triggered the creation of the sentence already at slot  10 .   52 : end of this variant, we suspend the running sentences in  g and  h   53 : back from the inner app in the base text we resume all suspended sentences. Note that this includes all sentences of the rdg elements that are now closed, because they are not yet finished, they will be finished by a later sentence break.   55 : a sentence boundary. The running sentence in the base text is terminated and a new one started. The running sentences in  b ,  g ,  c and  h are terminated as well, since these witnesses agree with the base text here. For the same reason, no new witness-bound sentences are opened here.   58 : now we are about to end the lem-element of the outer app. We suspend the running sentence in the base text   59 : we dive in the variant witnessed by  d and resume its running sentence.   64 : this variant ends and we suspend the sentence in  d since it is not yet finished.   65 : we dive in the variant witnessed by  e and resume its running sentence.   68 : a sentence break in this variant. The running sentence in  e is terminated, and a new one started.   70 : this variant ends and we suspend the sentence in  e since it is not yet finished.   71 : back to the main text, outside all app elements. We resume the running sentence in the base text, and the suspended left overs in the variants for  d and  e .   75 : a sentence break in the main text. All running sentences can be terminated now.  Processing      At this point we understand what sentence division means in the presence of variant texts. We know that for each individual witness we have to make sentence nodes for each sentence of which a part differs from the main text. The problem is that the app-lem-rdg-elements neatly wrap themselves around the differences, but that the sentences in which these differences are contained may spread outside these elements. This spreading may extend over multiple other app elements, which can also be nested. When we process the text from left to right, we encounter locations where we have to insert witness-dependent sentence starts before we have seen any hint of the presence of that witness. We solve that problem as follows: 1. in a first, preparatory pass, we walk through the complete text and collect for each app-element the witnesses dat occur in its rdg elements 1. in the second, node-generating pass, we know, upon entering an app element, which are the witnesses of its variants in the rdg elements. 1. if we start processing an rdg element, there are several cases: 1. the content starts with a new sentence: no problem, we generate a new sentence node for the witnesses of that rdg on the spot 1. the content starts in the middle of a sentence: 1. we have seen that witness before: that means there is currently a suspended sentence in that witness, and we resume it on the spot 1. we have not seen that witness before: that means the following sentence part continues a sentence in the base text that was suspended just before this app-element started: we make a copy of that suspended sentence node for this witness. The last case is possible if we remember the last suspended sentence part in front of each app-element. Because app-elements can be nested, we remember these fragments on a corresponding stack. This stack is exactly what you see at the bottom of the diagram above. Whenever we enter an app-element, we push the positions of the last base sentence leading to that app on the stack. Whenever we leave an app, we pop the stack. Whenever we start a new rdg element, we use the value on the top of the stack when we have to create a new sentence node for the witnesses in that rdg. We also need to remember the current sentence fragments that are in progress. The only thing we need is for each witness the node that is in progress. With this information in hand we are able to make every decision we need to make with the information that is accessible at the moment that the decision is required.  Walker conversion The context of the algorithm is the  walker conversion by which we issue node-creation statements and where slots are automatically added to all current nodes that are not yet terminated. See  tf.convert.walker . Because of this environment we can now specify the information that we maintain while walking through the TEI source.  Implementation Here we describe how the algorithm is implemented within the walker conversion framework.  Creating, terminating, resuming nodes We create a sentence node by issuing a statement   s = cv.node(\"sentence\")   If it belongs to the base text, we give it a  wit attribute with a standard value:   cv.feature(s, wit=\"base\")   If the node is witness dependent, we give it the feature  wit with the name of the witness as value, e.g. for witness  a :   cv.feature(s, wit=\"a\")   Now the sentence node  s is open, new slots are automatically linked to  s . But we must remember that  s is a currently active sentence for witness  a . We assume that we have a big dictionary  cur in which we have a subdictionary  cur[\"variantssentence\"] in which we can store this information:   cur[\"variantssentence\"][\"a\"] = s   And so we do for all witnesses in which we build sentences. We also do it for the base text, which we remember as   cur[\"variantssentence\"][\"base\"] = s   If the rdg that contains witness  a comes to an end, we end this sentence  s :   cv.terminate(s)   As far as the walker machinery is concerned, the  s is now terminated. Now, if the rdg ended with an unfinished sentence, we keep  s in  cur[\"sentence\"][\"a\"] so that we can resume  s when needed. That will happen when we enter an later rdg for which  a is a witness, or when we return to the base text before having passed a sentence boundary. In those cases we do   cv.resume(s)   If we encounter a sentence boundary at the end of an rdg element for witness  a , we terminate  s and we remove  cur[\"sentence\"][\"a\"] , so that this sentence node will not be resumed later.  The stack For each app-element, we must remember the sentence in the base text that leads to the start of this app or rather which slots that sentence contains. Because, whenever we enter one of its  rdg elements, and that element starts with an unfinished sentence, it is a continuation of that leading sentence. Because apps are nested, we remember these values on a stack. If we are outside any app-element, the stack is empty.   cur[\"appstack\"] = []   When we encounter an  app element, we add a new value on the stack. We retrieve the current sentence in the base text, and find out which slots have been linked to that sentence so far. It goes as follows:   n = cur[\"variantssentence\"][ ] slots = cv.linked(n) cur[\"appstack\"].append(slots)   And whenever we encounter an rdg whose material must be prepended with these slots, it works as follows:   w = cv.node(\"sentence\") cv.feature(w, wit=\"a\") slots = cur[\"appstack\"][-1] cv.link(w, slots)   When we have finished the last rdg of an app, we leave the app and do   cur[\"appstack\"].pop()   This solves the problem of having to create witness dependent nodes before we can know that we have to do so. We postpone the creation of such nodes until the moment that we are confronted with the witness for the the first time, and at that moment we link exactly the right slots to that node in one go, before we rely on the automatic slot-linking machinery of the walker conversion."
},
{
"ref":"tf.about.datamodel",
"url":62,
"doc":" Text-Fabric Data Model > Everything about us, everything around us, everything we know and can know of > is composed ultimately of patterns of nothing; > that\u2019s the bottom line, the final truth. > So where we find we have any control over those patterns, > why not make the most elegant ones, the most enjoyable and good ones, > in our own terms? > >   Iain M. Banks . [Consider Phlebas](https: read.amazon.com/kp/kshare?asin=B002TXZRQI&id=NpPGzf_HT5aADabyiDDSIQ&reshareId=RZ91SGMZJPWK9S1Y4EZX&reshareChannel=system): A Culture Novel (Culture series)  At a glance Take a text, put a grid around the words, and then leave out the words. What is left, are the textual positions, or  slots . ![Slots]( /images/DataModel/DataModel.001.png) Pieces of text correspond to phrases, clauses, sentences, verses, chapters, books. Draw circles around those pieces, and then leave out their contents. What is left, are the textual objects, or  nodes . ![Nodes]( /images/DataModel/DataModel.002.png) Nodes can be connected to other nodes by  edges . A basic function of edges is to indicate  containment :  this node corresponds to a set of slots that is contained in the slots of  that node. But edges can also denote more abstract, linguistic relations between nodes. Nodes have types. Types are just a label that we use to make distinctions between word nodes, phrase nodes,  ., book nodes. The type assignment is an example of a  feature of nodes: a mapping that assigns a piece of information to each node. This type assignment has a name:  otype , and every Text-Fabric dataset has such a feature. Nodes may be linked to textual positions or  slots . Some nodes are linked to a single slot, others to a set of slots, and yet others to no slots at all. Nodes of the first kind are identified with their slots, they have the same number as slot as they have as node. Nodes of the second kind have an edge to every slot (which is also a node) that they are linked to. The collection of these edges from nodes of the second kind to nodes of the first kind, is an example of a  feature of edges: a mapping that assigns to each pair of nodes a boolean value: is this pair a link or not? This particular edge feature is called  oslots , and every Text-Fabric dataset has such a feature. Nodes of the third kind represent information that is not part of the main body of text. We could represent the lexicon in this way. However, it is also possible to consider  lexeme as a node type, where every lexeme node is linked to the set of slots that have an occurrence of that lexeme.  Fabric metaphor ![Loom]( /images/loom.png) [AD 1425 Hausb\u00fccher der N\u00fcrnberger Zw\u00f6lfbr\u00fcderstiftungen](http: www.nuernberger-hausbuecher.de/75-Amb-2-317-4-v/data) Before we go on, we invite you to look at a few basic terms in the craft of [weaving](https: en.wikipedia.org/wiki/Weaving). A weaver sets up a set of fixed, parallel threads, the  warp . He then picks a thread, usually a colourful one, and sends it in a perpendicular way through the warp. This thread is called the  weft . ![Warp]( /images/warp.png) The instrument that carries the wefts through the warp is called the  loom . The weaver continues operating the loom, back and forth, occasionally selecting new wefts, until he has completed a rectangular piece of fabric, the  weave . ![Weave]( /images/weave.png) [source](https: sew4home.com/tips-resources/buying-guide/all-about-fabric-weaves-tutorial) Now Text-Fabric, the tool, can be seen as the loom that sends features (the wefts) through a warp (the system of nodes and edges). The features  otype and  oslots are the ones that set up the system of nodes and edges. That's why we call them  warp features. Every Text-Fabric dataset contains these two warp features. (Later on we'll see a third member of the warp,  otext ). They provide the structure of a text and its annotations, without any content. Even the text itself is left out! ![Warp]( /images/DataModel/DataModel.003.png) All other information is added to the warp as  features (the wefts): node features and edge features. A feature is a special aspect of the textual information, isolated as a kind of module. It is a collection of values which can be woven as a weft into the warp. One of the more basic things to add to the warp is the text itself. Ancient texts often have several text representations, like original (Unicode) characters or transliterated characters, with or without the complete set of diacritical marks. In Text-Fabric we do not have to choose between them: we can package each representation into a feature, and add it to the fabric. A Text-Fabric data set is a warp ( otype ,  oslots ) plus a collection of wefts (all other features). We may add other features to the same warp. Data sets with only wefts, but no warps, are called modules. When you use modules with a dataset, the modules must have been constructed around the warp of the dataset. Whenever you use Text-Fabric to generate new data, you are weaving a weave. The resulting dataset is a tight fabric of individual features (wefts), whose values are taken for a set of nodes (warp). ![Fabric]( /images/DataModel/DataModel.004.png) Some features deserve a privileged place. After all, we are dealing with  text , so we need a bit of information about which features carry textual representations and sectioning information (e.g. books, chapters, verses). This information is not hard-wired into Text-Fabric, but it is given in the form of a  config feature. A config feature has no data, only metadata. Every Text-Fabric dataset may contain a config feature called  otext , which specifies which node types and features correspond to sectional units such as books, chapters, and verses. It also contains templates for generating text representations for the slots. The  otext feature is optional, because not all Text-Fabric datasets are expected to have extensive sectioning and text representation definitions. Especially when you are in the process of converting a data source (such as a treebanks set) into a Text-Fabric dataset, it is handy that Text-Fabric can load the data without bothering about these matters. ![Text]( /images/DataModel/DataModel.005.png)  Model We summarize in brief statements our data model, including ways to represent the data, serialize it, and compute with it. Text objects:  occupy arbitrary compositions of slots;  carry a  type (just a label); all  slots carry the same type, the  slot type ; e.g.  word or  character ;  can be annotated by  features (key-value pairs)  can be connected by directed, labelled links to other text objects. The model knows which feature assigned values to nodes and edges. If two different features assign a value to an edge or node, both values can be read off later; one through the one feature, and one through the other. The data in Text-Fabric is organized as an annotated directed graph with a bit of additional structure. The correspondence is  text positions => the first so many slot numbers  text objects => nodes  links between text objects => edges  information associated with text objects => node features  labels on links between text objects => edge features   NB: since every link is specified by an edge feature, every link is implicitly labelled by the name of the edge feature. If the edge feature assigns values to edges, those values come on top of the implicit label.  types of text objects => a special node feature called  otype (read: object type)  extent of text objects in terms of slots => a special edge feature called  oslots (read: object slots)  optional specifications for sectioning and representing text => a special config feature called  otext (read: object text) Together, the  otype ,  oslots , and the optional  otext features are called the  warp of a Text-Fabric dataset.  Representation We represent the elements that make up such a graph as follows:  nodes are integers, starting with 1, without gaps;  the first  maxSlot nodes correspond exactly with the slots, in the same order, where  maxSlot is the number of slots;  nodes greater than  maxSlot correspond to general text objects;  node features are mappings of integers to values;  edge features are mappings of pairs of integers to values; i.e. edges are ordered pairs of integers; labelled edges are ordered tuples of two nodes and a value;  values (for nodes and for edges) are strings (Unicode, utf8) or numbers;  the  otype feature maps  the integers  1 maxSlot (including) to the  slot type , where  maxSlot is the last  slot ,  the integers  maxSlot+1 maxNode (including) to the relevant text object types;  the  oslots feature is an valueless edge feature, mapping all non-slot nodes to sets of slots; so there is an  oslots edge between each non-slot node and each slot  contained by that node;  a Text-Fabric dataset is a collection of node features and edge features containing at least the  warp features  otype ,  oslots , and, optionally  otext .  More about the warp The warp/weft distinction is a handy way of separating textual organisation from textual content. Let us discuss the warp features a bit more.  otype: node feature Maps each node to a label. The label typically is the kind of object that the node represents, with values such as   book chapter verse sentence clause phrase word   There is a special kind of object type, the  slot type , which is the atomic building block of the text objects. It is assumed that the complete text is built from a sequence of  slots , from slot  1 till slot  maxSlot (including), where the slots are numbered consecutively. There must be at least one slot. All other objects are defined with respect to the  slots they contain. The  slot type does not have to be called  slot literally. If your basic entity is  word , you may also call it  word . Slots are then filled with  words . You can model text on the basis of another atomic entity, such as  character . In that case, slots are filled with  characters . Other choices may be equally viable. The only requirement is that all slots correspond exactly with the first so many nodes. The  otype feature will map node  1 to a node type, and this node type is the type of all subsequent slots and also of the things that fill the slots. Note also the sectional features  book chapter verse here. They will play a role in the third, optional, warp feature  otext .  oslots: edge feature Defines which slots are occupied by which objects. It does so by specifying edges from nodes to the slots they contain. From the information in  oslots we can compute the embedding relationships between all nodes. It gives also rise to a canonical ordering of nodes, see  tf.core.nodes .  otext: config feature (optional) Declares which node types correspond to the first three levels of sectioning, usually  book ,  chapter ,  verse . Also declares the corresponding features to get the names or numbers of the sections in those levels. Text-Fabric uses this information to construct the so-called Text-API, with functions to  convert nodes to section labels and vice versa,  represent section names in multiple languages,  print formatted text for node sets. If information about sections or text representations are missing, Text-Fabric will build a reduced Text-API for you, but it will continue.  Serializing and precomputing When Text-Fabric works with a dataset, it reads feature data files, and offers an API to process that data. The main task of Text-Fabric is to make processing efficient, so that it can be done in interactive ways, such as in a Jupyter notebook. To that end, Text-Fabric  optimizes feature data after reading it for the first time and stores it in binary form for fast loading in next invocations;  precomputes additional data from the warp features in order to provide convenient API functions. In Text-Fabric, we have various ways of encoding this model:  as plain text in  .tf feature files,  as Python data structures in memory,  as compressed serializations of the same data structures inside  .tfx files in  .tf cache directories."
},
{
"ref":"tf.about.background",
"url":63,
"doc":" Background  Research data management Text-Fabric supports the research data cycle of retrieving/analysing/generating/archiving research results.  Share data When using the TF browser, results can be exported, see  tf.advanced.display.export . When programming in a notebook, TF generates many useful links after having been invoked. In this way the provenance of your data will be shared wherever you share the notebook (GitHub/GitLab, NBviewer, Software Heritage Archive).  Contribute data Researchers can produce new data ( tf.fabric.Fabric.save ) out of their findings and package their new data into modules and distribute it to GitHub/GitLab, see  tf.about.datasharing . Other people can use that data just by mentioning the GitHub/GitLab location. Text-Fabric will auto-load it for them.  Factory Text-Fabric can be used to construct websites, for example [SHEBANQ](https: shebanq.ancient-data.org). In the case of SHEBANQ, data has been converted to mysql databases. However, with the built-in TF kernel] ( tf.server.kernel ), it is also possible to use TF itself as a database to serve multiple connections and requests.  API organization All corpora are different, and it shows when we have to display the materials. Text-Fabric offers a plain display of corpus text and a pretty display of feature-enriched structures. These functions are supported by advanced configuration settings, derived from the corpus itself. Where these default settings are not enough, the corpus designer can add and tweak corpus settings. Moreover, custom code can be written and hooked into the display functions. The combination of a custom configuration file ( config.yaml ) and a bit of application code ( app.py ), together with additional styling ( display.css ) is an  app . A well-configured app can auto-download the corpus data, holds provenance information of all data sources that are being used for a corpus, and takes care of an optimal display of the patterns in the corpus.  Corpora:  tf.about.corpora  advanced: API:  tf.advanced  core API:  tf.core  Design principles There are a number of things that set Text-Fabric apart from most other ways to encode corpora.  Minimalistic model Text-Fabric is based on a minimalistic data model for text plus annotations. A defining characteristic is that Text-Fabric stores text as a bunch of features in plain text files. These features are interpreted against a  graph of nodes and edges, which make up the abstract fabric of the text. A graph is a more general concept than a tree. Whilst trees are ubiquitous in linguistic analysis, there is much structure in a corpus that is not strictly tree-like. Therefore, we do not adopt technologies that have the tree as their first class data model. Hence, almost by definition, Text-Fabric does not make use of XML technology.  Performance matters Based on this model, Text-Fabric offers a core API ( tf.fabric ) to search, navigate and process text and its annotations. A lot of care has been taken to make this API work as fast as possible. Efficiency in data processing has been a design criterion from the start.  ! example \"Comparisons\" See e.g. the comparisons between the Text-Fabric way of serializing (pickle + gzip) and [avro](https: nbviewer.jupyter.org/github/annotation/text-fabric/blob/master/test/avro/avro.ipynb), [joblib](https: nbviewer.jupyter.org/github/annotation/text-fabric/blob/master/test/joblib/joblib.ipynb), and [marshal](https: nbviewer.jupyter.org/github/annotation/text-fabric/blob/master/test/marshal/marshal.ipynb).  Code organization and statistics To get an impression of the software that is Text-Fabric, in terms of organization and size, see  tf.about.code .  History The foundational ideas derive from work done in and around the [ETCBC](http: etcbc.nl) avant-la-lettre from 1970 onwards by Eep Talstra, Crist-Jan Doedens, ([Ph.D. thesis](https: books.google.nl/books?id=9ggOBRz1dO4C , Henk Harmsen, Ulrik Sandborg-Petersen ([Emdros](https: emdros.org , and many others. I entered in that world in 2007 as a [DANS](https: dans.knaw.nl/en) employee, doing a joint small data project, and a bigger project SHEBANQ in 2013/2014. In 2013 I developed [LAF-Fabric](https: github.com/annotation/laf-fabric) as a tool for constructing the website [SHEBANQ](https: shebanq.ancient-data.org).  ! explanation \"House cleaning\" LAF-Fabric is based on the ISO standard [Linguistic Annotation Framework (LAF)](https: www.iso.org/standard/37326.html). LAF is an attempt to marry graph models to the [Text Encoding Initiative (TEI)](http: www.tei-c.org) which lives in XML. It is a good try, but it turns out that using XML technology for graphs is a pain. All the usual advantages of using the XML toolchain evaporate. So I decided to leave XML and its associated syntactical complexity. While I was at it, I took out everything that makes LAF-Fabric complicated and all things that are not essential for the sake of raw data processing. That became Text-Fabric version 1 at the end of 2016. It turned out that this move has freed the way to work towards higher-level goals:  a new search engine (inspired by [MQL](https: emdros.org) and  support for research data workflows. Time moves on, and nowhere is that felt as keenly as in computing science. Programming has become easier, humanists become better programmers, and personal computers have become powerful enough to do a sizable amount of data science on them. That leads to exciting  tipping points : > In sociology, a tipping point is a point in time when a group - or a large number of group members \u2014 rapidly and dramatically changes its behavior by widely adopting a previously rare practice. > [WikiPedia](https: en.wikipedia.org/wiki/Tipping_point_(sociology  Text-Fabric is an attempt to tip the scales by providing digital humanists with the functions they need  now , based on technology that appeals  now . Hence, my implementation of Text-Fabric search has been done from the ground up, and uses a strategy that is very different from Ulrik's MQL search engine. I continued working on Text-Fabric while I was at DANS, till 2022. Now, at [KNAW/Humanities Cluster](https: huc.knaw.nl), I apply it to new contexts: it can work with GitLab as well."
},
{
"ref":"tf.about.code",
"url":64,
"doc":" Code organisation The code base of Text-Fabric can be divided into a few major parts, each with their own, identifiable task. Some parts of the code are covered by unit tests ( tf.about.tests ).  Base ( tf.core ) The core API is responsible for: Data management : Text-Fabric data consists of  feature files . TF must be able to load them, save them, import/export from MQL. Provide an API : TF must offer an API for handling its data in applications. That means: feature lookup, containment lookup, text serialization. Precomputation : In order to make its API work efficiently, TF has to precompute certain compiled forms of the data.  Search ( tf.search.search ) TF contains a search engine based on templates, which are little graphs of nodes and edges that must be instantiated against the corpus. Search vs MQL : The template language is inspired by [MQL](https: emdros.org), but has a different syntax. It is both weaker and stronger than MQL. Search vs hand coding : Search templates are the most accessible way to get at the data, easier than hand-coding your own little programs. The underlying engine is quite complicated. Sometimes it is faster than hand coding, sometimes (much) slower.  Advanced ( tf.advanced ) TF contains an advanced API geared to autodownloading corpus data and displaying corpus materials in useful ways.  Web interface ( tf.server ) TF contains a browser interface for interacting with your corpus without programming. The web interface lets you fire queries (search templates) to TF and interact with the results:  expanding rows to pretty displays;  condensing results to verious container types;  exporting results as PDF and CSV. This interface be served by a local web server provided with data from a TF kernel. ( tf.server.start ,  tf.server.kernel and  tf.server.web ).  Volumes and collections ( tf.volumes ) Machinery to support the idea that a TF dataset is a work that consists of volumes. Volumes and collections of volumes can be loaded without loading the whole work while still maintaining a profound connection with the whole work through additional features such as  owork . See also  tf.about.volumes .  Dataset ( tf.dataset ) Machinery to manipulate datasets as a whole.  Convert ( tf.convert ) There is support for conversion to and from MQL and for converting arbitrary structured data (such as database dumps or TEI files) to TF ( tf.convert.mql ,  tf.convert.walker ). There is also some support for roundtrips of TF data into other annotation tools and back ( tf.convert.recorder ).  Writing ( tf.writing ) Text-Fabric supports several writing systems by means of transliterations and conversions between them and Unicode."
},
{
"ref":"tf.about.optimizations",
"url":65,
"doc":" File format Optimizations  Rationale It is important to avoid an explosion of redundant data in  .tf files. We want the  .tf format to be suitable for archiving, transparent to the human eye, and easy (i.e. fast) to process.  Using the implicit node You may leave out the node spec for node features, and the first node spec for edge features. When leaving out a node spec, you must also leave out the tab following the node spec. A line with the first node spec left out denotes the singleton node set consisting of the  implicit node . Here are the rules for implicit nodes.  On a line where there is an explicit node spec, the implicit node is equal to the highest node denoted by the explicit node spec;  On a line without an explicit node spec, the implicit node is determined from the previous line as follows:  if there is no previous line, take  1 ;  else take the implicit node of the previous line and increment it by  1 . For edges, this optimization only happens for the  first node spec. The second node spec must always be explicit. This optimizes some feature files greatly, e.g. the feature that contains the actual text of each word. Instead of   1 be 2 reshit 3 bara 4 elohim 5 et 6 ha 7 shamajim 8 we 9 et 10 ha 11 arets   you can just say   be reshit bara elohim et ha shamajim we et ha arets   This optimization is not obligatory. It is a device that may be used if you want to optimize the size of data files that you want to distribute.  Omitting empty values If the value is the empty string, you may also leave out the preceding tab (if there is one). This is especially good for edge features, because most edges just consist of a node pair without any value. This optimization will cause a conceptual ambiguity if there is only one field present in a node feature, or if there are only two fields in an edge feature. It could mean that the (first) node spec has been left out, or that the value has been left out. In those cases we will assume that the node spec has been left out for node features. For edge features, it depends on whether the edge is declared to have values (with  @edgeValues ). If the edge has values, then, as in the case of node features, we assume that the first node spec has been left out. But if the edge has no values, then we assume that both fields are node specs. So, in a node feature a line like this   42   means that the implicit node gets value  42 , and not that node  42 gets the empty value. Likewise, a line in an edge feature (without values) like this   42 43   means that there is an edge from  42 to  43 with empty value, and not that there is an edge from the implicit node to  42 with value 43. And, in the same edge, a line like this   42   means that there is an edge from the implicit node to  42 with the empty value. But, in an edge with values, the same lines are interpreted thus:   42 43   means that there is an edge from the implicit node to node  42 with value  43 . And   42   means that there is an edge from the implicit node to node  42 with empty value. The reason for these conventions is practical: edge features usually have empty labels, and there are many edges. In case of the Hebrew Text database, there are 1.5 million edges, so every extra character that is needed on a data line means that the file size increases with 1.5 MB. Nodes on the other hand, usually do not have empty values, and they are often specified in a consecutive way, especially slot (word) nodes. There are quite many distinct word features, and it would be a waste to have a column of half a million incremental integers in those files.  Absence of values Say you have a node feature assigning a value to only 2000 of 400,000 nodes. (The Hebrew  qere would be an example). It is better to make sure that the absent values are not coded as the empty string. So the feature data will look like 2000 lines, each with a node spec, rather than a sequence of 400,000 lines, most empty. If you want to leave out just a few isolated cases in a feature where most nodes get a value, you can do it like this:   @node x0000  . x1000 1002 x1002 x1003  . x9999   Here all 10,000 nodes get a value, except node  1001 .  Note on redundancy Some features assign the same value to many nodes. It is tempting to make a value definition facility, so that values are coded by short codes, the most frequent values getting the shortest codes. After some experiments, it turned out that the overall gain was just 50%. I find this advantage too small to justify the increased code complexity, and above all, the reduced transparency of the  .tf files.  Examples Here are a few more and less contrived examples of legal feature data lines.  Node features 1.  \\t\\n 2.  2 2\\t3 3.  foo\\nbar 4.  1 Escape \\t as  t meaning 1. node 1 has value:  tab  newline 2. node 2 has value: 2  tab 3 3. node 3 has value: foo  newline bar 4. node 1 gets a new value: Escape  as \\t  Edge features 1.  1 2.  1 2 3.  2 3 foo 4.  1-2 2-3 bar meaning 1. edge from 1 to 1 with no value 2. edge from 1 to 2 with no value 3. edge from 2 to 3 with value foo 4. four edges: 1->2, 1->3, 2->2, 2->3, all with value bar. Note that edges can go from a node to itself. Note also that this line reassigns a value to two edges: 1->2 and 2->3."
},
{
"ref":"tf.about.manual",
"url":66,
"doc":" Search manual ![interface]( /images/ls/ls.005.png)  1. patterns : You can search the corpus by means of patterns. Several patterns work together at different levels of the corpus. When all patterns match, we have a result. All results will be listed in the table on the right. A pattern can be as simple as a word, and then it will find all occurrences of that word. But they can be way more sophisticated than that. See  Search patterns below for a crash course. See  Meaning below for what the meaning is of multiple patterns working together.  2. show text of a layer : You can click on the name of each layer to show and hide the full text of that layer. So that you know the material in which you are searching.  3. focus : The level in the corpus that corresponds with a single row in the results table. For example, if you put focus on  sentence , the results will be organized by sentence.  ! hint \"More or less context\" By changing focus, you will see more or less context around the results.  4. execute : Whenever you change a pattern, the search results will be updated. But you can also press this button to run the search again.  5. stats : How many results there are at each level, compared to the total size of the corpus.  6. export : Export the search results as a tab-separated file ( .tsv ). This file can be opened in Excel. All results are exported, not only the ones that show on the current page. The level of detail depends on the currently selected  focus level.  7. options : Switch between the simple interface and the full interface. There is a separate manual for the full interface:  tf.about.clientmanual .  8. help : Help and info.  9. navigate : Walk through the results in various ways:  manual entry of the position number,  small jumps back and forth,  big strides with the slider. If you do this often: there are handy  keyboard shortcuts . See below.  10. position : The current position in the results table is marked.  11. previous position : The previous position in the results table is also marked, in a slightly less conspicuous way.  12. highlighting : The portions in the layer that match the corresponding pattern are highlighted.  ! caution When you export results, the highlight information is lost.  ! hint There is an option to retain highlight information in exports. For that you have to use the full interface.  13. links to online : The top level layers are linked to an online representation of the corpus. For example, for NENA it is the GitHub repository where the source texts are stored. For the BHSA it is [SHEBANQ](https: shebanq.ancient-data.org).  Search patterns Here is a crash course in increasingly complex search patterns. We only give examples and a bit of explanation. Simple words :  mute is a pattern that matches all occurrences of the string  mute . Case is not important, and it does not have to be a whole word. hint  ! \"Case sensitive search\" If the case of letters is important, use the full interface, where you can switch it on and off. Word boundaries : We can reckon with word boundaries:   \\bmute\\b matches  mute but only if it is a separate word.   \\bmute matches words that start with  mute   mute\\b matches words that end in  mute Line boundaries : We can reckon with line boundaries:   ^mute$ matches  mute but only if it occupies a complete line;   ^mute matches occurences of  mute at the start of a line;   mute$ matches occurrences of  mute at the end of a line.  ! hint \"match literally\" You can take these special characters literally by using  \\$ and  \\^ . Wildcard :  m.te matches  mate ,  mbte ,  mcte ,  m,te ,  m te , etc. The  . matches any character, except a newline.  ! hint \"newline\" To match a newline, use  \\n Small variations :  m[aeiou]te matches  mate ,  mete ,  mite ,  mote ,  mute . With  [ ] you can define a character class. Everything in the class is matched. There are more possibilities:   [0-9] matches all single digits   [a-z] matches all single letters   [p-w] matches all single letters between  p and  w (including)   [a-ep-w:;!?] matches the letters  a to  e ,  p to  w ,  : ,  ; ,  ! , and  ? .   [a-e-] matches the letters  a to  e and  - . (The  - should be right before the  ] ).   [^aeiou] matches every character  other than a vowel   [(){}\\[\\  matches the letters  ( ,  ) ,  { ,  } ,  [ , and  ] . Note that you have to use \\ in front of the  [ and  ] to undo their special meaning. Smaller variations :  mute|nase matches either  mute or  nase . Grouping : We can group patterns   mu(t|r)e matches  mu followed by either  t or  r , followed by  e   (^|a)mute matches  mute at the start of a line, or  amute Repetitions : We can specify that a pattern should match a number of times:  ? means 0 or 1 times: :  p[aeiou]?r matches a  p followed by an optional vowel, followed by an  r .  + means 1 or more times: :  p[aeiou]+r matches a  p followed by at least one vowel, possibly more vowels, followed by an  r .  means arbitrary many times: :  p[aeiou] r matches a  p followed by any number of vowels, possibly none at all, followed by an  r .  {3,7} means at least 3 and at most 7 times :  ma{3,7}t matches an  m , then 3-7  a s, and then a  t .  {3,} means at least 3 times :  ma{3,}t matches an  m , then at least 3  a s, and then a  t .  {,7} means at most 7 times :  ma{,7}t matches an  m , then at most 7  a s, and then a  t . The quantifiers  ? ,  + ,  try to make as many repetitions as the text admits. But you can reign them in so that they make as few repetitions as possible, by putting a  ? behind them:    ,  +? ,  ? . Suppose we search the string  mute aaaa nase bbbb nase cccc    mute . nase matches  mute aaaa nase bbbb nase   mute . ? nase matches  mute aaaa nase However:   mute . nase bbbb matches  mute aaaa nase bbbb Initially, the  . takes us to the  second  nase , but the pattern wants a  bbbb at the end, so it has gone to far and it will, reluctantly, backtrack, until the match is found.   mute . ? nase cccc matches  mute aaaa nase bbbb nase cccc Initially, the  . ? takes us to the  first  nase , but the pattern wants a  cccc at the end, so it has gone not far enough and it will, reluctantly, go further, until the match is found. Combining : By using the constructions we have so far, we can specify ever more complex patterns.   \\b[^aeiou]{2}[aeiou][^aeiou]+\\b matches a word consisting of exactly 2 consonants, one vowel, and then one or more consonants.   \\b([^aeiou][aeiou][^aeiou]|[^aeiou]{2}[aeiou][^aeiou]{2})\\b matches a word of shape CVC or CCVCC. If there is more than one group, you can refer to them by  \\1 ,  \\2 , etc. More power : Groups between  ( ) have memory. If something is matched by it, you can reuse is later in the pattern. If we have one pair of  ( ) , then  \\1 refers to whatever that group matched.   ([^aeiou])\\1 matches twice the same consonant, no matter which one   ([^aeiou])\\1{3} matches 4 times the same consonant. This will find words such as  xirrrr .   (\\b([a-z]+)\\b). ?\\b\\1\\b finds twice the same word in a sentence Note that  [^aeiou]{4} will find 4 consonants, but they do not have to be the same. Ultimate power : This is not all. Much more can be done with patterns. The full story is here:  [cheatsheet](https: developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)  [regex](https: en.wikipedia.org/wiki/Regular_expression)  Meaning  Levels Your corpus is divided into levels, e.g. text/line/sentence/word/. At each level there are objects in the corpus and they can be represented in certain ways:  text are represented by their titles;  lines are represented by their numbers;  words are represented by the strings of which they are composed.  Combined search In order to search, you specify search patterns for as many of the available layers as you want. When the search is performed, all these layers will produce results, and the results in one layer will be \"intersected\" with the results in all other layers.  ! caution \"Beware of complicated criteria\" Before you devise sophisticated criteria, note that this search engine is not very refined in taking intersections. It takes the intersections of the joint results of the matches in the layers. It will not take the intersections of the individual matches. The bottomline is: use the search tool to grab the things that are potentially of interest. If you need to pinpoint further, export the results to Excel and use other tools/methods to achieve that. If you need more information in this, consult the manual for the full interface:  tf.about.clientmanual .  Export You can export the search results to Excel (or rather, a tab-separated file,  .tsv ). When you do that,  all results will get exported, not only the ones that show on the interface. The organization of the exported results reflects the interface. Here are screenshots of an export where the focus is on sentences, and one with the focus on words. Observe the different amount of context in the export. ![export]( /images/ls/ls.006.png)  Keyboard shortcuts Keyboard shortcuts need to be pressed with modifier keys. It depends on your browser which ones. Here is the list, by browser and platform: browser | Windows | - | Linux | - | Mac  - |  - |  - |  - |  - |  - Firefox |  Alt +  Shift | |  Alt +  Shift | |  Ctrl +  Option Chrome |  Alt +  Shift | |  Alt | |  Ctrl +  Option Edge |  Alt +  Shift | | | |  Ctrl +  Option Safari | | | | |  Ctrl +  Option Having figured that out, you can use those modifier keys together with a letter to perform the following actions: shortcut | action  - |  -  n |  n ext position  p |  p revious position  b |  b ack a batch  f |  f orward a batch  s |  s tart  e |  e nd  m |  m anually type the position in the box"
},
{
"ref":"tf.about.searchdesign",
"url":67,
"doc":" Search Design  Fabric metaphor ![fabric]( /images/searchFabric.jpg) The search space is a massive fabric of interconnected material. In it we discern the structures we are interested in: little pieces of fabric, also with interconnected material. When we search, we have a fabric in mind, woven from specific material, stitched together in a specific manner. Search in Text-Fabric works exactly like this: you give a sample patch, and Text-Fabric fetches all pieces of the big fabric that match your patch. ![patch]( /images/SearchDesign/SearchDesign.001.png) The textile metaphor is particularly suited for grasping the search part of Text-Fabric, so I'm going to stick to it for a while. I have used it in the actual code as well, and even in the proofs that certain parts of the algorithm terminate and are correct. Yet it remains a metaphor, and the fit is not exact. The basic pattern of search is this: textile | text | example    - |   |    - take several fleeces | pick the nodes corresponding to a node type |  word s,  phrase s,  clause s,  verse s spin thick yarns from them | filter by feature conditions |  part-of-speech=verb gender= f  book=Genesis  vt spin the yarns further into thin yarns | throw away nodes that do not have the right connections | feature conditions on a verse also affect the search space for sentences, clauses, etc., and vice versa stitch the yarns together with thread | build results by selecting a member for every filtered node set |  word node  123456 in  phrase node  657890 in  clause node  490567 in  verse node  1403456 We will explain the stages of the fabrication process in detail.  Fleece ![fleece]( /images/SearchDesign/SearchDesign.002.png) A fleece corresponds with a very simple search template that asks for all objects of a given type:   word   or   clause   or, asking for multiple types:   verse clause phrase lex word   Fleeces are the raw material from which we fabricate our search results. Every node type, such as  word ,  sentence ,  book corresponds to a fleece. In Text-Fabric, every node has exactly one node type, so the whole space is neatly divided into a small set of fleeces. The most important characteristic of a fleece is it size: the number of nodes in a node type.  Spinning thick yarn ![spin thick]( /images/SearchDesign/SearchDesign.003.png) Consider search templates where we ask for specific members of a node type, by giving feature constraints:   verse book=Genesis clause type=rela phrase determined=yes lex id=jc/ word number=pl vt vt   Every line in this search templates we call an  atom : a node type plus a feature specification. The result of an atom is the set of all nodes in that node type that satisfy those feature conditions. Finding the results of an atom corresponds with first thing that we do with a fleece:  spin a thick  yarn from it. Yarns in general are obtained by spinning fleeces, i.e. by filtering node sets that correspond to a node type. A search template may contain multiple atoms. Text-Fabric collects all atoms of a template, grabs the corresponding fleeces, and spins thick yarns from them. For each atom it will spin a yarn, and if there are several atoms referring to the same node type, there will be several yarns spun from that fleece. This spinning of thick yarns out of fleeces happens in just one go. All fleeces together contain exactly all nodes, so Text-Fabric walks in one pass over all nodes, applies the feature conditions, and puts the nodes into the yarns depending on which conditions apply. By the way, for the Hebrew dataset, we have 1.4 million nodes, and a typical pass requires a fraction of a second. The most important characteristic of a yarn is its  thickness , which we define as the number of nodes in the yarn divided by the number of nodes in the fleece. For example, a yarn consisting of the  book node of Genesis only, has a thickness of 1/39, because there are 39 books in the fleece. A much thicker yarn is that of the verbs, which has a thickness of roughly 1/6. A very thin thread is that of the word  <CQH (which occurs only once) with a thickness of only 1/400,000.  Spinning thin yarns In order to find results, we have to further narrow down the search space. In other words, we are going to spin our thick yarns into thinner and thinner yarns. Before we can do that, we should make one thing clear.  Connected by constraints If the template above were complete, it would lead to a monstrous number of results. Because a result of a template like this is any combination of verse-, clause-, phrase-, lex-, word nodes that individually satisfy their own atom condition. So the number of results is the product of the number of results of the individual atoms, which is pretty enormous. It is hard to imagine a situation where these results could be consumed. Usually, there are  constraints active between the atoms. For example in a template like this:   1 verse book=Genesis 2 clause type=rela 3 phrase determined=yes 4 w:word number=pl vt 5 6 l:lex id=jc/ 7 8 w  l   The meaning of this template is that we look for a  verse that  (1) claims to be in Genesis  (2) has a clause whose type is  rela  (3) which in turn has a phrase of a determined character  (4) which contains a word in the plural and that has a verbal tense (vt) There should also be a  (6) lex object, identified by  jc/ which is connected to the rest by the constraint that  (8) the word of line 4 is contained in it. Note that all atoms are linked by constraints into one network. In graph theoretical terms: this template consists of exactly one [connected component](http: www.analytictech.com/networks/graphtheory.htm). If this were not so, we would have in fact two independent search tasks, where the result set would be the (cartesian) product of the result sets of the separate components. For example, if line 8 were missing, we would effectively search for things that match lines 1-4, and, independently, for things that match line 6. And every result of the first part, combined with any result of the second part, would be a valid result of the whole. Well, Text-Fabric is nobody's fool: it refuses to accept two search tasks at the same time, let alone that it wants to waste time to generate all the results in the product. You will have to fire those search tasks one by one, and it is up to you how you combine the results. The upshot it:  the atoms in the search template should form a network, connected by constraints . Text-Fabric will check this, and will only work with search templates that have only one connected component.  Terminology By now we have arrived at the idea that our search template is a graph underneath: what we have called  atoms are in fact the nodes, and what we have called  constraints , are the edges. From now on, we will call the  atoms  qnodes and the constraints  qedges . The  q is to distinguish the nodes and the edges from the nodes and the edges of your dataset, the  text nodes and  text edges. When we use the term  nodes and  edges we will always refer to  text nodes and edges. When we are searching, we maintain a  yarn for every  qnode . This yarn starts out to be the thick yarn as described above, but we are going to thin them. We can also see how our query templates are really  topographic : a query template is a piece of local geography that we want to match against the data. Finding results is nothing else than instantiating  qnodes of the search template by text nodes in such a way that the  qedges hold between the text edges.  Spinning a qedge ![spin edge1]( /images/SearchDesign/SearchDesign.004.png) So, where were we? We have spun thick threads based on the  qnodes individually, but we have not done anything with the  qedges . That is going to change now. Consider this piece of search template:   4 w:word number=pl vt 5 6 l:lex id=jc/ 7 8 w  l   So our  qnodes are  w and  l , and our  qedge is  w  l . Note that a  lex object is the set of all occurrences of a lexeme. So  w  l says that  w is embedded in  l , in other words,  w is a slot contained in the slots of  l . It is nothing else than the word  w is an instance of the lexeme  jc/ . We will now check the pairs of (lex, word)-nodes in the text, where the lex node is taken from the yarn of the qnode  l , and the word from the yarn of the qnode  w . We can throw away some words from the yarn of  w , namely those words that do not lie in a lexeme that is in the yarn of  l . In other words: the words that are not instances of lexeme  jc/ are out! Conversely, if the lexeme  jc/ does not have occurrences in the plural and with a verbal tense, we must kick it out of the yarn of  l , leaving no members in it. If a yarn gets empty, we have an early detection that the search yields no results, and the whole process stops. In our case, however, this is not so, and we continue. This pass over the yarns at both sides of a qedge is a  spin action. We spin this qedge, and the result is that the two yarns become spun more thinly, hopefully. ![spin edge2]( /images/SearchDesign/SearchDesign.005.png) With the yarn of words severely spun out, we are going to the next qedge, the one between words and phrases.   3 phrase determined=yes 4 w:word number=pl vt   The indent is an implicit way of saying that the \"embeds\" relation    holds between the  phrase and the  word . An equivalent formulation of the template is   p:phrase determined=yes w:word number=pl vt p  w   We race along the yarn  w of remaining words and check for each word if it is contained in a phrase in the yarn of  p , the determined phrases. If it is not, we throw the word out of the yarn of  w . Similarly, we can throw out some phrases from the yarn of  p , namely those phrases that do not contain words in the yarn of  w . In other words: the phrases without plural words and verbal tense are also out. ![spin edge3]( /images/SearchDesign/SearchDesign.006.png) We continue spinning, now between phrases and clauses.   2 clause type=rela 3 phrase determined=yes   Here we loose the phrases that are not contained in a clause of  type=rela , and we loose all clauses that do not embed one of the few phrases left. ![spin edge4]( /images/SearchDesign/SearchDesign.007.png) The last spin action corresponds with   1 verse book=Genesis 2 clause type=rela   So we throw away all our results if they are outside Genesis. We end up with a set of thin yarns, severely thinned out, even. This will be a good starting point for the last stage: picking members from each yarn to form results. We call this  stitching and we'll get there in a moment.  The spread of a qedge A very important property of a qedge is its  spread . A qedge links every node  n in its  from -yarn to zero, one, or more nodes in its  to -yarn. The number of nodes in the  to -yarn is a key property. The average number of nodes  m in the  to -yarn per linked node  n in the  from -yarn is the  spread of the edge. A few examples:  An edge that corresponds to    ,  n embeds  m . If this edge goes from books to words, then every book node  n is linked to every one of its words. So very  n has hundreds or thousands  m s. The spread will roughly be 425,000 / 39 =~ 10,000  The opposite edge has a spread of exactly 1, because every word belongs to exactly one book. Edges with spread 1 are very pleasant for our stitching algorithm later on.  An edge corresponding to  = . These qedges are super efficient, because their relation  = is a breeze to compute, and they have always a spread 1 in both directions.  An edge corresponding to  , the node inequality relation. The relation  is still a breeze to compute, but the result is heavy: the set of all nodes not equal to a given node. The spread is nearly 100% of the yarn length, in both directions. These edges are not worth to spin, because if you have two yarns, no node will be excluded: if you have an  n in the  from -yarn, you will always be able to find a different  n in the  to -yarn (except when bot yarns are equal, and contain just one node).  An edge corresponding to    , the relation between nodes that are linked to the same set of slots. The spread of this relation is not too big, but the cost of computing it adds up quickly when applied to many cases.  Spinning all qedges Let us describe the spinning of yarns along edges in a bit more general way, and reflect on what it does for us. We spin all qedges of a template. But after spinning a qedge, the yarns involved may have changed. If that is the case, it makes sense to re-spin other qedges that are involved in the changed yarns. That is exactly what we do. We keep spinning, until the yarns have stabilized. A few key questions need to be addressed:  Do the yarns stabilize?  If they stabilize, what have we got?  Is this an efficient process?  Termination of spinning  Yes, spinning qedges until nothing changes any more, terminates, provided you do not try to spin qedges that are up-to-date. If the yarns around an edge have not changed, it does not make sense to spin that qedge. See [here](https: github.com/annotation/text-fabric/blob/master/docs/Search/Proofs.ipynb) for proof.  What have we got?  After spinning, it is guaranteed that we have not thrown away results. All nodes that are parts of valid results, are still in the yarns. But, conversely, can it be that there are still nodes in the yarns that are not part of a result? Yes, that is possible. Only when the graph of qnodes and qedges does not have a cycle, we know that all members of all yarns occur at least once in a result. See [here](https: github.com/annotation/text-fabric/blob/master/docs/Model/searchProofs.ipynb) for proof. Quite a few interesting queries, however, have cycles in in their graphs. So, in those cases, spinning qedges will not cause the maximal narrowing down of the search space.  Efficiency  And that raises the question: how effective is the process of spinning qedges? The answer is: it depends. If your qnodes have strong conditions on them, so that the first yarn is already very thin, then every yarn that is connected to this one by a qedge has also the chance to get very thin after spinning. In this case, the combined filtering effect of all edges can produce a rapid narrowing of the search space. Especially if we can implement edge spinning in an optimized way, this works like a charm. When we come to stitching results (which is potentially very expensive), we have already achieved a massive reduction of work. But if none of the yarns is thin at the outset, spinning qedges will not result in appreciable thinning of the yarns, while it might be an enormous amount of work, depending on the actual relations involved. The good news is that it is possible to detect those situations. Text-Fabric estimates whether it makes sense to spin a qedge, and if not, it will just skip spinning that edge. Which will make the final result gathering (stitching) more expensive. There is more to efficiency than this. It turns out that the strategy by which you select the next qedge to be spun, influences the efficiency. In general, it is best to always start with the thinnest yarns, and select edges that affect them. Also here there is complication: not every qedge is equally expensive when computed over a yarn. It might be better to compute a cheaper edge over a thicker yarn.  Stitching ![stitch]( /images/SearchDesign/SearchDesign.008.png) The last step is actually getting results. A result is a bunch of nodes, one from each yarn, in such a way that result nodes on yarns fulfil the relationships that the qedges of the search template dictate. If we can find such a set of nodes, we have stitched the yarns together. We call such a result a  stitch . A stitch is a tuple of text nodes, each corresponding to exactly one qnode. It is not completely trivial to find stitches, let alone to collect them efficiently. The general procedure is as follows:  choose a yarn to start with;  try a node in that yarn as starting point  pick a qedge from the qnode associated with the yarn (the source yarn), to another qnode and consider that yarn (the target yarn),  find a node in the target yarn that is in the right relationship with the node selected in the source yarn,  and so on, until all qedges have been used,  if all has gone well, deliver the nodes found as a result. Let us look to these steps in a bit more detail. There is an element of choice, and it is very important to study how big this element of choice is in the various stages. First we select a yarn, and in that yarn a node. Usually we have many choices and at least one, because result seeking only makes sense if all yarns are non-empty. The third choice is the related node in the target yarn. Here we may encounter anything from zero, one or many choices. If there are zero choices, then we know that our provisional stitching of yarns so far cannot be completed into a full stitching of all yarns. If we have made choices to get this far, then some of these choices have not been lucky. We have to back-track and try other alternatives. If there is just one choice, it is easy: we pick the one and only possible node in the target yarn, without introducing new points of choice. If there are many choices, we have to try them all, one by one. Some might lead to a full stitch, others not. An important situation to be aware of, is when a qedge leads the stitching process to a yarn, out of which a node has already been chosen by an earlier step. This is very well possible, since the search template might have cycles in the qedges, or multiple qedges arrive at the same qnode. When this happens, we do not have to select a target node, we only have to check whether the target node that has been selected before, stands in the right relationship to the current source node. The relationship, that is, which is dictated by the current qedge that we are at. If so, we can stitch on with other edges, without introducing choice points (very much like the one-choice above). If the relation fails to hold, this stitch is doomed, and we have to back-track (very much like the zero-choice above).  Strategy of stitching The steps involved in stitching as described above are clear, but less clear is what yarn we shall select to start with, and in which order we shall follow the edges. We need a strategy, and multiple strategies might lead to the same results, albeit with varying efficiency. In Text-Fabric we employ a strategy, that makes the  narrowest choices first. We call a choice narrow if there are few alternatives to choose from, and broad if there are many alternatives. By giving precedence to narrow choices, we prune larger parts of the search tree when we fail. If we are stitching, the more nodes we have gathered in our stitch, the greater the chance that a blocking relationship is encountered, i.e. a relationship that should hold between the nodes gathered so far, but which in fact does not hold. So we want to get as many nodes in our stitch as quickly as possible. If our search tree is narrowly branching near the root, and broadly branching near the leaves, the top  n levels of the tree contain relatively few nodes. So we have relatively few possibilities to stitch n nodes together, and most reasons to fail will happen while visiting these  n levels. If on the other hand our search tree is broadly branching near the root, and narrowly branching near the leaves, the top  n levels of the tree contain many nodes. We will visit many nodes and try many stitchings of length  n , of which a lot will fail. I have also tried a different, more complicated strategy, which is still implemented, and which can be used by means of an optional argument to  tf.search.search.Search.study , but results of this strategy were not particularly good.  Small-first strategy Here is the small-first strategy in a bit more detail.  we choose the smallest yarn to start with;  for every qedge we estimate its current  spread , i.e. how many targets it has per source on average, relative to the current source and target yarns;  at every step there are three kinds of qedges: 1. qedges that go between qnodes of which we have already stitched the yarns 2. qedges that go from a yarn that is already part of the stitch to a yarn outside the stitch 3. qedges that do not start at a yarn in the current stitch  at every step, 1. we first process all qedges of type (i), in arbitrary order; 2. we select one edge with minimal spread out of type (ii) and process it; 3. we postpone all edges of type (iii); 4. we redetermine which edges are in all types. It cannot happen that at the end we have not visited all qnodes and yarns, because we have assumed that our search template consists of one connected component. Every qnode can be reached from every other through a series of qedges. So, as we perform step after step, as long as there are qnodes in type (iii), we can be sure that there are also qnodes in a path from the qnodes we have visited to the type (iii) qnodes. At least one of the qnodes in that path will be a type (ii) node. In the end there will no type (iii) nodes be left. We have added a few more things to optimize the process. A relationship between a source yarn and a target yarn can also be considered in the opposite direction. If its spread in the opposite direction is less than its spread in the normal direction, we use the opposite direction. Secondly, before we start stitching, we can compute the order of qedges that we will use for every stitch. We then sort the qnodes according to the order by which they will be encountered when we work through the qedges. When we are stitching, in the midst of a partial stitch, it is always the case that we have stitched qnodes 1   n for some  n , and we still have to stitch all qnodes above  n . That means that when we try to finish partial stitches of which an initial part has been fixed, the search process will not change that initial part of the stitch. Only when the algorithm has exhausted all possibilities based on that initial part, it will change the last node of the initial part, replace it by other options, and start searching further. This means that we just can maintain our partial stitch in a single list. We do not have to assemble many partial stitches as separate immutable tuples. We have implemented our deliver function as a generator, that walks over all stitch possibilities while maintaining just one current stitch. When the stitch has been completely filled in, a copy of it will be yielded, after which back-tracking occurs, by which the current stitch will get partly undefined, only to be filled up again by further searching. Read it all in the source code: [ def stitchOn(e) ](https: github.com/annotation/text-fabric/blob/master/tf/search/stitch.py L442)."
},
{
"ref":"tf.about.apps",
"url":68,
"doc":" Advanced API Text-Fabric is a generic engine to process text and annotations. When working with specific corpora, we want to have more power at our fingertips. We need extra power on top of the core TF engine. The way we have chosen to do it is via  apps . An app is a bunch of extra settings and/or functions and/or styles that feed the advance API. The advanced API will do its best to generate sensible default settings from the corpus data, but a bit of nudging will usually improve the results of displaying structures of the corpus. For a list of current corpora, see  tf.about.corpora .  Components Apps usually reside in a subdirectory  app of a repository that holds the corpus data. Apps can be trivial, completely empty even. Each TF- app consists of a folder with these items, all optional:  static A folder with styles, fonts and logos, to be used by web servers such as the the text-fabric browser, see  tf.server.web . In particular,  display.css contains additional styles used for pretty displays. These styles will be programmatically combined with other styles, to deliver them to the TF browser on the one hand, and to Jupyter notebooks on the other hand.  config.yaml Settings to feed the advanced API for this app. See  tf.advanced.settings .  app.py Corpus dependent helpers for the advanced API.  other modules If you organize bits of the functionality of a corpus app into modules to be imported by  app.py , you can put them in this same directory.  ! caution \"Do not  import app-dependent modules\" If you import these other modules by means of the Python import system using  import module or  from module import name then everything works fine until you load two apps in the same program, that in turn load their other modules. As long as different apps load modules with different names, there is no problem. But if two apps both have a module with the same name, then the first of them will be loaded, and both apps use the same code. In order to prevent this, you can use the function  loadModule() to dynamically load these modules. They will be given an app-dependent internal name, so the Python importer will not conflate them.  ! explanation \"loadModule()\" Here is how you load auxiliary modules in your  app.py . The example is taken from the  uruk app, which loads two modules,  atf and  image . See for example the [app in the Uruk corpus](https: github.com/Nino-cunei/uruk/tree/master/app). The place to put the  loadModule() calls is in the  __init()__ method of the  TfApp object, before the call to  super().__init() . Here the name of the app and the path to the code directory of the app are known. The first argument for  loadModule() is the file name of the module, without the  .py .  loadModule() needs the app name and the path to the code, but we pass it all  args , received by  __init__() . The result of loading the module is a code object, from which you can get all the names defined by the module and their semantics. In the  atf case, we use the  atfApi() function of the module to add a bunch of functions defined in that module as methods to the TfApp object. In the  image case, we add the code object as an attribute to the TfApp object, so that all its methods can retrieve all names defined by the  image module.  Implementation Most parts of the advanced API are implemented in the [api](https: github.com/annotation/text-fabric/blob/master/tf/advanced) modules of TF.  Two contexts Most functions with the  app argument are meant to perform their duty in two contexts:  when called in a Jupyter notebook they deliver output meant for a notebook output cell, using methods provided by the  ipython package.  when called by the web app they deliver output meant for the TF browser website, generating raw HTML. When we construct the rich, app-dependent API, we let it know whether it is constructed for the purposes of the Jupyter notebook, or for the purposes of the web app. We set the attribute  _browse on the  app object to  True if we use the  app in the web app context, otherwise in a programming context. Most of the code in most functions is independent of  _browse . The main difference is how to deliver the result: by a call to an IPython display method, or by returning raw HTML."
},
{
"ref":"tf.about.volumes",
"url":69,
"doc":" Volumes and collections As from version 9.0.0, Text-Fabric supports working with partial datasets.  Concepts Text-Fabric supports the concept of volume of a work and also the concept of a collection of volumes. It has methods to restrict the loading of data to a single volume or a single collection of volumes. Volumes and collections can be created from works by means of ready made functions in Text-Fabric. When volumes and collections are created, a profound rearrangement of information takes place. Yet the nodes in the portions can be mapped unto the nodes of the original work. That means that if you work inside a volume or collection, and produce results, you can translate these results back to the original work.  Rationale There are various reasons for working with portions. Many corpora have a division in volumes that are relatively self-contained. When you do intensive processing that can be done inside a volume, it is a waste of time and other resources to load the whole corpus into RAM. Sometimes corpora are so large that there is no hope to fit them into RAM anytime soon. In those cases we need Text-Fabric to be able to work on its portions. What we do not have yet is a concept of a work that is not meant to be loaded entirely into Text-Fabric, but only volume-wise. Up till now the mechanism to create portions is dependent on being able to load the whole work. At the horizon there is the picture of large corpora lying in archives. These archives offer an API to select a volume and export it as a Text-Fabric volume. Researchers can do their job, and produce new annotations to the volume, which can be transformed into annotations to the work as a whole.  Challenges Text-Fabric is heavily optimized around the idea that the whole corpus is addressed by natural numbers, starting at 1 at the first slot of the text, then going to the last word, and then continuing by enumerating textual objects of several types, type for type. When we extract a volume in order to turn it into a loadable dataset, we have to shift this big enumeration in a rather intricate way. In order to offer an efficient API, Text-Fabric needs to compute and store data about the dataset as a whole, and it is difficult to transform the precomputed data of the whole work into the precomputed data of a portion of it. Another holistic thing that causes problems is that there may be data in the work that is not strictly localized to single volumes:  nodes that have slots across volumes  edges that start and end in different volumes The approach we have chosen is to perform the shift of the enumeration (it is a quick process), and to precompute data for portions from scratch, which is also fast enough due to the limited size of a portion compared to the whole work. As to the holistic problems: we solve them to generate additional features with the volumes from which holistic information can be recreated when needed.  The operation in detail Here we outline in a fair amount of detail what needs to be done to extract a volume from a work as a new dataset. ![volumes]( /images/Volumes/Volumes.001.png)  The source: a work In the right column you see a work represented as a Text-Fabric dataset. From top to bottom you see all nodes. First a block of  slot nodes, corresponding to the basic units of the text. Here we assume that the words play that role. Subsequently you see nodes of other types, in this cases phrases, clauses etc. In a Text-Fabric dataset these types are just labels, with no built-in semantics. The only semantics of these other types is that their nodes are linked to slots. Nodes can be linked to arbitrary sets of slots, and this node-to-node mapping is stored as a special edge feature:  oslots . Most Text-Fabric datasets have a section configuration. That means that certain node types are declared as section levels. Here we assume that the node type  book acts as top-level sections.  The recipe: a volume specification A volume is a set of top-level sections. In this instance, we have to specify for each volume that we want to define which books are part of the volume. We are not allowed to define volumes that overlap in books. But we may define volumes in such a way that some books are left out of any volume.  The process: distribution and shuffling From the volume specification we know which books belong to a volume. From the  oslots edge feature, we know which slots belong to those books. From the inverse of  oslots we know which other nodes need to go into the volumes, namely those that are linked to at least slots in the books of the volume. For the moment, we sweep one problem under the carpet: what about nodes that are linked to slots inside and outside the volume? We come to that later. We now know which slots and other nodes belong to each volume. We then start defining each volume by listing its slots, starting from 1. Essentially, we take the slots from the original work inside that volume, and shift them all back so that they start with 1. Then we look at the higher types, one by one. We take the nodes of the first non-slot type. The first node that belongs to our volume is put right after the first slot, the next one right after that, and so on till all the nodes of that type are done. Then we continue with the next type. While we do that, we remember for each new node in the volume where it came from in the original work. We have now reshuffled the nodes. The next thing is to re-map the features. For each node feature, we look at the volume nodes, trace that node back to the original work look up the feature value there, and define that as the value of that feature for that node in the volume. Edge features refer to two nodes. We follow essentially the same process for edges, heavily using the mapping from volume nodes to original work nodes. For the moment, we sweep the second problem under the carpet: what about edges whose end-points are in different volumes?  The result: volume datasets The last column shows the datasets for each of the new volumes. Basically they consist of reshuffled nodes and remapped features. But they have a few things more:  they each have a feature  owork which maps each volume node to the corresponding node in the original work. This mapping had been useful to construct the volume, but it is also useful to have when you work with the volume. Because it enables you to transfer results obtained against a volume to the work the volume is part of.  all features in the volume have metadata statig the name and the top-level sections of this volume. This is important for registering provenance information.  There is more, and that has to do with the problems we encountered.  Problem 1: nodes with slots across volumes ![volumes]( /images/Volumes/Volumes.002.png) Lexemes are a good case of nodes that are linked to slots throughout the work. Think of a lexeme node as linked to all slots that count as occurrences of that lexeme. It is a rule rather than an exception when a lexeme has occurrences across books. When we extract a volume, we retain all nodes that have at least one slot in that volume. We then adapt the  oslots feature to discard all slots outside the volume from nodes. So, lexemes that span books end up in multiple lexeme nodes, one for each book where the lexeme occurs. When looking inside a book, this is not a problem. But when we collect volumes into a collection, and want to treat that collection as a single dataset, we end up with mutiple lexeme nodes for one lexeme. We want to be able to merge those nodes when the need arises. The mapping of nodes to their counterparts in the original work provides the means to do so. Whenever we collect volumes, we will identify nodes whose counterpart in the original work is identical. That is another reason why the  owork feature is a crucial ingredient of a volume.  Problem 2: inter-volume edges ![volumes]( /images/Volumes/Volumes.003.png) Cross-references are a good example of edges that link nodes across volumes. Here we see that clause nodes may be crossreferenced. The data of this is in the edge feature  crossref . In this corpus,  crossref annotates those edges with a similarity measure. In case of cross-references inside a single book, there is no problem. But when a clause in one book is cross-referenced with a clause in another book, we have a problem. One of the nodes of the edge is not in the volume, so we cannot store the information in the  crossref edge, nor in any other edge. Yet we cannot leave it out, because then we loose information. Because even from within a volume, it is relevant to know whether a clause points to another one in a different book. Or whether another clause in a different book points to it. Instead we store these bits of information in node features. Nodes that have dangling edges get a complex value that stores the name of the edge feature, the other node as it is known in the original work, and the value of the edge. This information ends up in feature  ointerfrom for edges whose starting point is inside the volume. Edges with their end point in the volume get an entry in  ointerto . When we collect volumes together, we can use  ointerfrom and  ointerto to reinstate edges that are no longer dangling in the collection of volumes.  Collecting We have mentioned it several times: we can collect volumes into new datasets: collections. On the one hand, the  extract() function with its volume specification argument is so flexible, that you do not need a function to collect volumes together: you could have extracted the collection as a volume straight away. But consider this scenario:  you have extracted all books of the Hebrew Bible as single volumes;  now you want to query across several books, say the poetry books  then you feel the need to also query the prophetic books For this you create collections, out of the book volumes. You can build your queries, run them against your collections. You can transform the results (which are tuples of tuples of nodes) into results against the individual volumes or against the whole work, using the  owork features of volumes and collections. For the moment Text-Fabric is still lacking in handy functions to apply these node maps, but that will probably change in subsequent versions. A more intrinsic reason to develop the collect function is that it is an inverse of extracting several volumes from one work. Moreover, collecting extracted volumes is a test whether the problems of extraction have been dealt with correctly. Extraction produces extra data and collection uses that extra data. Just as a volume has metadata in its features that describes the volume, in terms of its top-level sections, so a collection has metadata that describes it in terms of the volumes it contains. The more strategic reason to have collections too is that Text-Fabric could benefit from a good deal of agility in on-the-fly extracting and recombining portions of a work. Think of collections of cuneiform tablets. Tablets are loosely organized by period and/or geography and/or language. Having all transcribed tablets in one corpus introduces several problems:  there will be a strict but rather arbitrary order on the tablets  most research is done on subsets of tablets, so loading all tablets all the time is cumbersome. But as soon as you organize the tablets in families and turn those families into datasets, it is almost guaranteed that some researchers want a set of tablets that cuts through these families. This problem can be alleviated by making a number of fairly big corpora, each divided into compact volumes. When researchers can freely extract volumes from these corpora and recombine them, even across corpora, they have a workable situation. In theory it is then also possible to create a  virtual work containing all tablets. This virtual work is not meant to be loaded in one go, but serves merely as a provider of  original work nodes , so that when volumes are extracted, each volume is able to address itself in the space of all tablets.  In practice Text-Fabric offers volume and collection support for works that have a section structure ( tf.core.text ). There is a [tutorial, based on the BHSA corpus,](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/volumes.ipynb) which guides you through all steps and peculiarities. Sections of level 1 (top-level) play a crucial role: We define  a  volume as an ordered set of top-level sections of a work.  a  collection as an ordered set of volumes of a work. Text-Fabric offers support for creating and collecting volumes and loading volumes and collections. There are several ways to do so, we start with the easiest and highest level way, and go down to the lower level and more generic ways. Suppose we have a work in org/repo:  work =  \"org/repo\" .  With  A = use() If you have loaded a work like this:  A = use(work,  .) then you can extract and collect volumes directly by   A.extract(volumes)   where  volumes is a specification of which top-level sections go in which volumes. See  tf.fabric.Fabric.extract If you have created volumes, you can then collect some of them into a collection by   A.collect(volumes, collection)   where  volumes is a list of volume names and  collection is the name of a new collection. See  tf.fabric.Fabric.extract When you have volumes and collections created with these methods, you can load them as follows:   A = use(work, volume=volume)   where volume is the name of a volume, and   A = use(work, collection=collection)   where collection is the name of a collection. See  tf.advanced.app.App .  ! note \"Location of volumes and collections\" Volumes and collections created this way reside in a directory  _local right under the directory where the work resides.  With  TF = Fabric() If you have loaded a work like this:  TF = Fabric(locations, modules,  .) then you have essentially the same API for extract, collect, and load:   TF.extract(volumes) TF.collect(volumes, collection) TF = Fabric(locations, modules, volume=volume) TF = Fabric(locations, modules, collection=collection)   See  tf.fabric.Fabric.extract ,  tf.fabric.Fabric.collect ,  tf.fabric.Fabric .  With plain functions  extract and  collect The workhorses for extract and collect are also available as plain functions. You can use them if the volumes and collections are taken from other places and need to be created in other places. See  tf.volumes.extract and  tf.volumes.collect .  Reflection Extracting a volume from a Text-Fabric work turns out to be a complex operation. Can we change the data model of Text-Fabric in such a way that taking a portion becomes a triviality? Let's think about it. What is a bit weird in the data model is that the node sequence has an internal structure: the first nodes are slots, and after that come intervals of nodes of other types, one interval per type. If we could relax these requirements, and allow that each node can have a type independent of where it occurs, then we could simply copy over the features and cut away the entries for nodes outside the extracted portion. > Objection: much of the efficiency of Text-Fabric directly stems from these requirements. For example, the information about node types is now stored in a very small feature  otype . Also the linking of non-slot nodes to slots is stored rather efficiently in the feature  oslots . Alternatively, we could represent nodes in a richer way than just by natural numbers. We could represent nodes of type  t by tuples (1,  t ), (2,  t ), etc. This will prevent a lot of shifting of nodes and a lot of remapping. > Objection: it will not prevent all remapping, there will still be quite a burden for the developer here. Moreover, moving away from natural numbers as an addressing scheme will make greatly inflate the storage of features and will make the inner workings of Text-Fabric more difficult. The main advantage of natural numbers is that they are  .  natural . For example, the lines in a file form a sequence. If you put a value on line  n , you can interpret as a mapping from  n to that value, without spending any bits on representing the  n . The same holds for lists, arrays, and any iterable. There is one overarching objection, though. Extracting and collecting volumes are rare operations, that is, compared to all operations when running Text-Fabric on a dataset. When we need to choose where to optimize, we should do it where the computer spends the most time. And that is a choice I have made long before I developed Text-Fabric."
},
{
"ref":"tf.about.browser",
"url":70,
"doc":" Browser The Text-Fabric package contains a command to work with your corpus in your browser. It sets up a local web server, which interacts with your web browser. Then you can view and search the corpus without programming and without internet connection.  Start up Below, when you see  app , you have to substitute it by the name of an existing TF app. The Text-Fabric browser fetches the apps and corpora ( tf.about.corpora ) it needs from GitHub/GitLab automatically.  ! hint \"On Windows?\" You can click the Start Menu, and type text-fabric app in the search box, and then Enter.  ! hint \"On Linux or Macos?\" You can open a terminal (command prompt), and just say text-fabric app  ! explanation \"All platforms\" The corpus data will be downloaded automatically, and be loaded into text-fabric. Then your browser will open and load the search interface. There you'll find links to further help.  More data You can let TF use extra features: text-fabric app  mod=org/repo/path text-fabric app  mod=org/repo/path -c text-fabric app  mod=org/repo/path,org/repo/path Here  org ,  repo and  path must be replaced with a github user or organization, a github repo, and a path within that repo. Read more about your data life-cycle in the Data guide ( tf.about.datasharing ).  Custom sets You can create custom sets of nodes, give them a name, and use those names in search templates. The TF browser can import those sets, so that you can use such queries in the browser too. text-fabric app  sets=filePath  Start a TF browser for  app .  Loads custom sets from  filePath .  filePath must specify a file on your local system (you may use  ~ for your home directory). That file must have been written by calling  tf.lib.writeSets . If so,it contains a dictionary of named node sets. These names can be used in search templates, and the TF browser will use this dictionary to resolve those names. See  tf.search.search.Search.search , the  sets argument].  Jobs Your session (aka  job ) will be saved in your browser, under the name  app -default , or another name if you rename, duplicate, import or create new sessions. After you have issued the  text-fabric command, a  TF kernel is started for you. This is a process that holds all the data and can deliver it to other processes, such as your web browser. As long as you leave the TF kernel on, you have instant access to your corpus. You can open other browsers and windows and tabs with the same url, and they will load quickly, without the long wait you experienced when the TF kernel was loading.  Shut down You can close the TF kernel and web server by pressing Ctrl-C in the terminal or command prompt where you have started  text-fabric . It will prompt you to ask if you really want to shut down the kernel. If you leave it on, a next TF browser session will connect to it, which is quicker than to start up a fresh kernel. You can also manually clean up TF related processes: text-fabric app -k Or, if you have also processes running for other apps: text-fabric -k  Work with exported results You can export your results to CSV files which you can process with various tools, including your own. You can use the \"Export\" tab to tell the story behind your query and then export your view. A new page will open, which you can save as a PDF. There is also a button to download all your results as data files.  Exported materials job.json : A json file with all information associated with your current session. You can import this in the Jobs section, and restore the session by which you created these results. about.md : a Markdown file with your description and some provenance metadata. resultsx.tsv : contains your precise search results, decorated with the features you have used in your searchTemplate. Not only the results on the current page, but  all results. results.tsv : contains your precise search results, as a list of tuples of nodes. Not only the results on the current page, but  all results. sections.tsv : contains the sections you have selected as a list of nodes. nodes.tsv : contains the nodes you have selected as a list of tuples of nodes. nodesx.tsv : contains the nodes you have selected as a list of tuples of nodes, decorated with location information and text content. Now, if you want to share your results for checking and replication, put all this in a research repository or in a GitHub/GitLab repository, which you can then archive to [ZENODO](https: zenodo.org) to obtain a DOI.  Unicode in Excel CSVs The file  resultsx.tsv is not in the usual  utf8 encoding, but in  utf_16 encoding. The reason is that this is the only encoding in which Excel handles CSV files properly. So if you work with this file in Python, specify the encoding  utf_16 . with open('resultsx.tsv', encoding='utf_16') as fh: for row in fh:  do something with row Conversely, if you want to write a CSV with Hebrew in it, to be opened in Excel, take care to:  give the file name extension  .tsv (not  .csv )  make the file  tab separated (do not use the comma or semicolon!)  use the encoding  utf_16_le (not merely  utf_16 , nor  utf8 !)  start the file with a BOM mark. with open('mydata.tsv', 'w', encoding='utf_16_le') as fh: fh.write('\\uFEFF') for row in myData: fh.write('\\t'.join(row fh.write('\\n')  ! explanation \"Gory details\" The file has been written with the  utf_16_le encoding, and the first character is the unicode FEFF character. That is needed for machines so that they can see which byte in a 16 bits word is the least end ( le ) and which one is the big end ( be ). Knowing that the first character is FEFF, all machines can see whether this is in a  least-endian (le) encoding or in a  big-endian (be) . Hence this character is called the Byte Order Mark (BOM). See more on [wikipedia](https: en.wikipedia.org/wiki/Byte_order_mark). When reading a file with encoding  utf_16 , Python reads the BOM, draws its conclusions, and strips the BOM. So when you iterate over its lines, you will not see the BOM, which is good. But when you read a file with encoding  utf_16_le , Python passes the BOM through, and you have to skip it yourself. That is unpleasant. Hence, use  utf_16 for reading."
},
{
"ref":"tf.about.usefunc",
"url":71,
"doc":" Summary The function  tf.app.use lets you make use of a corpus in the same way as the  use statements in MySQL and MongoDb let you make use of a database. It loads the features of a corpus plus extra modules, it loads the Text-Fabric app or a customization of it, and makes it all available in an API. If any of the above mentioned ingredients is not locally available on your computer, it will auto-download it, subject to checkout specifiers that you provide.  Basic usage:   A = use(\"org/repo\")   or   A = use(\"org/repo:specapp\", checkout=\"specdata\")     A = use(\"org/repo:specapp\", checkout=\"specdata\", backend=\"gitlab.huc.knaw.nl\")   See  tf.about.corpora for a list of known corpora that can be loaded this way.  Full usage   A = use( \"org/repo:specapp\", backend=None,  e.g. \"gitlab.huc.knaw.nl\" checkout=None,  e.g. \"latest\" version=None,  e.g. \"1.2.3\" mod=None,  e.g. \"org1/repo1/path1:specmod1,org2/repo2/path2:specmod2\" setFile=None,  e.g. \"path/to/file\" legacy=False, hoist=globals(), locations=None, modules=None, volume=None, collection=None, silent=\"auto\", loadData=True,  configOverrides, )    Legacy usage:   A = use(\"corpus\")   or   A = use(\"corpus\", legacy=True)    Security  ! caution \"Security warning\" Text-Fabric apps may be downloaded from GitHub/GitLab and then imported as a module and then  executed . Do you trust the downloaded code? Make sure you know the repository where the code comes from, and the people who own the repository.  ! note \"Security note\" Text-Fabric data maybe downloaded from arbitrary repositories on GitHub/GitLab, but the downloaded material will be read as  data and not executed as code.  Details When loading a corpus via this method, most of the features in view will be loaded and made available. However, some Text-Fabric apps may exclude some features from being automatically loaded. And in general, features whose names start with  omap@ will not be automatically loaded. Any of these features can be loaded on demand later by means of  tf.advanced.app.App.load() . During start-up the following happens: 1. the corpus data may be downloaded to your  ~/text-fabric-data directory, if not already present there; 2. if your data has been freshly downloaded, a series of optimizations is executed; 3. most features of the corpus are loaded into memory. 4. the data is inspected to derive configuration information for the advanced API; if present, additional settings, code and styling is loaded.  Loading Loading a corpus consists of 2 separate steps: 1. load the  app of the corpus (config setting, static material, python code) 2. load the  data of the corpus. Both items can be specified independently, in terms of where they reside locally or online. Such a specification consists of a  path and a  checkout specifier . The  path part looks like a directory, and specifies a location inside a repository, e.g.  etcbc/bhsa . The  checkout specifier part is a keyword:   local under your local directory  ~/text-fabric-data   clone under your local directory  ~/github   latest under the latest release, to be checked with online backend   hot under the latest commit, to be checked with online backend   v1.2.3 under release  v1.2.3 , to be fetched from online backend   123aef under commit  123aef , to be fetched from online backend   absent under your local directory  ~/text-fabric-data if present, otherwise the latest release on backend, if present, otherwise the latest commit on backend For a demo, see [banks/repo](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/tutorial/repo.ipynb).  Specifying app and/or data By default, the online repository for apps and data is GitHub (https: github.com). But you can also use GitLab instances. You do that by specifying the server location in the parameter  backend , e.g.   backend=\"gitlab\"     backend=\"gitlab.knaw.huc.nl\"   Synonyms:   None ,    ,  github.com ,  github   gitlab.com ,  gitlab The specification of the app is in the first argument:  app-path : app-checkout-specifier The normal case is where  app-path has the form  org/repo pointing to a repository that holds the corpus, both app and data. If we find an app under  app-path , it will have information about where the data is, so the  data-path is known. The  data-checkout-specifier is passed as an optiona argument:  checkout= data-checkout-specifier . So far we have described how to use a TF corpus which has an  app inside in the standard location, i.e. as org/repo/ app . But app and data may also reside in arbitrary places, and for that there is additional syntax in the first argument:   app:full/path/to/tf/app  Specify the location of the app . You may not append a  checkout specifier to this.   data:full/path/to/tf/data/version  Do not try to find an app, but point to the data instead (a generic TF app with default settings will be used). You may pass a  checkout specifier by appending  : xxx .   corpus  legacy way of calling an app by its name only . Find a TF app in repo  annotation/app- corpus . Without  legacy=True , you get a warning, and TF assumes the TF app has been migrated from annotation/app-corpus to org/repo/app, and it loads the app from there. If you pass  legacy=True you do not get that warning, and TF loads the app from annotation/app-corpus. You have to use this if you go back in the history to times where the legacy method was the only method of loading a corpus. The older history of the app is preserved in annotation/app-corpus, but not in the migrated org/repo/app.  Versions Text-Fabric expects that the data resides in version directories. The configuration of a corpus app specifies which version will be used. You can override that by passing the optional argument  version=\"x.y.z\" . Where we do not have a corpus app that specifies the version, i.e. if you pass a  data:path/to/tf/data string you must either:  specify the paths so that they include the version directory  specify the path to the parent of the version directories and pass  version=\"x.y.z\"  ! caution \"Modules\" If you also ask for extra data modules by means of the  mod argument, then the corresponding version of those modules will be chosen. Every properly designed data module must refer to a specific version of the main source!  Modules and sets Besides the main corpus data, you can also draw in other data.  Modules They are typically sets of features provides by others to enrich or comment the main corpus. A module is specified in much the same way as the main corpus data. The optional  mod argument is a comma-separated list or an iterable of modules in one of the forms   {org}/{repo}/{path}   or   {org}/{repo}/{path}:data-checkout-specifier   All features of all those modules will be loaded. If they are not yet present, they will be downloaded from a backend first. For example, there is an easter egg module on GitHub, and you can obtain it by   mod='etcbc/lingo/easter/tf'   Here the  {org} is  etcbc , the  {repo} is  lingo , and the  {path} is  easter/tf under which version  c of the feature  egg is available in TF format. You can point to any such directory om the entire GitHub if you know that it contains relevant features. Your TF app might be configured to download specific modules. See  moduleSpecs in the app's  config.yaml file. If you need these specific module with a different checkout specifier, you can override those by passing those modules in this parameter explicitly.  ! hint This is needed for example if you specify a specific release for the core data module. The associated standard modules probably do not have that exact same release, so you have to look up their releases in GitHub/GitLab, and attach the release numbers found to the module specifiers.  ! caution \"Let TF manage your text-fabric-data directory\" It is better not to fiddle with your  ~/text-fabric-data directory manually. Let it be filled with auto-downloaded data. You can then delete data sources and modules when needed, and have them redownloaded at your wish, without any hassle or data loss.  Sets They are named nodesets, that, when imported, can be used in [search templates](https: annotation.github.io/text-fabric/tf/about/searchusage.html simple-indent-nameotype-or-set-features) as if they were node types. You can construct them in a Python program and then write them to disk with  tf.lib.writeSets . When you pass that file path with  setFile=path/to/file , the named sets will be loaded by Text-Fabric. See also  tf.search.search.Search.search and  tf.lib.readSets .  Overrides Sometimes you need to deviate from settings that have been specified in the TF app that you invoke. Or you want to set things explicitly when you do not invoke a TF app. You can prepare a dictionary of such settings, say  configOverrides , and pass the contents as keyword arguments:  configOverrides . The list of possible settings is spelled out in  tf.advanced.settings .  ! hint \"Corpus has moved\" Suppose you want to work with an older version of the corpus. A complication occurs if the repo has been renamed and/or moved to an other organization. When you go back in the history and download an older version of the app, its configuration settings specify a different org, repo and relative path than what is currently the case. Here the possibility to override settings come to the rescue. A good example is in [clariah/wp6-missieven](https: nbviewer.org/github/clariah/wp6-missieven/blob/master/tutorial/annotate.ipynb) which resided in annotation/clariah-gm before, and in Dans-labs/clariah-gm even earlier. When we want to migrate manual annotations made against the 0.4 version to the 0.7 version, we run into this issue. But we can still load the 0.4 version by means of  A = use( \"missieven:v0.4\", checkout=\"clone\", version=\"0.4\", hoist=globals(), legacy=True, provenanceSpec=dict(org=\"clariah\", repo=\"wp6-missieven\"), )   Hoisting The result of  A = use() is that the variable  A holds an object, the corpus app, loaded in memory, offering an API to the corpus data. You get that API by  api = A.api , and then you have access to the particular members such as   F = api.F (see  tf.core.nodefeature.NodeFeature )   L = api.L (see  tf.core.locality.Locality )   T = api.T (see  tf.core.text.Text )   TF = api.TF (see  tf.core.fabric.FabricCore ) If you work with one corpus in a notebook, this gets cumbersome. You can inject the global variables  F ,  L ,  T ,  TF and a few others directly into your program by passing  hoist=globals() . See the output for a list wof the new globals that you have got this way. Do not do this if you work with several corpora or several versions of a corpus in the same program!  Volumes and collections Instead of loading a whole corpus, you can also load individual volumes or collections of individual volumes of it. If your work is confined to a volume or collection, it might pay off to load only the relevant pieces of the corpus. Text-Fabric will maintain the details of the relationship between the parts and the whole.  ! caution \"Volumes and collections\" It is an error to load a volume as a collection and vice-versa You get a warning if you pass both a volume and a collection. The collection takes precedence, and the volume is ignored in that case.  Volumes If you pass  volume=volume-heading TF will load a single volume of the work, specified by its heading. The volume is stored in a directory with  .tf files, located under the directory  _local which is in the same directory as the  .tf files of the work. See  tf.about.volumes .  Collections If you pass  collection=\"collection-name\" TF will load a single named collection of volumes of the work. The collection is stored in a directory with  .tf files, located under the directory  _local which is in the same directory as the  .tf files of the work. See  tf.about.volumes .  Lower level  locations, modules You can add other directories that TF will search for feature files. They can be passed with the  locations and  modules optional parameters. For the precise meaning of these parameters see  tf.core.fabric.FabricCore .  ! note \"More, not less\" Using these arguments will load features on top of the default selection of features. You cannot use these arguments to prevent features from being loaded. Read on to see how you can achieve the loading of fewer features.  api So far,  A = use() will construct an advanced API with a more or less standard set of features loaded, and make that API avaible to you, under  A.api . But you can also setup a core API yourself by usin the lower level method  tf.core.fabric.FabricCore with your choice of locations and modules:   from tf.fabric import Fabric TF = Fabric(locations= ., modules= .) api = TF.load(features)   Here you have full control over what you load and what not. If you want the extra power of the TF app, you can wrap this  api :   A = use(\"org/repo\", api=api)   or   A = use(\"app:path/to/app\", api=api)   etc.  ! hint \"Unloaded features\" Some apps do not load all available features of the corpus by default. This happens when a corpus contains quite a number of features that most people never need. Loading them cost time and takes a lot of RAM. In the case where you need an available feature that has not been loaded, you can load it by demanding TF.load('feature1 feature2', add=True) provided you have used the  hoist=globals() parameter earlier. If not, you have to say A.api.TF.load('feature1 feature2', add=True)  Silence Loading a corpus can be quite noisy in the output. You can reduce that by means of the  silent parameter. The default is  auto , which suppresses most messages of the loading of individual features, except the potentially time-consuming ones. If you pass  terse , also these time-consuming operations will not be displayed. If you pass  clean , nearly all output of this call will be suppressed, including the links to the loaded data, features, and the API methods. Error messages will still come through. If  deep , all output will be suppressed, except errors. The value  verbose is like  auto , with the following extras: after a corpus has been loaded, a header is produced showing information about all features loaded, including their descriptions as given in the metadata of the features. With  verbose , not only the descriptions, but  all metadata fields of the features are included. Usually this will generate a big HTML string with a lot of redundant information.  Prevent data loading Data loading is costly. If you need to get some information of a TF dataset that is not dependent on loaded data features, you can suppress the loading of data by   A = use(\"org/repo\", loadData=False)   You can also prevent loading data of modules that are associated with the code data by default. These are the ones specified in the  config.yaml file of the corpus app under  provenanceSpec > moduleSpecs :   A = use(\"org/repo\", loadData=\"core\")  "
},
{
"ref":"tf.about.releases",
"url":72,
"doc":" Release notes  ! hint \"Consult the tutorials after changes\" When we change the API, we make sure that the tutorials show off all possibilities. See the app-specific tutorials via  tf.about.corpora .  -  11  11.2  11.2.1 (Upcoming) 2023-02- Addition to the nbconvert tool:  tf.tools.nbconvert : If you pass only an input dir, it creates an html index for that directory. You can put that in the top of your  public folder in GitLab, so that readers of the Pages documentation can navigate to all generated docs. A fix in  tf.tools.xmlschema : while analysing definitions in an  xsd file, the imports of other  xsd files were not heeded. Now they are. But not recursively, because in the examples I saw, files imported each other mutually or with cycles. Various enhancements to the  tf.convert.TEI conversion:  a fix in whitespace handling (the whitespace removal was a bit too aggressive), the root cause of this was the afore-mentioned bug in  tf.tools.xmlschema ;  a text format with layout is defined and set as the default;  text within the tei header and notes is displayed in a different color. A fix of an error, spotted by Christian C. H\u00f8ygaard, while loading a TF resource in a slightly unusual way.  11.2.0 2023-02-16  New converter: TEI to TF This is a generic, but also somewhat dumb, converter that takes all information in a nest of TEI files and transforms it into a valid and ready-to-use TF dataset. But it is also a somewhat smart, because it generates a TF app and documentation for the new dataset. See  tf.convert.tei  New command line tool: nbconvert  sh nbconvert inDirectory outDirectory   Converts a directory of interlinked notebooks to HTML and keeps the interlinking intact. Handy if you want to show your notebooks in the Pages service of GitHub or GitLab, bypassing NBViewer. See  tf.tools.nbconvert  New command line tool: xmlschema  sh xmlschema analyse schema.xsd   Derives meaningful information from an XML schema. See  tf.tools.xmlschema  New API function: flexLink  A.flexLink() generates an app-dependent link to a tutorial or document served via the Pages of GitHub or GitLab. See  tf.advanced.links.flexLink  Other improvements Various app-configuration improvements under the hood, solving all kinds of edge cases, mostly having to do with on-premiss GitLab backends.  11.1  11.1.4 2023-02-12 Small improvement in rendering features with nodes: if a feature value ends with a space, it was invisible in a pretty display. now we replace the last space by a non-breaking space. Small fix for when Text-Fabric is installed without extras, just  pip install text-fabric and not  pip install 'text-fabric[all]' In that case text-fabric referred to an error class that was not imported. Spotted by Martijn Naaijer. Fixed.  11.1.3 2023-02-03 In the Text-Fabric browser you can now resize the column in which you write your query.  11.1.2 2023-01-15 Small fix in math display.  11.1.1 2023-01-13 Small fixes  11.1.0 2023-01-12 Mathematical formulas in TeX notation are supported. You can configure any app by putting  showMath: true in its  config.yaml , under interface defaults. Several small tweaks and fixes and the higher level functions: how text-fabric displays nodes in Jupyter Notebooks and in the Text-Fabric browser. It is used in the [letters of Descartes](https: github.com/CLARIAH/descartes-tf).  11.0  11.0.7 2022-12-30 This fixes issue [ 78](https: github.com/annotation/text-fabric/issues/78), where Text-Fabric crashes if the binary data for a feature is corrupted. This may happen if Text-Fabric is interrupted in the precomputation stage. Thanks to [Seth Howell](https: github.com/sethbam9) for reporting this.  11.0.6 2022-12-27  Small fix in the TF browser ( prettyTuple() is called with  sec= instead of  seq= ).  Fix in advanced.search.py, introduced by revisiting some code that deals with sets. Reported by Oliver Glanz.  11.0.4-5 2022-12-18  Improved display of special characters in text-fabric browser.  When custom sets are loaded together with a data source, they are automatically passed to the  sets parameter in  A.search() , so that you do not have to pass them explicitly.  The header information after loading a dataset is improved: it contains a list of the custom sets that have been loaded and a list of the node types in the dataset, with some statistics.  In the Text-Fabric browser this header information is shown when you expand a new tab in the side bar:  Corpus .  11.0.3 2022-12-17  Backends Small fixes for problems encountered when using gitlab backends.  Search Fixed a problem spotted by Camil Staps: in the Text-Fabric browser valid queries with a quantifier gave error-like messages and no results.  The cause was two-fold: the processing of quantifiers led to extra informational messages. (This is a regression)  The Text-Fabric browser interpreted these messages as error messages. Both problems have been fixed.  The extra informational messages are suppressed (as it was earlier the case).  The result that the kernel passes to the webserver now includes a status parameter, separate from the messages, which conveys whether the query was successfull. Queries with informational messages and a positive status will have their results shown as well as their messages.  11.0.2 2022-12-04 Text-Fabric will detect if it runs on an iPad. On an iPad the home directory  ~ is not writable. In that case, Text-Fabric will use  ~/Documents instead of  ~ consistently. When Text-Fabric reports filenames on the interface, it always  unexpanduser s it, so that it does not reveal the location of your home directory. Normally, it replaces your home directory by  ~ , but on iPad it replaces  your home directory /Documents by  ~ . So if you publish notebooks made on an iPad or made on a computer, there is no difference in the reported file names.  11.0.1 2022-11-18 Small fixes: the newest version of the [pygithub](https: pygithub.readthedocs.io/en/latest/introduction.html) module issues slightly different errors. Text-Fabric did not catch some of them, and went on after failures, which led to unspeakable and incomprehensible further errors. That has been fixed. As a consequence, we require the now newest release of that module, which in turns requires a Python version of at least 3.7.0. So we have bumped the Python requirement for Text-Fabric from 3.6.3 to 3.7.0.  11.0.0 2022-11-11 Text-Fabric can be installed with different capabilities. On some platforms not all requirements for Text-Fabric can be met, e.g. the Github or GitLab backends, or the Text-Fabric browser. You can now install a bare Text-Fabric, without those capabilities, or a more capable Text-Fabric with additional capabilities. Text-Fabric will detect what its capabilities are, and issue warnings if it asked to do tasks for which it lacks the capabilities. See more in  tf.about.install .  -  Older releases See  tf.about.releasesold ."
},
{
"ref":"tf.about.clientmanual",
"url":73,
"doc":" Quick start This is the manual for the full interface. There is a separate manual for the simplified interface:  tf.about.manual . ![interface]( /images/ls/ls.001.png)  1. about : Read the colofon, with provenance and license information.  2. jobs : Manage your search tasks. They are remembered by your browser. You can start new jobs, rename, duplicate and delete them. You can import jobs from file and export them to file.  ! hint Use this when switching between browsers. That includes sharing jobs with other people.  3. levels, layers, regexes : The corpus is represented in multiple ways: the  layers . They have been generated by choosing a  level (such as text, line, word), and representing the objects of that level by some of their  features (such as title, number, transcription). Each layer can be searched by means of a search pattern. Such patterns are technically  regular expressions ; from now on we use the term  regex , plural  regexes . To see what it means to search in several layers and levels at the same time: see section  Meaning below.  ! hint Read [background on regexes](https: en.wikipedia.org/wiki/Regular_expression) and [cheatsheet](https: developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).  3a. legend : Some layers have a triangle in front of their names. These are layers that consist of a limited amount of keywords. If they are acronymns, you can see their legend here. Otherwise, you see a frequency list of there values here. ![values]( /images/ls/ls.008.png)  3b. text of a layer : You can click on the name of each layer to show and hide the full text of that layer. So that you know the material in which you are searching.  4. flags : When searching with regexes, you can alter their interpretation by setting some  flags :   i : case-insensitive;   m : multiline:  ^ and  $ match around embedded newlines;   s : single-string:  . also matches newlines.  5. on/off : Regexes can be switched off and on.  ! hint Use this to explore the effect of individual regexes.  6. focus : The level that corresponds with a single row in the results table. Think of result rows as  observations with  features .  7. hide/show : Whether a layer/level should show up in the results. Showing a level means showing their objects by their identifying numbers. See option  nodes and ordinals below.  ! hint You can show layers in which you do not search, and hide layers in which you do search.  8. execute : Press this to execute the current search job.  ! hint There is an option to do this automatically whenever you have changed something in the search criteria.  9. stats : Statistics of the current search results, compared to the statistics of the whole corpus.  10. options : Modify the behaviour of search/export. See  Options below.  ! hint \"Special characters\" If your corpus has special characters, and you want to type them into the patterns, you can copy them from the  Special characters button . Just click on the character you need, and it is copied on the clipboard, so that you can paste it anywhere you like (even in other applications). ![chars]( /images/ls/ls.007.png)  ! hint \"Simplified interface\" Here is the button to switch back and forth between the simplified and the full interface.  11. export : Export the search results as a tab-separated file ( .tsv ). This file can be opened in Excel. All results are exported, not only the ones that show on the current page. The level of detail depends on the currently selected  focus level and the visible layers as set by  hide/show .  ! hint The precise organization of the export may depend on some of the options. See  Export below.  12. help : Various links to information that you frequently need: this help, the data features of the corpus, related corpus data.  13. feedback : File an issue on GitHub; please copy and paste the version of this app in any issue you file.  14. navigate : Walk through the results in various ways:  manual entry of the position number,  small jumps back and forth,  big strides with the slider.  ! hint Use keyboard shortcuts, all shortcuts need to be pressed with modifier keys: browser | Windows | - | Linux | - | Mac  - |  - |  - |  - |  - |  - Firefox |  Alt +  Shift | |  Alt +  Shift | |  Ctrl +  Option Chrome |  Alt +  Shift | |  Alt | |  Ctrl +  Option Edge |  Alt +  Shift | | | |  Ctrl +  Option Safari | | | | |  Ctrl +  Option shortcut | direction | amount  - |  - |  -  m | NA | manual entry of the result number  n |  n ext | one  p |  p revious | one  b |  b ack | a batch (half a screenful)  f |  f orward | a batch (half a screen)  s |  s tart | all the way  e |  e nd | all the way  15. position : The current position in the results table is marked.  16. previous position : The previous position in the results table is also marked, in a slightly less conspicuous way.  17. highlighting : The portions in the layer that match the corresponding regex are highlighted.  ! hint Highlights are exported by enclosing the text in \u00ab and \u00bb, but you can switch this off by means of an option. See  Options below.  18. links to online : The top level layers are linked to an online representation of the corpus. For example, for NENA it is the GitHub repository where the source texts are stored. For the BHSA it is [SHEBANQ](https: shebanq.ancient-data.org).  Meaning  Levels Your corpus is divided into levels, e.g. text/line/sentence/word/. At each level there are objects in the corpus and they can be represented in certain ways:  text are represented by their titles;  lines are represented by their numbers;  words are represented by the strings of which they are composed.  Layers Per level, there may be more than one way to represent the objects. For example, at the word level, you may have representations in the original script in unicode, but also various transliterations in ascii. All these representations are  layers that you can search. For example, the [NENA corpus](https: github.com/CambridgeSemiticsLab/nena_tf) contains various text representations, among which several are dedicated to phonetic properties. ![layers]( /images/ls/ls.003.png) Layers do not have to correspond with the text of the corpus. They can be based of arbitrary annotations that exist in the corpus.  Combined search In order to search, you specify search patterns for as many of the available layers as you want. When the search is performed, all these layers will produce results, and the results in one layer will be \"intersected\" with the results in all other layers. It might seem as if we are comparing apples and oranges, but our corpus has the structure to enable exactly this kind of operation. At each level we have a set of textual objects, called  nodes , and for each node we know exactly which textual positions they are linked to. When we compare the search results of two layers in one level, we know the textual position of each result in each layer. Hence we also know the nodes in those results. We take all nodes that are involved in the results of one layer as a set. We do the same for the other layer. Then we take the intersection of those sets. The resulting set is the nodeset defined by the combined results in the two layers. When we display them, we show the results in both layers, by showing the material of the result nodes according to the layer and we highlight the portions that match the regular expression in that layer. See the top half in the next figure. ![layers]( /images/ls/ls.009.png) The bottom half of the figure above shows what we do if we have to compare the results of layers in different levels. In that case, those layers have different kinds of result nodes, and we cannot take the intersection directly. However, we can  project the nodes of one level to those of another level by using the notion of embedding. We project a node  upward by mapping it to the node that embeds it. We project a node  downward by mapping it to all nodes that are embedded in it. By projecting the result nodes of one level to another level, we end up with two nodesets at the same level that we can intersect.  ! caution \"Beware of complicated criteria\" Before you devise sophisticated criteria, note that this search engine is not very refined in taking intersections. It takes the intersections of the joint results of the matches in the layers. It will not take the intersections of the individual matches. See the next figure for the difference. ![layers]( /images/ls/ls.010.png) If you look for  /aa. aa/ in the bottom layer, and then want to restrict the results by specifying that each result occurs within a  /PQ/ match of the top layer, you will be disappointed. That will only work if we had implemented a  strict semantics: the individual matches in the different layers should match exactly (after projection). Instead, in our loose semantics, matches in one layer are not discarded, but intersected with matches in an order layer. In fact, there is a whole spectrum of strictness, where it depends on the intention of the search which degree of strictness is desirable. For now, that is becoming way to complex, both to be usable and to be implementable. That is why we have opted for the lax interpretation. The bottomline is: use the search tool to grab the things that are potentially of interest. If you need to pinpoint further, export the results to Excel and use other tools/methods to achieve that.  Export You can export the search results to Excel (or rather, a tab-separated file,  .tsv ). When you do that,  all results will get exported, not only the ones that show on the interface. The organization of the exported results reflects the interface. It makes sense to think of the rows as observations, and the columns as properties of those observations. We may have issued multiple regexes to multiple layers, so we have to define our concept of observation. The first ingredient is our  focus level: the objects in this level are the units of observation. For each focus object there is a row in the result table. The focus objects have  context and  content . The  context consists of the objects that enclose the focus object. For each level of context objects there will be a column in the result row. The  content consists of the objects contained in the focus objects. We have a single column for the content of the focus objects.  ! example If the focus level is  sentence then the focus objects are sentences. The context of a  sentence consists of the  lines and  texts that contain that sentence. In this corpus each sentence has exactly 1  line and exactly 1  text in which it is contained. In other corpora that might be different: it could be more or less. The content of a sentence consists of all of its  word objects, concatenated. If the focus level is  line , then the focus objects are lines. The context of a  line consists of exactly 1  text that contains the line. The content of a line consists of all of its  sentence and  word objects, properly nested and concatenated.  ! caution \"An object is distinct from its content\" When we represent an object, we use the layers of the level of that object. Take a  text for example. There are a few layers for a text, such as dialect, place, title. Hence a text is represented by just its title, or its place, or its dialect, depending on which layer you use for the representation. The  content of a text is a much bigger thing. It is the collection of all its line, sentence, and word objects represented in their own layers. When we represent only the object, we call it a  shallow representation. When we represent the  content of an object, we call it a  deep representation. An observation is represented by:  shallow representations of the context objects,  a shallow representation of the focus object,  a deep representation of the focus object. All objects are represented ultimately by their material in the layers. When we display results or export them, we present all layers that you have selected by means of  hide/show .  ! note \"Multiple layers\" If multiple layers have been selected for some levels, we show them all on the interface in a graceful way. However, the format of a table is much more restricted, and we have to make a tough choice here: we can use extra columns or extra rows for multiple layers. Both have advantages and disadvantages.  layers to columns :   + : one result, one row, good for postprocessing   - : the layers of one object do not line up, difficult visual inspection  layers to rows :   - : one result, multiple rows, complicates postprocessing   + : the layers of one object line up, comfortable visual inspection Observe the difference: ![export]( /images/ls/ls.004.png)  Options ![options]( /images/ls/ls.002.png)  1. auto : Executes the search automatically whenever you have changed some criterion. Also updates the results when you have modified the focus and visibility of layers.  2. nodes versus ordinals : Each object in the corpus has a unique number: its  node number. Within a level, we can also enumerate all its objects, starting with 1. The ordinals identify objects uniquely within their level. You can choose wich of these numbers you want displayed.  ! hint Use nodes for interoperability with Text-Fabric; otherwise ordinals are more intuitive.  3. highlighting in exports : Highlighted matches are a valuable outcome of a search. But in exports, the highlight characters \u00ab \u00bb may hinder further processing. So you can omit them.  4. organisation of exports : When several layers are visible for a level, the question arises: how should we organize them in exported results? There are two options:  use extra rows for the extra layers;  use extra columns for the extra layers. You choose! The difference is shown in section  Exports above.  ! hint Use extra rows if you rely on visual inspection of the exported file in Excel. Use extra columns if you want to process the exported file by means of other tools, such as Pandas or R.  5. single or multiple highlights : If you use  ( ) for grouping in your regexes, the parts of the results that match these groups can be highlighted with different colours.  ! hint Not all browsers support this; the interface shows whether your browser supports it, and which other browsers support it.  ! hint This is handy for cases where you search for twice the same thing in a sentence, for instance. You can have both matches coloured differently.  Background information Layered-search is a way of full-text searching your corpus by means of [regular expressions](https: developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet). but with a twist: you can search in several layers of the corpus by means of several regexes in parallel. It is a method to make good use of the annotations that exist in the corpus at various levels. Regular expressions are a key tool for specifying sophisticated search patterns. Their theoretical foundation was layed in the 1950s, and by now they have been implemented in all major programming languages and in all powerful text-editors. If this is the first time you encounter them, it will pay off to get to know them well, because it is very likely that you encounter them again. For more background, read [wikipedia](https: en.wikipedia.org/wiki/Regular_expression).  The search interface as app We have implemented layered search as an offline Single Page Application. The app consists of a single HTML file ( app .html ), a CSS file, PNG files (logos) and Javascript files. The corpus data is in a big Javascript file, the corpus configuration in a small one. The remaining Javascript files are the modules of the program. Modern browsers can take in modular Javascript, except when you have the HTML file locally on your computer and you open it with a double click. Your browser has then  file:  in its URL bar, and in that case modular Javascript does not work. To overcome that, we have also bundled the program in a single file, and that is included by  app - local.html . From within the app, you can download a zip file with  app -local.html in it, so that you can have the full search experience completely off-line. Also when you have opened this page over the internet, once your browser has downloaded the complete app, all interaction between you and the search app happens at your browser, without further internet connection (except when you navigate to external links). As a consequence  this app works without any kind of installation  it does not collect data about you  it does not use cookies.  it works without internet connection When the browser remembers your previous jobs, it does not use cookies for it but [localStorage](https: developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), which other sites cannot read.  Making this app The construction of this app relies very much of the organization of the corpus as a Text-Fabric dataset. The process of creating a layered search functionality is baked into Text-Fabric. The designer needs to specify the layers in a  .yaml file and write a small piece of code to generate the data for the layers from the corresponding Text-Fabric dataset. See e.g. [app-nena/layeredsearch](https: github.com/CambridgeSemiticsLab/nena_tf/tree/master/app). All the rest (building, shipping, and deploying the app) is then automatic, See  tf.client.make.build . The first layered search interface created this way is one for the [NENA](https: github.com/CambridgeSemiticsLab/nena_tf) corpus. We intend to make more interfaces for other Text-Fabric corpora, reducing and streamlining the preparation effort in the process.  Credits The idea for this app came out of a discussion of [Cody Kingham](https: www.linkedin.com/in/cody-kingham-1135018a) and me about how we could make a simple but usable search interface for people that need to get hands on with a Text-Fabric corpus. Given that we have the corpus data at our finger tips through Text-Fabric, but that TF-Query ( tf.about.searchusage ) does not cover over all use cases, and requires installing Python, we adopted the approach to assemble data and power a simple Javascript program with it. The first implementation of these idea was funded by [Prof. Geoffrey Khan](https: www.ames.cam.ac.uk/people/professor-geoffrey-khan), reviewed by Cody Kingham and the people of [Cambridge Semitics Lab](https: github.com/CambridgeSemiticsLab/nena_corpus) and eventually written by [Dirk Roorda](https: pure.knaw.nl/portal/en/persons/dirk-roorda)."
},
{
"ref":"tf.about.fileformats",
"url":74,
"doc":" Text-Fabric File Format  Overview A  .tf feature file starts with a  header , and is followed by the actual data. The whole file is a plain text in UNICODE-utf8.  Header A  .tf feature file always starts with one or more metadata lines of the form   @key   or   @key=value   The first line must be either   @node   or   @edge   or   @config   This tells Text-Fabric whether the data in the feature file is a  node feature or an  edge feature. The value  @config means that the file will be used as configuration info. It will only have metadata. There  must also be a type declaration:   @valueType=type   where type is  str or  int .  @valueType declares the type of the values in this feature file. If it is anything other than  str (= string ), Text-Fabric will convert it to that type when it reads the data from the file. Currently, the only other supported type is  int for integers. In edge features, there  may also be a declaration   @edgeValues   indicating that the edge feature carries values. The default is that an edge does not carry values. The rest of the metadata is optional for now, but it is recommended to put a date stamp in it like this   @dateCreated=2016-11-20T13:26:59Z   The time format should be [ISO 8601](https: en.wikipedia.org/wiki/ISO_8601).  Data After the metadata, there must be exactly one blank line, and every line after that is data.  Data lines The form of a data line is   node_spec value   for node features, and   node_spec node_spec value   for edge features. These fields are separated by single tabs.  NB : This is the default format. Under  Optimizations below we shall describe the bits that can be left out, which will lead to significant improvement in space demands and processing speed.  Node Specification Every line contains a feature value that pertains to all nodes defined by its  node_spec , or to all edges defined by its pair of  node_spec s. A node spec denotes a  set of nodes. The simplest form of a node spec is just a single integer. Examples:   3 45 425000   Ranges are also allowed. Examples   1-10 5-13 28-57045   The nodes denoted by a range are all numbers between the endpoints of the range (including at both sides). So   2-4   denotes the nodes  2 ,  3 , and  4 . You can also combine numbers and ranges arbitrarily by separating them with commas. Examples   1-3,5-10,15,23-37   Such a specification denotes the union of what is denoted by each comma-separated part.  NB As node specs denote  sets of nodes, the following node specs are in fact equivalent   1,1 and 1 2-3 and 3,2 1-5,2-7 and 1-7   We will be tolerant in that you may specify the end points of ranges in arbitrary order:   1-3 is the same as 3-1    Edges An edge is specified by an  ordered pair of nodes. The edge is  from the first node in the pair  to the second one. An edge spec consists of two node specs. It denotes all edges that are  from a node denoted by the first node spec  to a node denoted by the second node spec. An edge might be labelled, in that case the label of the edge is specified by the  value after the two node specs.  Value The value is arbitrary text. The type of the value must conform to the  @valueType declaration in the feature file. If it is missing, it is assumed to be  str , which is the type of Unicode-utf8 strings. If it is  int , it should be a valid representation of an integer number, There are a few escapes:     backslash   \\t tab   \\n newline These characters MUST always be escaped in a value string, otherwise the line as a whole might be ambiguous.  NB: There is no representation for the absence of a value. The empty string as value means that there is a value and it is the empty string. If you want to describe the fact that node  n does not have a value for the feature in question, the node must be left out of the feature. In order words, there should be no data line in the feature that targets this node. If the declared value type ( @valueType ) of a feature is  int , then its empty values will be taken as absence of values, though.  Consistency requirements There are a few additional requirements on feature data, having to do with the fact that features annotate nodes or edges of a graph.  Single values It is assumed that a node feature assigns only one value to the same node. If the data contains multiple assignments to a node, only the last assignment will be honoured, the previous ones will be discarded. Likewise, it is assumed that an edge feature assigns only one value to the same edge. If the data contains multiple assignments to an edge, only the last assignment will be honoured. Violations maybe or may not be reported, and processing may continue without warnings."
},
{
"ref":"tf.about.searchusage",
"url":75,
"doc":" Usage  What is Text-Fabric Search? You can query for graph like structures in your data set. The structure you are interested in has to be written as a  search template . A search template expresses a pattern of nodes and edges with additional conditions also known as  quantifiers . You can query a TF corpus in the TF browser. You can also run queries on arbitrary TF corpora programmatically, e.g. in a Jupyter notebook, by using the  S Api, documented here.  Search primer A search template consists of a bunch of lines, possibly indented, that specify objects to look for. Here is a simple example:   book name=Genesis|Exodus chapter number=2 sentence word pos=verb gender=feminine number=plural word pos=noun gender=feminine number=singular   This template looks for word combinations within a sentence within chapter 2 of either Genesis or Exodus, where one of the words is a verb and the other is a noun. Both have a feminine inflection, but the verb is plural and the noun is singular. The indentation signifies embedding, i.e. containment. The two words are contained in the same sentence, the sentence is contained in the chapter, the chapter in the book. The conditions you specify on book, chapter, word are all conditions in terms of [node features]( feature-specifications). You can use all features in the corpus for this. The order of the two words is immaterial. If there are cases where the verb follows the noun, they will be included in the results. Also, the words do not have to be adjacent. If there are cases with words intervening between the noun and the verb, they will be included in the results. Speaking of results: the  search function returns its results as tuples of nodes:   (book, chapter, sentence, word1, word2)   With these nodes in hand, you can programmatically gather all information about the results that the corpus provides. If the order between the verb and the noun is important, you can specify that as an additional constraint. You can give the words a name, and state a relational condition. Here we state that the noun precedes the verb.   book name=Genesis|Exodus chapter number=2 sentence vb:word pos=verb gender=feminine number=plural nn:word pos=noun gender=feminine number=singular nn  word pos=noun gender=feminine number=singular   If you insist that the noun immediately precedes the verb, you can use a different relational operator:   book name=Genesis|Exodus chapter number=2 sentence word pos=verb gender=feminine number=plural :> word pos=noun gender=feminine number=singular   There are more kinds of [relational operators]( relational-operators). If the noun must be the first word in the sentence, you can specify it as   book name=Genesis|Exodus chapter number=2 s:sentence w:word pos=noun gender=feminine number=singular  word pos=noun gender=feminine number=singular m -sub> s   or a bit more economically:   book name=Genesis|Exodus chapter number=2 clause -sub> clause word pos=verb gender=feminine number=plural :> word pos=noun gender=feminine number=singular   Read  m -sub> s as: there is a  sub -arrow from  m to  s . Edge features may have values. For example, the [crossref feature](https: github.com/etcbc/parallels) is a set of edges between parallel verses, with the levels of confidence as values. This number is an integer between 0 and 100. We can ask for parallel verses in an unqualified way:   verse  verse   But we can also ask for the cases with a specific confidence:   verse  verse   or cases with a high confidence:   verse  95> verse   or cases with a low confidence:   verse  verse   All feature conditions that you can assert on node features, you can also assert for edge features. If an edge feature is integer valued, such as  crossref you can use comparisons; if it is string valued, you can use regular expressions. In both cases you can also use the other constructs, such as   verse  verse   To get a more specific introduction to search, consult the search tutorials for annotated corpora, see  tf.about.corpora . Finally an example with quantifiers. We want all clauses where Pred-phrases consist of verbs only:   clause /where/ phrase function=Pred /have/ /without/ word sp verb /-/ /-/    Search template reference  Template lines We have these kinds of lines in a template:   comment lines  if the first non-white character on a line is  % it is a comment line;  you cannot comment out parts of lines after a non-white part;  if a line is empty or has whitespace only, it is a comment line;  comment lines are allowed everywhere;  comment lines are ignored.   atom lines  (simple):  indent name:otype-or-set features Examples 1.  word pos=verb gender=feminine 2.  vb:word pos=verb gender=feminine 3.  vb pos=verb gender=feminine Notes  The indent is significant. Indent is counted as the number of white space characters, where tabs count for just 1.  Avoid tabs! .  The  name: part is optional. If present, it defines a name for this atom that can be used in relational comparisons and other atoms.  The  otype-or-set part is optional. If it is absent, the  name part must be present. The meaning of   p:phrase sp=verb p vs=qal   is identical to the meaning of   p:phrase sp=verb pnew:phrase vs=qal p = pnew    (with relop):  indent op name:otype-or-set features    s   m  s  Indents and spacing are ignored.  There must be white-space around the operator.  Operators that come from edge features may be enriched with values. See [ relational operators ]( relational-operators) below for the whole spectrum of relational constraints on nodes.   quantifier sub-templates: Atom lines that contain an otype or set may be followed by  quantifiers . Quantifiers consist of search templates themselves, demarcated by some special keywords:   /without/   /where/ and  /have/   /with/ and  /or/   /-/ N.B. Quantifiers are also allowed after the  feature lines that may follow such atoms. In that case, the quantifier is also associated with the atom. So the following two are equivalent   word gn=f /without/  nu=pl /-/   and   word gn=f /without/  nu=pl /-/   See [ quantifiers ]( quantifiers) below for all the syntax and semantics.  Feature specifications The  features above is a specification of what features with which values to search for. This specification must be written as a white-space separated list of  feature specs . A  feature spec has the form  name  valueSpec , with no space between the  name and the  valueSpec .  Value specifications The  valueSpec may have the following forms and meanings: form | the feature  name  .   |  -   (empty) | has any value except  None  | has value  None  | has arbitrary value  = values | has one of the values specified  values | has none of the values specified  > value | is greater than  value    and    , in which case they specify value constraints on edge features. This is only meaningful if the edge feature is declared to have values (most edge features do not have values).  Additional constraints  There may be no space around the  =  ~ .   name must be a feature name that exists in the dataset. If it references a feature that is not yet loaded, the feature will be loaded automatically.   values must be a  | separated list of feature values, no quotes. No spaces around the  | . If you need a space or  | or  \\ in a value, escape it by a  \\ . Escape tabs and newlines as  \\t and  \\n .  When comparing values with    :   value must be an integer (negative values allowed);  You can do numeric comparisons only on number-valued features, not on string-valued features.  If the feature in question is not defined for a node, or has the value  None the outcome is always  False .   regular expression must be a string that conforms to the Python [regular expression syntax](https: docs.python.org/3/library/re.html regular-expression-syntax).  If you need a space in your regular expression, you have to escape it with a  \\ .  You can do regular expressions only on string-valued features, not on number-valued features.  Relational operators  Node comparison   = : is equal (meaning the same node, a clause and a verse that occupy the same slots are still unequal) ![op]( /images/Spatial/Spatial.001.png)   : is unequal (meaning a different node, a clause and a verse that occupy the same slots are still unequal) ![op]( /images/Spatial/Spatial.002.png)     : before and after (in the  canonical ordering , see  tf.core.nodes ) ![op]( /images/Spatial/Spatial.003.png)  Slot comparison     : occupy the same slots (identical slot sets) ![op]( /images/Spatial/Spatial.004.png)     : overlap (the intersection of both slot sets is not empty) ![op]( /images/Spatial/Spatial.006.png)   : occupy different slots (but they may overlap, the set of slots of the two are different as sets) ![op]( /images/Spatial/Spatial.005.png)     : occupy disjoint slots (no slot occupied by the one is also occupied by the other) ![op]( /images/Spatial/Spatial.007.png)      : embeds and contains (slot set inclusion, in both directions) ![op]( /images/Spatial/Spatial.008.png) Never holds between the same nodes. But it holds between different nodes with the same slots. But a slot can never embed an other node.      >> : before and after (with respect to the slots occupied: left ends before right starts and vice versa) ![op]( /images/Spatial/Spatial.009.png)     :  adjacent before and after (with respect to the slots occupied: left ends immediately before right starts and vice versa) ![op]( /images/Spatial/Spatial.013.png)   =: left and right start at the same slot ![op]( /images/Spatial/Spatial.010.png)   := left and right end at the same slot ![op]( /images/Spatial/Spatial.011.png)     left and right start and end at the same slot ![op]( /images/Spatial/Spatial.012.png)  Nearness comparison Some of the adjacency relations can actually be weakened. Instead of requiring that one slot is equal to an other slot, you can require that they are  k-near , i.e. they are at most  k apart. Here are the relationships where you can do that. Instead of typing the letter  k , provide the actual number you want.     :  k - adjacent before and after (with respect to the slots occupied: left ends  k -near where right starts and vice versa) ![op]( /images/Spatial/Spatial.017.png)   =k: left and right start at  k -near slots ![op]( /images/Spatial/Spatial.014.png)   :k= left and right end at  k -near slots ![op]( /images/Spatial/Spatial.015.png)   :k: left and right start and end at  k -near slots ![op]( /images/Spatial/Spatial.016.png)  Based on node features Nodes can be compared on the basis of the features that they have. For each pair of node features  f ,  g there is a relation between nodes that holds precisely when feature  f of the first node has the same value as feature  g on the second node. This can be used in search templates. Not only equality is covered, also inequality, comparison, and matching.   .f. and  .f=g. feature equality: the  f value of the left node is equal to the  g value of the right node.  .f. is an abbreviation for  .f=f. . ![op]( /images/Spatial/Spatial.022.png)  ! caution \"None values\" If one or both of the nodes does not have a value, the result is  False . In particular, two nodes that have both  None for a feature  f , count as having unequal values for  f .   .f g. feature inequality: the  f value of the left node is unequal to the  g value of the right node. ![op]( /images/Spatial/Spatial.023.png)  ! caution \"None values\" If one or both of the nodes does not have a value, the result is  True . In particular, two nodes that have both  None for a feature  f , count as having unequal values for  f .   .f g. feature less than and greater than: the  f value of the left node is less/greater than the  g value of right node. This is only legal if both  f and  g are integer valued features. ![op]( /images/Spatial/Spatial.024.png)  ! caution \"None values\" If one or both of the nodes does not have a value, the result is  False .   .f~regex~g. Features match: they are equal modulo the replacement of the parts that match the  regex . This is only legal if both  f and  g are string valued features. ![op]( /images/Spatial/Spatial.025.png)  ! example If node  n has feature  lex with value  donkey_1 and node  m has feature  lex with value  donkey_2 , then the following holds: n .lex~_[0-9] $~lex. m The values are stripped of their final  _1 and  _2 strings before they are being compared, leaving the comparison  donkey =  donkey , which is True.  ! caution \"None values\" If one or both of the nodes does not have a value, the result is  False .  Based on edge features Edge features are based on directed edges. An edge from  n to  m is not the same as an edge from  m to  n . For each direction there is a relation operator. And there is an operator corresponding to the  symmetric closure of the edges.  without values  A  - name > B: edge from A to B  A    B: edge from A to B or from B to A or both These forms work for edges that do and do not have values; ![op]( /images/Spatial/Spatial.018.png) ![op]( /images/Spatial/Spatial.020.png)  with values  A  - name  valueSpec > B: edge with value from A to B  A    B: edge with value from A to B or form B to A or both These forms work only for edges that do have values. ![op]( /images/Spatial/Spatial.019.png) ![op]( /images/Spatial/Spatial.021.png)  Quantifiers Quantifiers are powerful expressions in templates. They state conditions on a given atom in your template. The atom in question is called the  parent atom. The conditions may involve  many nodes that are related to the parent, as in:  all embedded words are a verb ;  without a following predicate phrase ;  with a mother clause or a mother phrase . That is where the term  quantifier comes from. A quantifier  quantifies its parent atom.  /without/ Syntax:   atom /without/ templateN /-/   or   atom extra feature line 1 extra feature line 2 extra feature line n /without/ templateN /-/   In the following, when we say  atom , we mean the atom line itself plus all feature lines that follow it. The Meaning is: node  r is a result of this template if and only if  r is a result of  atom (with all its the extra feature lines) and there is no tuple  RN such that ( r ,  RN ) is a result of   atom templateN    /where/ Syntax:   atom /where/ templateA /have/ templateH /-/   Meaning: node  r is a result of this template if and only if  r is a result of  atom and for all tuples ( RA ) such that ( r ,  RA ) is a result of   atom templateA   there is a tuple  RH such that ( r ,  RA ,  RH ) is a result of   atom templateA templateH    /with/ Syntax:   atom /with/ templateO1 /or/ templateO2 /or/ templateO3 /-/   Meaning: node  r is a result of this template if and only if: there is a tuple  R1 such that ( r ,  R1 ) is a result of   atom templateO1   or there is a tuple  R2 such that ( r ,  R2 ) is a result of   atom templateO2   or there is a tuple  R3 such that ( r ,  R3 ) is a result of   atom templateO3    1 or more alternatives This quantifier can be used with any number of  /or/ keywords, including none at all. If there is no  /or/ , there is just one alternative. The only difference between   atom /with/ template /-/   and   atom template   is that the results of the first query contain tuples with only one element, corresponding to the  atom . The second query contains tuples of which the first element corresponds to the  atom , and the remaining members correspond to the  template .  Parent The  atom bit is an atom line, it acts as the  parent of the quantifier. Inside a quantifier, you may refer to the parent by the special name    . So you do not have to give a name to the parent.  Multiple quantifiers You may have multiple quantifiers for one parent.  Not in result tuples Whereas a the search for a normal template proceeds by finding a tuple that instantiates all its nodes in such a way that all relationships expressed in the template hold, a quantifier template is not instantiated. It asserts a condition that has to be tested for all nodes relative its parent. None of the atoms in a template of a quantifier corresponds to a node in a final result tuple.  May be nested Templates within a quantifier may contain other quantifiers. The idea is, that whenever a search template is evaluated, quantifiers at the outer level of get interpreted. This interpretation gives rise to one or more templates to be constructed and run. Those new templates have been stripped of the outer layer of quantifiers, and when these templates are executed, the quantifiers at the next level have become outer. And so on.  Restrictions Due to the implementation of quantifiers there are certain restrictions.  Quantifiers must be put immediately below their parents or below preceding quantifiers of the same parent.  The keywords of a quantifier must appear on lines with exactly the same indentation as the atom they quantify.  The templates of a quantifier must have equal or greater indent than its keywords;  The names accessible to the templates inside a quantifier are:  the name    , which is the name of the atom that is quantified; this name is automagically valid in quantifier templates;  the name of the atom that is quantified (if that atom has a given name);  names defined in the template itself;  in  /where/ ,  templateH may use names defined in  templateA ; but only if these names are defined outside any quantifier of  templateA .  The following situations block the visibility of names:  in  /with/ ,  templateO i may not use names defined in  templateO j for  j other than  i ;  names defined outer quantifiers are not accessible in inner quantifiers;  names defined inner quantifiers are not accessible in outer quantifiers. When you nest quantifiers, think of the way they will be recomposed into ordinary templates. This dictates whether your quantifier is syntactically valid or not.  Indentation The indentation in quantifiers relative to their parent atom will be preserved.  ! example \"Nested quantifiers\" Consider   clause /where/ phrase function=Pred /have/ /without/ word sp verb /-/ /-/ phrase function=Subj   The auxiliary templates that will be run are: For the outer quantifier:   clause phrase function=Pred   and   clause phrase function=Pred /without/ word sp verb /-/   For the inner quantifier:   phrase function=Pred word sp verb   Note that the auxiliary template for the inner quantifier is shifted in its entirety to the left, but that the relative indentation is exactly as it shows in the original template.  Implementation Here is a description of the implementation of the quantifiers. It is not the real implementation, but it makes clear what is going on, and why the quantifiers have certain limitations, and how indentation works. The basic idea is:  a quantifier leads to the execution of one or more separate searche templates;  the results of these searches are combined by means of set operations:  difference ,  intersection ,  union , dependent on the nature of the quantifier;  the end result of this combination will fed as a custom set to the original template after stripping the whole quantifier from that template. So we replace a quantifier by a custom set. Suppose we have   clause typ=Wx0 QUANTIFIER1 QUANTIFIER2  . QUANTIFIERn rest-of-template   We compute a set of clauses  filteredClauses1 based on   clause typ=Wx0 QUANTIFIER1   and then compute a new set  filteredClauses2 based on   S.search( ' fclause typ=Wx0 QUANTIFIER2  ', customSets=dict(fclause=filteredClauses1)   and so on until we have had QUANTIFIERn, leading to a set  filteredClausesN of clauses that pass all filters set by the quantifiers. Finally, we deliver the results of   S.search( ' fclause rest-of-template  ', customSets=dict(fclause=filteredClausesN)  "
},
{
"ref":"tf.about.install",
"url":76,
"doc":" Install  If you have already Python on your machine Make sure you have at least Python 3.7.0 Recommended: install JupyterLab: fire up a terminal (= command prompt) and say  sh pip install jupyterlab   To get text-fabric, you can either fire up a terminal and say:  sh pip install 'text-fabric[all]'   or fire up a Jupyter Notebook ( jupyter lab ) and in a cell say  sh !pip install 'text-fabric[all]'   If you are in a notebook on an iPad, you can not install the full text-fabric. The iPad cannot install the libraries needed for the Text-Fabric browser. To install a reduced text-fabric, say  sh !pip install text-fabric   Now restart this notebook by clicking the circular arrow in the toolbar: ![restart]( /images/restartkernel.png).  If you do not have Python The fastest way to set up everything you need to use Text-Fabric is by installing the JupyterLab Desktop application. This installs both JupyterLab and Python in one go, as a desktop application running under Macos, Linux or Windows. The Jupyter Desktop App can be downloaded from [jupyterlab-desktop](https: github.com/jupyterlab/jupyterlab-desktop), choose the one that fits your system. After downloading, go to your downloads folder and install the application in the way you are used to, but notice the following:  on macos : right-click the  .pkg file, answer the dialogbox with  OK .  on all platforms : install for the current user, not for all users, otherwise you run into problems later on.  macos : click \"Change install location\" and set it to \"Install for me only\"  linux : after installation, run the following command from a terminal where  username should be changed to your username on the system:  sh sudo chown -R username:username /opt/JupyterLab    windows : no extra instructions. Two installers will be launched, let them work with the same default location for installation.  Work with Text-Fabric In a notebook, put this  incantation in a cell and run it:   from tf.app import use   And in a next cell, load the data of some corpus, e.g.  annotation/banks .   A = use(\"annotation/banks\")   The first time you do this you will see that the data is being downloaded and prepared for its first use. If you do this a second time, the data is already on your computer in preprocessed form, and Text-Fabric will see that data and load it quickly. From here you can use a [tutorial](https: nbviewer.org/github/annotation/banks/blob/master/tutorial/use.ipynb). More extensive tutorials are available for other corpora, see  tf.about.corpora .  Text-Fabric browser You can also work with Text-Fabric outside any programming context, just in the browser. In a terminal, say  sh text-fabric annotation/banks   Or, in a notebook cell, say   !text-fabric annotation/banks   Wait a few seconds and you see a new window in your browser with an interface to submit queries to the corpus.  Note for Linux users  On Ubuntu the  text-fabric script ends up in your  ~/.local/bin directory, but this is not on your PATH.  You need to execute your  .profile file first by:   source ~/.profile   You need to do this every time when you open a new terminal and want to run Text-Fabric. If you get tired of this, you can add this to your  .bashrc file:   PATH=\"~/.local/bin:${PATH}\" export PATH    Note on  [all] Text-Fabric has some special capabilities:   browser : the Text-Fabric browser, which runs a local webserver which lets you have a browse and search experience in a local web environment;   github and  gitlab : repository backends from which Text-Fabric can load corpus data on-demand. You can install Text-Fabric with a selection of capabilities:   pip install 'text-fabric'  without additional capabilities   pip install 'text-fabric[all]'  with all additional capabilities   pip install 'text-fabric[github]'  with a github backend   pip install 'text-fabric[gitlab]'  with a gitlab backend   pip install 'text-fabric[browser]'  with the text-fabric browser enabled   pip install 'text-fabric[github,browser]'  with the selected extras   pip install 'text-fabric[github,gitlab]'  with the selected extras Even if Text-Fabric is not installed with certain capabilities, it will have those capabilities if the required modules are installed."
},
{
"ref":"tf.about.faq",
"url":77,
"doc":" FAQ  It does not work. Why?  Stay up to date! Always use the latest version of Text-Fabric, because there is still a lot of development going on. A working installation contains three parts that are updated occasionally, sometinmes slowly, other times rapidly:  text-fabric itself, the Python library that you obtained by  pip install text-fabric ;  TF apps, the apps that are specialized in a specific corpus; you obtained it when you said  text-fabric org/repo or  A = use(\"org/repo\") ;  TF data, which was downloaded by that same statement that downloaded the app. See  tf.about.install for instructions how to upgrade these things.  Latest Text-Fabric  Text-Fabric cannot be found! Most likely, you installed Text-Fabric into another Python than you use when you run your Python programs. See Python Setup below.  Failed to upgrade Text-Fabric! When you get errors doing  pip install text-fabric , there is probably an older version around. You have to say   pip install  upgrade text-fabric   If this still does not download the most recent version of  text-fabric , it may have been caused by caching. Then say:   pip install  upgrade  no-cache-dir text-fabric   You can check what the newest distributed version of Text-Fabric is on [PyPi](https: pypi.org/project/text-fabric/).  Failed to upgrade Text-Fabric (still)! Old versions on your system might get in the way. Sometimes  pip uninstall text-fabric fails to remove all traces of Text-Fabric. Here is how you can remove them manually:  locate the  bin directory of the current Python, it is something like  (Macos regular Python)  /Library/Frameworks/Python.framework/Versions/3.7/bin  (Windows Anaconda)  C:\\Users\\You\\Anaconda3\\Scripts Remove the file  text-fabric from this directory if it exists.  locate the  site-packages directory of the current Python, it is something like  (Macos regular Python)  /Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/site-packages Remove the subdirectory  tf from this location, plus all files with  text-fabric in the name.  After this, you can make a fresh install of  text-fabric :   pip install text-fabric    Python setup If you are new to Python, it might be tricky to set up Python the right way. If you make unlucky choices, and work with trial and error, things might get messed up. Most of the times when  text-fabric does not appear to work, it is because of this. Here are some hints to recover from that.  Upgrade of Text-Fabric does not have any effect! Most likely, you have multiple Pythons on your system. You installed Text-Fabric in one Python, but you are using it in another Python. This can happen if you installed Python from [python.org](https: www.python.org) and then later installed Jupyter from Anaconda, which brings its own Python. You can check whether you are in this situation. First, on the command line, do   text-fabric   You will see the version of Text-Fabric that is used when you call the Text-Fabric browser. Then, in a Jupyter notebook, say   from tf.parameters import VERSION print(VERSION)   You will see the version of Text-Fabric that you use in a Jupyter notebook. If they are equal, you might use the same Python in both cases. If they are different, you have to clean up your Python installation. Ask a local guru, or google your way out. Or read on.  Other Python versions The following hygeneic measures are known to be beneficial when you have multiple versions of Python on your system. When you have upgraded Python, remove PATH statements for older versions from your system startup files.  For the Macos: look at  .zshrc ,  .bashrc , and  .bash_profile in your home directory.  For Windows: on the command prompt, say  echo %path% to see what the content of your PATH variable is. If you see references to older versions of python than you actually work with, they need to be removed. [Here is how](https: www.computerhope.com/issues/ch000549.htm) Do not remove references to Python  2. , but only outdated Python  3. versions.  Text-Fabric browser  Internal Server Error! When the TF browser opens with an Internal Server error, the most likely reason is that the TF kernel has not started up without errors. Look back at the terminal or command prompt where you started  text-fabric . If somewhere down the road you see  Error , I offer you my apologies! Copy and paste that error and send it to [me](mailto:text.annotation@icloud.com), and I'll fix it as soon as I can, and I let you know on the [issue list](https: github.com/annotation/text-fabric/issues).  Out of memory! If TF has run out of memory, you might be able to do something about it. In this case, during loading TF did not have access too enough RAM memory. Maybe you had too many programs (or browser tabs) open at that time. Close as many programs as possible (even better, restart your machine) and try again. TF is know to work on Windows 10 machines with only 3GB RAM on board, but only in the best of circumstances. If your machine has 4GB of RAM, it should be possible to run TF, with care.  GitHub Text-Fabric uses the GitHub API to get its apps and data on the fly.  GitHub Rate Limit Exceeded! Two solutions: 1. increase your rate limit by making yourself known to GitHub ( recommended ) 2. use previously downloaded data or get data manually from GitHub An increased rate limit is more than enough for normal use of using Text-Fabric with default settings. In this scenario, you always work with the latest release of Text-Fabric data and apps. The work needed to increase the rate is fairly simple, but it assumes a bit more knowledge about how your terminal or your command line prompt operates. If you work very intensely with data, repeatedly accessing many corpora, it is a waste to access GitHub for every single load action. In those cases you can pass extra parameters to the commands by which you load the data. This does not require any extra knowledge, except a section of the Text-Fabric API docs. But you must remember that in order to get the data the first time, you need to pass different parameters than the subsequent times. All in all, the second solution requires confidence with cloning and pulling from GitHub and familiarity with all the ways that Text-Fabric can obtain its data. See  tf.advanced.repo for instructions to follow both solutions."
},
{
"ref":"tf.about.displaydesign",
"url":78,
"doc":" Display design In Text-Fabric we want to display pieces of corpus material in insightful ways. We have implemented two types of displaying:   plain : almost as the plain text of nodes, but with optional in-line formatting   pretty : almost as a tree-bank view, but for the fact that the text objects are not merely trees, but graphs. In both types of display it is possible to optionally show node numbers to the relevant pieces of text, and to highlight nodes. In addition to highlighting, the displays can be tweaked by passing a fair number of options, in order to show of hide features of nodes, call in additional graphics, show or hide intermediate levels, etc. Whatever we want to display, we have to display in HTML, which is basically a hierarchically organized set of presentation elements. But a node and its constellation of relevant neighbourhood nodes does not have a hierarchical structure, in general, that is. The unravel algorithm solves the problem of turning a node and its associated piece of the textual graph into a tree of node fragments in such a way that the order of the slots is preserved. ![unravel]( /images/DisplayDesign/DisplayDesign.001.png) Unravelling is the core of the display algorithm in Text-Fabric. When nodes violate the hierarchy, the algorithm  chunks and  fragments them and  stacks the fragments into a tree. See  tf.advanced.unravel . This tree of fragments can then be transformed in various kinds of HTML with rather straightforward code, see  tf.advanced.render.render . Here is an account of how  unravel works and which challenges it has to meet.  Neighbourhood When we display a node, we consider all the slots to which this node is linked, and then collect all other nodes in the corpus that share one or more of these slots. (see  tf.core.locality.Locality.i ).  ! explanation \"with some subtleties\" We exclude some nodes from the neighbourhood, such as lexeme nodes, which have characteristics that require special treatment. We also exclude nodes of types that have a higher rank (read on).  Descendant types Node types are ranked: node types whose nodes occupy more slots on average have a higher rank than types whose nodes occupy less slots on average. You can inspect the ranking of the types in your dataset by  tf.core.nodes.Nodes.otypeRank . For each node type, we collect the set of descendant types: the types with lower or equal rank. So each type is its own descendant. But we prevent the slot type from being its own descendant.  Discontinuity and chunking The first problematic thing of nodes is that they can be linked to discontinuous sets of slots, in other words: nodes may have gaps. When nodes have gaps, and their holes are filled with other nodes, there is no way of walking through the nodes one by one and generating HTML boxes for them without mixing up the order of the slots in the final display. Here is an example from the Hebrew Bible: ![discontinuity]( /images/DisplayDesign/DisplayDesign.002.png) > [Genesis 4:14](https: shebanq.ancient-data.org/hebrew/text?book=Genesis&chapter=4&verse=14&version=c&mr=m&qw=q&tp=txt_p&tr=hb&wget=v&qget=v&nget=vt), > example taken from this [notebook](https: nbviewer.jupyter.org/github/annotation/tutorials/blob/master/zz_test/030-bhsa.ipynb). You see a sentence fragment with two clauses, of which the second is engulfed by the first one, while remaining completely disjoint. ![chunking]( /images/DisplayDesign/DisplayDesign.003.png) We divide each node in our neighbourhood into its maximal contiguous chunks. Such chunk are specified by tuples  (n, b, e) , where  n is the node (an integer), and  b is the first slot of the chunk and  e its last slot. When we display nodes, we will typically generate solid borders at node boundaries and dotted borders at internal chunk boundaries.  Overlapping hierarchy and fragmenting Chunks of nodes do not necessarily respect the borders of chunks of nodes that are higher in the tentative hierarchy. Here is an example from a corpus of Old Babylonian letters (cuneiform): ![overlap]( /images/DisplayDesign/DisplayDesign.004.png) > [Tablet P509373 reverse:6'](https: cdli.ucla.edu/search/search_results.php?SearchMode=Text&ObjectID=P509373), > example taken from [notebook](https: nbviewer.jupyter.org/github/annotation/tutorials/blob/master/zz_test/062-obb-clusters.ipynb). Here you see a cluster that does not respect a word boundary. ![fragmenting]( /images/DisplayDesign/DisplayDesign.005.png) We use the word boundary to break up the cluster in question into two  fragments . A  fragment is, like a chunk, a continuous part of a node, but not necessarily maximal. We fragment all node chunks in our neighbourhood.  ! explanation \"with some subtleties\" We work from higher levels to lower levels: node chunks of higher levels fragment node chunks of lower levels, not vice versa. And for nodes at the same level: bigger nodes chunk smaller nodes, not vice versa.  Levels As an example why levels are important, see Genesis 4:14 again. ![levels]( /images/DisplayDesign/DisplayDesign.006.png) In the Hebrew Bible, as encoded in the [BHSA](https: github.com/ETCBC/bhsa), the usual sequence of division is: sentence, sentence atom, clause, clause atom, phrase, phrase atom word. Look at the middle clause. It coincides with its clause atom, phrase and phrase atom. Without ranking information, Text-Fabric cannot know which of these is the outer node and which the inner node. Text-Fabric has computed this information when it loaded the corpus for the first time, based on the average size of nodes. It is also possible that the corpus designer has overridden this by an explicit ranking in the settings of the corpus app. We end up with a rather fine partition of all nodes in fragments, in such a way that no fragment crosses the boundaries of enclosing fragments.  Canonical order Before we feed fragments to the display, we sort them in  canonical order , based on their slots and node type. The following criteria will be checked  in that order :  Chunks have different begin slots: those with earlier first slots have precedence;  Chunks with nodes with higher ranked types have precedence;  Look at the slots the chunks do  not have in common. The chunk with the earlier such slot has precedence.  Chunks with nodes that are smaller as integer have precedence. See  tf.core.nodes.Nodes.sortKeyChunk .  Stacking When we have a list of canonically ordered fragments, we can stack them into a tree. Each new fragment is tried against the right-most branch of the tree under construction, from bottom to top. If there is no place on that branch, a new right-most branch is started. ![stack]( /images/DisplayDesign/DisplayDesign.007.png)  Output When we render a tree of fragments, we produce output for the fragments, one by one. For each fragment, the output consists of a contribution by the node of the fragment."
},
{
"ref":"tf.about.tests",
"url":79,
"doc":" Unit tests The Text-Fabric program code implements a combinatorical explosion. There are many environments in which the core engine operates, there are several apps that make use of it, and there is a built in query language. One way of mastering the complexity and safeguarding the correctness of it all, is by employing [unit tests](https: en.wikipedia.org/wiki/Unit_testing). To my embarrassment, most parts of Text-Fabric are not covered by unit tests. Here we describe the parts that are covered. But first a few words about the machinery of unit testing.  Corpus We build a [test corpus](https: github.com/annotation/text-fabric/tree/master/test/generic/tf), wich contains only 10 slots, with node type  sign and one other node type  part . The code to build it is in [makeTestTf.py](https: github.com/annotation/text-fabric/blob/master/test/generic/makeTestTf.py). Probably the corpus will be enlarged when new tests are being implemented.  Framework We use the [unittest](https: docs.python.org/3/library/unittest.html module-unittest) framework that comes with Python. It is just a few lines to setup a test class, hence we have not yet separated the code for setting up the tests and the data for the specific test suites. The fact that we currently have just one test suite does not give much incentive to factor the framework out right now.  Relations The basic spatial relations ( tf.about.searchusage ) that are being used in search deserve thorough unit testing. There are quite a few of them, they describe refined but abstract relations between nodes and the slots they are linked to, and they are optimized for performance, which make their implementation error-prone. For every relationship we test whether it holds or holds not between a bunch of particular nodes. The implementation of the relationships tries to determine on before hand whether its operands are guaranteed to be slots or guaranteed to be non-slots, or whether no guarantee can be given. For each particular test, all these cases will be triggered. All in all we defined [1000 pairs of nodes](https: github.com/annotation/text-fabric/blob/master/test/generic/relations.py) leading to 2500 queries, which will all be tested against expected answers."
},
{
"ref":"tf.about.corpora",
"url":80,
"doc":" Corpora Text-Fabric corpora are usually stored on GitHub/GitLab and Text-Fabric knows how to download a corpus from GitHub/GitLab if you specify the  org/repo . Most corpora are configured by metadata in a directory  app in the repo. You can load a corpus into a Python datastructure by  python from tf.app import use A = use(\"org/repo\")   And you can get it in the Text-Fabric browser by saying this on a command prompt:  sh text-fabric org/repo   Here is a list of corpora that can be loaded this way. Since everybody can put a Text-Fabric corpus on GitHub/GitLab, the list may not be complete! [annotation/banks](https: github.com/annotation/banks) :  modern english Iain M. Banks, 1984 - 1987, 99 words from the SF novel  [Consider Phlebas](https: read.amazon.com/kp/kshare?asin=B002TXZRQI&id=NpPGzf_HT5aADabyiDDSIQ&reshareId=RZ91SGMZJPWK9S1Y4EZX&reshareChannel=system) , Dirk Roorda  [Cambridge Semitics Lab](https: github.com/CambridgeSemiticsLab) [CambridgeSemiticsLab/nena_tf](https: github.com/CambridgeSemiticsLab/nena_tf) :  Aramaic North Eastern Neo-Aramaic Corpus, 2000,  [Nena Cambridge](https: nena.ames.cam.ac.uk) , Cody Kingham  [CenterBLC Andrews University](https: github.com/CenterBLC) [CenterBLC/LXX](https: github.com/CenterBLC/LXX) :  Greek [Septuagint](https: en.wikipedia.org/wiki/Septuagint), 300 - 100 BCE,  LXX Rahlf's edition 1935 plus additional features by CenterBLC ; earliest extant Greek translation of Hebrew Bible books; Oliver Glanz, Adrian Negrea [CenterBLC/NA](https: github.com/CenterBLC/NA) :  Greek New Testament, 100 - 400,  GNT Nestle-Aland edition 1904 with new features by CentrBLC , converted from [biblicalhumanities/Nestle1904](https: github.com/biblicalhumanities/Nestle1904) contributed by Ulrik Sandborg Petersen, Jonathan Robie; Oliver Glanz [CenterBLC/SBLGNT](https: github.com/CenterBLC/SBLGNT) :  Greek New Testament, 100 - 400, converted from  James Tauber's [morphgnt/sblgnt](https: github.com/morphgnt/sblgnt) with additional features by CenterBLC ; Adrian Negrea, Clacir Virmes, Oliver Glanz, Krysten Thomas  [CLARIAH](https: github.com/CLARIAH) [CLARIAH/descartes](https: github.com/CLARIAH/wp6-missieven) :  French ,  Latin ,  Dutch Letters from and to Descartes, 1619 - 1650,  Ren\u00e9 Descartes - Correspondance ; Ch. Adam et G. Milhaud (eds. and illustrations, 1896-1911); Katsuzo Murakami, Meguru Sasaki, Takehumi Tokoro (ascii digitization, 1998); Erik-Jan Bos (ed, 2011); Dirk Roorda (converter TEI, 2011 and TF 2023) [CLARIAH/wp6-missieven](https: github.com/CLARIAH/wp6-missieven) :  Dutch General Missives, 1600 - 1800,  General Missives, Dutch East-Indian Company , Jesse van der Does, Sophie Arnoult, Dirk Roorda [CLARIAH/wp6-daghregisters](https: github.com/CLARIAH/wp6-daghregisters) :  Dutch Dagh Registers Batavia, 1640 - 1641,  Daily events at Batavia, Indonesia, historical source for the operation of the Dutch East-Indian Company , Lodewijk Petram, Dirk Roorda.  work in progress, currently only volume 4  [Cody Kingham](https: github.com/codykingham) [codykingham/tischendorf_tf](https: github.com/codykingham/tischendorf_tf) :  Greek New Testament, 50 - 450,  Tischendorf 8th Edition , Cody Kingham, Dirk Roorda  [Digital Theologians of the University of Copenhagen](https: github.com/DT-UCPH) [DT-UCPH/sp](https: github.com/DT-UCPH) :  Hebrew [Samaritan Pentateuch](https: en.wikipedia.org/wiki/Samaritan_Pentateuch) , 516 BCE - 70 AD,  MS Dublin Chester Beatty Library 751 + MS Garizim 1 , Martijn Naaijer, Christian Canu H\u00f8jgaard  At this time only Genesis has been converted.  [Eep Talstra Centre for Bible and Computer](https: github.com/etcbc) [etcbc/bhsa](https: github.com/etcbc/bhsa) :  Hebrew Bible (Old Testament), 1000 BCE - 900 AD,  [Biblia Hebraica Stuttgartensia (Amstelodamensis)](https: etcbc.github.io/bhsa/) , ETCBC + Dirk Roorda [etcbc/dhammapada](https: github.com/etcbc/dhammapada) :  P\u0101li and  Latin Ancient Buddhist verses, 300 BCE and 1855 AD,  Transcription with Latin translations based on Viggo Fausb\u00f8ll's book , Bee Scherer, Yvonne Mataar, Dirk Roorda [etcbc/dss](https: github.com/etcbc/dss) :  Hebrew Dead Sea Scrolls, 300 BCE - 100 AD,  Transcriptions with morphology based on Martin Abegg's data files , Martijn Naaijer, Jarod Jacobs, Dirk Roorda [etcbc/peshitta](https: github.com/etcbc/peshitta) :  Syriac Peshitta (Old Testament), 1000 BCE - 900 AD,  Vetus Testamentum Syriace , Hannes Vlaardingerbroek, Dirk Roorda [etcbc/syrnt](https: github.com/etcbc/syrnt) :  Syriac New Testament, 0 - 1000,  Novum Testamentum Syriace , Hannes Vlaardingerbroek, Dirk Roorda  [KNAW/Huygens](https: gitlab.huc.knaw.nl/tt) [hermans/works](https: gitlab.huc.knaw.nl/hermans/works) :  Dutch Complete Works of W.F. Hermans. The conversion to Text-Fabric is work in progress. So far these works have been done:  Paranoia  Sadistisch Universum  Nooit meer slapen Bram Oostveen, Peter Kegel, Dirk Roorda  Not publicly accessible, the book is under copyright. [mondriaan/letters](https: git.diginfra.nl/mondriaan/letters) :  Dutch Letters of Piet Mondriaan. , 1892-1923. Straight conversion from TEI to Text-Fabric, Peter Boot et al, Dirk Roorda  Work in progress, not yet public .  [NINO Cuneiform](https: github.com/Nino-cunei) [Nino-cunei/ninmed](https: github.com/Nino-cunei/ninmed) :  Akkadian / cuneiform Medical Encyclopedia from Nineveh, ca. 800 BCE,  Medical documents with lemma annotations , Cale Johnson, Dirk Roorda [Nino-cunei/oldassyrian](https: github.com/Nino-cunei/oldassyrian) :  Akkadian / cuneiform Old Assyrian documents, 2000 - 1600 BCE,  Documents from Ashur Cale Johnson, Alba de Ridder, Martijn Kokken, Dirk Roorda [Nino-cunei/oldbabylonian](https: github.com/Nino-cunei/oldbabylonian) :  Akkadian / cuneiform Old Babylonian letters, 1900 - 1600 BCE,  Altbabylonische Briefe in Umschrift und \u00dcbersetzung , Cale Johnson, Dirk Roorda [Nino-cunei/uruk](https: github.com/Nino-cunei/uruk) :  proto-cuneiform Uruk, 4000 - 3100 BCE,  Archaic tablets from Uruk , Cale Johnson, Dirk Roorda  [Protestant Theological University](https: github.com/pthu) [Greek Literature](https: nbviewer.jupyter.org/github/pthu/greek_literature/blob/master/tutorial/start.ipynb) :  Greek [Literature, -400 - +400](https: github.com/pthu/greek_literature), [Perseus Digital Library](https: github.com/PerseusDL/canonical-greekLit) and [Open Greek and Latin Project](https: github.com/OpenGreekAndLatin/First1KGreek) The result of a massive conversion effort by Ernst Boogert. [pthu/athenaeus](https: github.com/pthu/athenaeus) :  Greek Works of Athenaeus, 80 - 170,  [Deipnosophistae](https: en.wikipedia.org/wiki/Deipnosophistae) , Ernst Boogert  [Quran](https: github.com/q-ran) [q-ran/quran](https: github.com/q-ran/quran) :  Arabic Quran, 600 - 900,  Quranic Arabic Corpus , Cornelis van Lit, Dirk Roorda  [University of Utrecht: Cornelis van Lit](https: github.com/among) [among/fusus](https: github.com/among/fusus) :  Arabic Fusus Al Hikam, 1165- 2000,  editions (Lakhnawi and Afifi) of Ibn Arabi's Fusus plus commentaries in the centuries thereafter , Cornelis van Lit, Dirk Roorda  Intentions oldroyal :  Akkadian-Sumerian cuneiform Bilingual royal inscriptions, 2000 - 1600,  more info to come , Martijn Kokken, Dirk Roorda  Get corpora  Automatically Text-Fabric downloads corpus data and apps from GitHub/GitLab on demand. See  tf.about.use . Data ends up in a logical place under your  ~/text-fabric-data/ . The TF data is fairly compact.  ! caution \"Size of data\" There might be sizable additional data for some corpora, images for example. In that case, take care to have a good internet connection when you use a TF app for the first time.  Manually TF data of corpora reside in a backend repo. You can manually clone such a data repository and point Text-Fabric to that data. First, take care that your clone ends up in  github/ orgName or  gitlab/ orgName (relative your home directory) where  orgName is the organization or person or group on GitHub/GitLab under which you have found the repo. Then, when you invoke the app, pass the specifier  :clone . This instructs Text-Fabric to look in your local GitHub/GitLab clone, rather than online or in your local  text-fabric-data , where downloaded data is stored. use('org/repo:clone', checkout=\"clone\") text-fabric org/repo:clone  checkout=clone In this way, you can work with data that is under your control.  ! caution \"Size of data\" Cloning a data repository is more costly then letting Text-Fabric download the data. A data repository may contain several versions and representations of the data, including the their change histories. There might also be other material in the repo, such as source data, tutorials, programs. For example, the  etcbc/bhsa repo is several GB, but the TF data for a specific version is only 25MB.  Extra data Researchers are continually adding new insights in the form of new feature data. TF apps make it easy to use that data alongside the main data source. Read more about the data life cycle in  tf.about.datasharing ."
},
{
"ref":"tf.capable",
"url":81,
"doc":""
},
{
"ref":"tf.capable.Capable",
"url":81,
"doc":""
},
{
"ref":"tf.capable.Capable.tryImport",
"url":81,
"doc":"",
"func":1
},
{
"ref":"tf.capable.Capable.load",
"url":81,
"doc":"",
"func":1
},
{
"ref":"tf.capable.Capable.loadFrom",
"url":81,
"doc":"",
"func":1
},
{
"ref":"tf.capable.Capable.can",
"url":81,
"doc":"",
"func":1
},
{
"ref":"tf.search",
"url":82,
"doc":" Guidance for searching  User guide to search:  tf.about.searchusage  Search API:  tf.search.search .  Implementation of search:  tf.about.searchdesign "
},
{
"ref":"tf.search.spin",
"url":83,
"doc":" Search preprocessing"
},
{
"ref":"tf.search.spin.spinAtoms",
"url":83,
"doc":"",
"func":1
},
{
"ref":"tf.search.spin.estimateSpreads",
"url":83,
"doc":"",
"func":1
},
{
"ref":"tf.search.spin.spinEdges",
"url":83,
"doc":"",
"func":1
},
{
"ref":"tf.search.semantics",
"url":84,
"doc":" Semantics of search templates"
},
{
"ref":"tf.search.semantics.semantics",
"url":84,
"doc":"",
"func":1
},
{
"ref":"tf.search.graph",
"url":85,
"doc":" Graph oriented functions needed for search"
},
{
"ref":"tf.search.graph.connectedness",
"url":85,
"doc":"",
"func":1
},
{
"ref":"tf.search.graph.multiEdges",
"url":85,
"doc":"",
"func":1
},
{
"ref":"tf.search.graph.displayPlan",
"url":85,
"doc":"",
"func":1
},
{
"ref":"tf.search.graph.displayNode",
"url":85,
"doc":"",
"func":1
},
{
"ref":"tf.search.graph.displayEdge",
"url":85,
"doc":"",
"func":1
},
{
"ref":"tf.search.relations",
"url":86,
"doc":" Search by relational patterns between nodes"
},
{
"ref":"tf.search.relations.basicRelations",
"url":86,
"doc":"",
"func":1
},
{
"ref":"tf.search.relations.add_K_Relations",
"url":86,
"doc":"",
"func":1
},
{
"ref":"tf.search.relations.add_F_Relations",
"url":86,
"doc":"",
"func":1
},
{
"ref":"tf.search.relations.add_V_Relations",
"url":86,
"doc":"",
"func":1
},
{
"ref":"tf.search.search",
"url":87,
"doc":" Search (top-level)"
},
{
"ref":"tf.search.search.Search",
"url":87,
"doc":""
},
{
"ref":"tf.search.search.Search.tweakPerformance",
"url":87,
"doc":"Tweak parameters that influence the search process.  ! explanation \"Theory\" Before the search engine retrieves result tuples of nodes, there is a process to narrow down the search space. See  tf.about.searchdesign and and remember that we use the term  yarn for the sets of candidate nodes from which we stitch our results together.  Edge spinning is the process of transferring constraints on one node via edges to constraints on another node. The one node lives in a yarn, i.e. a set of candidate nodes, and the node at the other side of the edge lives in a yarn. If the first yarn is small then we might be able to reduce the second yarn by computing the counterparts of the nodes in the small yarn in the second yarn. We can leave out all other nodes from the second yarn. A big reduction! The success of edge spinning depends mainly on two factors:  ! info \"Size difference\" Edge spinning works best if there is a big difference in size between the candidate sets for the nodes at both sides of an edge.  ! info \"Spread\" The spread of a relation is the number of different edges that can start from the same node or end at the same node. For example, the spread of the  equality operator is just 1, but the spread of the  inequality operator is virtually as big as the relevant yarn. If there are constraints on a node in one yarn, and if there is an edge between that yarn and another one, and if the spread is big, not much of the constraint can be transferred to the other yarn.  ! example \"Example\" Suppose both yarns are words, the first yarn has been constrained to verbs, and the equality relation holds must hold between the yarns. Then in all results the node from the second yarn is also a verb. So we can constrain the second yarn to verbs too. But if the relation is inequality, we cannot impose any additional restriction on nodes in the second yarn. All nodes in the second yarn are unequal to at least one verb.  ! info \"Estimating the spread\" We estimate the spreads of edges over and over again, in a series of iterations where we reduce yarns. An exhaustive computation would be too expensive, so we take a sample of a limited amount of relation computations. If you do not pass a parameter, its value will not be changed. If you pass  None for a parameter, its value will be reset to the default value. Here are the parameters that you can tweak: Parameters      yarnRatio: float The  yarnRatio is the minimal factor between the sizes of the smallest and the biggest set of candidates of the nodes at both ends of the edge. And that divided by the spread of the relation as estimated by a sample.  ! example \"Example\" Suppose we set the yarnRatio to 1.5. Then, if we have yarns of 100,000 and 10,000 members, with a relation between them with spread 5, then 100,000 / 10,000 / 5 = 2. This is higher than the yarnRatio of 1.5, so the search engine decides that edge spinning is worth it. The reasoning is that the 10,000 nodes in the smallest yarn are expected to reach only 10,000  5 nodes in the other yarn by the relation, and so we can achieve a significant reduction. If you have a very slow query, and you think that a bit more edge spinning helps, decrease the yarnRatio towards 0. If you find that a lot of queries spend too much time in edge spinning, increase the yarnRatio. tryLimitFrom: integer In order to determine the spreads of the relations, TF takes random samples and extrapolates the results. We grab some nodes from the set at the  from side of an edge, and some nodes at the  to side of the same edge, Then we compute in how many cases the relation holds. That is a measure for the spread. The parameters  tryLimitFrom and  tryLimitTo dictate how big these samples are. The bigger, the better the estimation of the spread. But also the more work it is. If you find that your queries take consistently a tad too much time, consider lowering these parameters to 10. If you find that the times your queries take varies a lot, increase these values to 10000. tryLimitTo: integer See  tryLimitFrom ",
"func":1
},
{
"ref":"tf.search.search.Search.search",
"url":87,
"doc":"Searches for combinations of nodes that together match a search template. If you can, you should use  tf.advanced.search.search instead. Parameters      searchTemplate: string A string that conforms to the rules described in  tf.about.searchusage . shallow: set | tuple If  True or  1 , the result is a set of things that match the top-level element of the  query . If  2 or a bigger number  n , return the set of truncated result tuples: only the first  n members of each tuple is retained. If  False or  0 , a sorted list of all result tuples will be returned. sets: dict If not  None , it should be a dictionary of sets, keyed by a names. limit: integer, optional None If  limit is a positive number, it will fetch only that many results. If it is negative, 0, None, or absent, it will fetch arbitrary many results.  ! caution \"there is an upper  fail limit for safety reasons. The limit is a factor times the max node in your corpus. See  tf.parameters.SEARCH_FAIL_FACTOR . If this  fail limit is exceeded in cases where no positive  limit has been passed, you get a warning message. Returns    - generator | tuple Each result is a tuple of nodes, where each node corresponds to an  atom -line in your search template.about.searchusage ). If  limit is not  None , a  generator is returned, which yields the results one by one. Otherwise, the results will be fetched up till  limit and delivered as a tuple. Notes   -  ! hint \"More info on the search plan\" Searching is complex. The search template must be parsed, interpreted, and translated into a search plan. See  tf.search.search.Search.study .",
"func":1
},
{
"ref":"tf.search.search.Search.study",
"url":87,
"doc":"Studies a template to prepare for searching with it. The search space will be narrowed down and a plan for retrieving the results will be set up. If the search template query has quantifiers, the asscociated search templates will be constructed and executed. These searches will be reported clearly. The resulting plan can be viewd by  tf.search.search.Search.showPlan . Parameters      searchTemplate: string A string that conforms to the rules described in  tf.about.searchusage . strategy: string In order to tame the performance of search, the strategy by which results are fetched matters a lot. The search strategy is an implementation detail, but we bring it to the surface nevertheless. To see the names of the available strategies, just call  S.study( , strategy='x') and you will get a list of options reported to choose from. Feel free to experiment. To see what the strategies do, see the code in  tf.search.stitch . shallow: set | tuple If  True or  1 , the result is a set of things that match the top-level element of the search template. If  2 or a bigger number  n , return the set of truncated result tuples: only the first  n members of each tuple is retained. If  False or  0 , a sorted list of all result tuples will be returned. sets: dict If not  None , it should be a dictionary of sets, keyed by a names. In the search template you can refer to those names to invoke those sets. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp See Also     tf.about.searchusage: Search guide",
"func":1
},
{
"ref":"tf.search.search.Search.fetch",
"url":87,
"doc":"Retrieves query results, up to a limit. Must be called after a previous  tf.search.search.Search.search() or  tf.search.search.Search.study() . Parameters      limit: integer, optional None If  limit is a positive number, it will fetch only that many results. If it is negative, 0, None, or absent, it will fetch arbitrary many results.  ! caution \"there is an upper  fail limit for safety reasons. The limit is a factor times the max node in your corpus. See  tf.parameters.SEARCH_FAIL_FACTOR . If this  fail limit is exceeded in cases where no positive  limit has been passed, you get a warning message. Returns    - generator | tuple Each result is a tuple of nodes, where each node corresponds to an  atom -line in your search template.about.searchusage ). If  limit is not  None , a  generator is returned, which yields the results one by one. Otherwise, the results will be fetched up till  limit and delivered as a tuple. Notes   -  ! example \"Iterating over the  fetch() generator\" You typically fetch results by saying: i = 0 for tup in S.results(): do_something(tup[0]) do_something_else(tup[1]) Alternatively, you can set the  limit parameter, to ask for just so many results. They will be fetched, and when they are all collected, returned as a tuple.  ! example \"Fetching a limited amount of results\" This S.fetch(limit=10) gives you the first 10 results without further ado.",
"func":1
},
{
"ref":"tf.search.search.Search.count",
"url":87,
"doc":"Counts the results, with progress messages, optionally up to a limit. Must be called after a previous  tf.search.search.Search.search() or  tf.search.search.Search.study() . Parameters      progress: integer, optional, default  100 Every once for every  progress results a progress message is shown when fetching results. limit: integer, optional None If  limit is a positive number, it will fetch only that many results. If it is negative, 0, None, or absent, it will fetch arbitrary many results.  ! caution \"there is an upper  fail limit for safety reasons. The limit is a factor times the max node in your corpus. See  tf.parameters.SEARCH_FAIL_FACTOR . If this  fail limit is exceeded in cases where no positive  limit has been passed, you get a warning message.  ! note \"why needed\" You typically need this in cases where result fetching turns out to be (very) slow.  ! caution \"generator versus list\"  len(S.results(  does not work in general, because  S.results() is usually a generator that delivers its results as they come. Returns    - None The point of this function is to show the counting of the results on the screen in a series of timed messages.",
"func":1
},
{
"ref":"tf.search.search.Search.showPlan",
"url":87,
"doc":"Show the result of the latest study of a template. Search results are tuples of nodes and the plan shows which part of the tuple corresponds to which part of the search template. Only meaningful after a previous  tf.search.search.Search.study . Parameters      details: boolean, optional False If  True , more information will be provided: an overview of the search space and a description of how the results will be retrieved.  ! note \"after S.study()\" This function is only meaningful after a call to  S.study() .",
"func":1
},
{
"ref":"tf.search.search.Search.relationsLegend",
"url":87,
"doc":"Dynamic info about the basic relations that can be used in templates. It includes the edge features that are available in your dataset. Returns    - None The legend will be shown in the output.",
"func":1
},
{
"ref":"tf.search.search.Search.glean",
"url":87,
"doc":"Renders a single result into something human readable. A search result is just a tuple of nodes that correspond to your template, as indicated by  showPlan() . Nodes give you access to all information that the corpus has about it. This function is meant to just give you a quick first impression. Parameters      tup: tuple of int The tuple of nodes in question. Returns    - string The result indicats where the tuple occurs in terms of sections, and what text is associated with the tuple. Notes   -  ! example \"Inspecting results\" This for result in S.fetch(limit=10): TF.info(S.glean(result is a handy way to get an impression of the first bunch of results.  ! hint \"Universal\" This function works on all tuples of nodes, whether they have been obtained by search or not.  ! hint \"More ways of showing results\" The advanced API offers much better ways of showing results. See  tf.advanced.display.show and  tf.advanced.display.table .",
"func":1
},
{
"ref":"tf.search.syntax",
"url":88,
"doc":" Syntax of search templates"
},
{
"ref":"tf.search.syntax.syntax",
"url":88,
"doc":"",
"func":1
},
{
"ref":"tf.search.syntax.parseLine",
"url":88,
"doc":"",
"func":1
},
{
"ref":"tf.search.syntax.parseFeatureVals",
"url":88,
"doc":"",
"func":1
},
{
"ref":"tf.search.syntax.cleanParent",
"url":88,
"doc":"",
"func":1
},
{
"ref":"tf.search.syntax.deContext",
"url":88,
"doc":"",
"func":1
},
{
"ref":"tf.search.searchexe",
"url":89,
"doc":" Search execution management"
},
{
"ref":"tf.search.searchexe.SearchExe",
"url":89,
"doc":""
},
{
"ref":"tf.search.searchexe.SearchExe.perfDefaults",
"url":89,
"doc":""
},
{
"ref":"tf.search.searchexe.SearchExe.perfParams",
"url":89,
"doc":""
},
{
"ref":"tf.search.searchexe.SearchExe.setPerfParams",
"url":89,
"doc":"",
"func":1
},
{
"ref":"tf.search.searchexe.SearchExe.search",
"url":89,
"doc":"",
"func":1
},
{
"ref":"tf.search.searchexe.SearchExe.study",
"url":89,
"doc":"",
"func":1
},
{
"ref":"tf.search.searchexe.SearchExe.fetch",
"url":89,
"doc":"",
"func":1
},
{
"ref":"tf.search.searchexe.SearchExe.count",
"url":89,
"doc":"",
"func":1
},
{
"ref":"tf.search.searchexe.SearchExe.showPlan",
"url":89,
"doc":"",
"func":1
},
{
"ref":"tf.search.searchexe.SearchExe.showOuterTemplate",
"url":89,
"doc":"",
"func":1
},
{
"ref":"tf.search.stitch",
"url":90,
"doc":" Search result finding"
},
{
"ref":"tf.search.stitch.setStrategy",
"url":90,
"doc":"",
"func":1
},
{
"ref":"tf.search.stitch.stitch",
"url":90,
"doc":"",
"func":1
},
{
"ref":"tf.app",
"url":91,
"doc":"Make use of a corpus. The advanced-API provides extra functionality of top of the core of TF. The most notable things are downloading corpus data and methods for (pretty) display corpus material. The real power of the advanced API is unleashed when there are well-tuned configuration settings for a corpus, and possibly some supporting application code and CSS styling. This power can be invoked by a very simple command:  use(\"org/repo\") . For a detailed description, see  tf.about.usefunc ."
},
{
"ref":"tf.app.use",
"url":91,
"doc":"Make use of a corpus. For a detailed description, see  tf.about.usefunc . Parameters      appName: string backend: string, optional None If present, it is  github or  gitlab or a GitLab instance such as  gitlab.huc.knaw.nl . If absent,  None or empty, it is  github . args: Do not pass any other positional argument! kwargs: Used to initialize the corpus app that we use. That is either an uncustomized  tf.advanced.app.App or a customization of it. Returns    - A: object The object whose attributes and methods constitute the advanced API. See Also     tf.advanced.app.App",
"func":1
},
{
"ref":"tf.parameters",
"url":92,
"doc":" Parameters Fixed values for the whole program."
},
{
"ref":"tf.parameters.normpath",
"url":92,
"doc":"",
"func":1
},
{
"ref":"tf.parameters.VERSION",
"url":92,
"doc":"Program version. This value is under control of the update process, as run by  build.py in the top-level directory of the repo."
},
{
"ref":"tf.parameters.NAME",
"url":92,
"doc":"The name of the game: this program."
},
{
"ref":"tf.parameters.PACK_VERSION",
"url":92,
"doc":"Data serialization version. Plain text feature files will be compressed to zipped, pickled datastructures that load must faster. These methods evolve, sometimes in incompatible ways. In those cases we bump this version number. That will cause TF not to use compressed files that have been compressed by older, incompatible methods. Instead, TF will produce freshly compressed data files. The compressed data files are stored in a directory  .tf/{PVN}/ next to the original  tf files, where  {PVN} is the package version number. See Also     tf.clean"
},
{
"ref":"tf.parameters.API_VERSION",
"url":92,
"doc":"TF API version. Text-Fabric offers and API to TF apps. This is the version that the current Text-Fabric offers to its apps. Apps require a version. The provided version and the required version must match exactly in order to get a working system. We do not aim for backward compatibility, since it is very easy to obtain a new version of an app. When Text-Fabric loads a TF app, it will check the api version that the app requires against this version. App requirement higher than TF API version : The user is advised to upgrade Text-Fabric, or, alternatively, select an older version of the app App requirement lower than TF API version : The user is advised to obtain a newer version of the app, or alternatively, downgrade Text-Fabric"
},
{
"ref":"tf.parameters.OTYPE",
"url":92,
"doc":"Name of a central feature in a TF data set:  otype maps nodes to their types."
},
{
"ref":"tf.parameters.OSLOTS",
"url":92,
"doc":"Name of a central feature in a TF data set:  oslots maps non-slot nodes to the sets of slots they occupy."
},
{
"ref":"tf.parameters.OTEXT",
"url":92,
"doc":"Name of a central (but optional) feature in a TF data set:  otext has configuration settings for sections, structure, and text formats."
},
{
"ref":"tf.parameters.OVOLUME",
"url":92,
"doc":"Name of the feature that maps nodes of a work dataset to nodes in individual volumes in that work."
},
{
"ref":"tf.parameters.OWORK",
"url":92,
"doc":"Name of the feature that maps nodes in an individual volume of a work to nodes in that work."
},
{
"ref":"tf.parameters.OINTERF",
"url":92,
"doc":"Name of the feature that stores the outgoing inter-volume edges of a volume."
},
{
"ref":"tf.parameters.OINTERT",
"url":92,
"doc":"Name of the feature that stores the incoming inter-volume edges of a volume."
},
{
"ref":"tf.parameters.OMAP",
"url":92,
"doc":"Name prefix of features with a node map from an older version to a newer version. The full name of such a feature is  omap@ oldversion - newversion "
},
{
"ref":"tf.parameters.WARP",
"url":92,
"doc":"The names of the central features of TF data sets. The features  otype and  oslots are crucial to every TF dataset. Without them, a dataset is not a TF dataset, although it could still be a TF data module."
},
{
"ref":"tf.parameters.GZIP_LEVEL",
"url":92,
"doc":"Compression level when compressing tf files."
},
{
"ref":"tf.parameters.PICKLE_PROTOCOL",
"url":92,
"doc":"Pickle protocol level when pickling tf files."
},
{
"ref":"tf.parameters.ORG",
"url":92,
"doc":"GitHub organization or GitLab group. This is where the repo that contains Text-Fabric resides."
},
{
"ref":"tf.parameters.REPO",
"url":92,
"doc":"GitHub repo or GitLab project. This is the name of the repo that contains Text-Fabric."
},
{
"ref":"tf.parameters.RELATIVE",
"url":92,
"doc":"Default relative path with a repo to the directory with tf files."
},
{
"ref":"tf.parameters.GH",
"url":92,
"doc":"Name of GitHub backend."
},
{
"ref":"tf.parameters.GL",
"url":92,
"doc":"Name of GitLab backend."
},
{
"ref":"tf.parameters.URL_GH",
"url":92,
"doc":"Base url of GitHub."
},
{
"ref":"tf.parameters.URL_GL",
"url":92,
"doc":"Base url of GitLab."
},
{
"ref":"tf.parameters.URL_NB",
"url":92,
"doc":"Base url of NB-viewer."
},
{
"ref":"tf.parameters.BACKEND_REP",
"url":92,
"doc":"Various backend dependent values. First of all, the backend value is normalized. Then related values are computed. Parameters      be: string or None The raw backend value. It will be normalized first, where missing, undefined, empty values are converted to the string  github , and other values will be lower-cased. Also,  github.com and  gitlab.com will be shortened to  github and  gitlab . kind: string Indicates what kind of related value should be returned:   norm : the normalized value as described above   tech : technology of the backend: either  github or  gitlab or None; we assume that there is only one GitHub; that there are many Gitlabs; any backend that is not  github is an instance of  gitlab .   name : lowercase shortest name of the backend:  github or  gitlab or a server name like  gitlab.huc.knaw.nl   machine : lowercase machine name of the backend:  github.com or  gitlab.com or a server name like  gitlab.huc.knaw.nl   spec : enclosed in    . Depending on the parameter  default the empty string is returned instead.   clone : base directory where clones of repos in this backend are stored  ~/github , etc.   cache : base directory where data downloads from this backend are stored:  ~/text-fabric-data/github , etc.   url : url of the online backend   urlnb : url of notebooks from the online backend, rendered on NB-Viewer   pages : base url of the Pages service of the backend default: boolean, optional False Only relevant for  kind =  rep . If  default is passed and not None and  be is equal to  default , then the empty string is returned. Explanation: this is used to supply a backend specifier to a module but only if that module has a different backend than the main module. Returns    - string",
"func":1
},
{
"ref":"tf.parameters.DOWNLOADS",
"url":92,
"doc":"Local Downloads directory."
},
{
"ref":"tf.parameters.EXPRESS_SYNC",
"url":92,
"doc":"Name of cache indicator file. When a dataset is stored in the cache, information about the release/commit is stored in a file with this name."
},
{
"ref":"tf.parameters.EXPRESS_SYNC_LEGACY",
"url":92,
"doc":"Legacy names of cache indicator files."
},
{
"ref":"tf.parameters.URL_TFDOC",
"url":92,
"doc":"Base url of the online Text-Fabric documentation."
},
{
"ref":"tf.parameters.DOI_TF",
"url":92,
"doc":"DOI of an archived copy of this repo at Zenodo."
},
{
"ref":"tf.parameters.APIREF",
"url":92,
"doc":"Link to the Api docs of Text-Fabric."
},
{
"ref":"tf.parameters.SEARCHREF",
"url":92,
"doc":"Link to the Search docs of Text-Fabric."
},
{
"ref":"tf.parameters.BRANCH_DEFAULT",
"url":92,
"doc":"Default branch in repositories, older value."
},
{
"ref":"tf.parameters.BRANCH_DEFAULT_NEW",
"url":92,
"doc":"Default branch in repositories, modern value."
},
{
"ref":"tf.parameters.APP_CONFIG",
"url":92,
"doc":"Name of the config file of a TF app."
},
{
"ref":"tf.parameters.APP_CONFIG_OLD",
"url":92,
"doc":"Name of the config file of a an older, incompatible TF app."
},
{
"ref":"tf.parameters.APP_CODE",
"url":92,
"doc":"Name of the top-level directory of a legacy TF app."
},
{
"ref":"tf.parameters.APP_APP",
"url":92,
"doc":"Name of the top-level directory of a TF app."
},
{
"ref":"tf.parameters.APP_DISPLAY",
"url":92,
"doc":"Relative path of the css file of a TF app."
},
{
"ref":"tf.parameters.SERVER_DISPLAY_BASE",
"url":92,
"doc":"Base of server css files."
},
{
"ref":"tf.parameters.SERVER_DISPLAY",
"url":92,
"doc":"Bunch of TF-generic css files."
},
{
"ref":"tf.parameters.TEMP_DIR",
"url":92,
"doc":"Name of temporary directories.  ! hint \".gitignore\" Take care that these directories are ignored by git operations. Put a line _temp/ in the  .gitignore file."
},
{
"ref":"tf.parameters.LOCATIONS",
"url":92,
"doc":"Default locations for tf data files. If the  locations parameter for the  tf.fabric.Fabric call is omitted, this is the default. Text-Fabric will search all these directories as for  .tf modules of files."
},
{
"ref":"tf.parameters.LOCAL",
"url":92,
"doc":"Name of auxiliary directories. Examples where this is used:  volume support: inside a TF dataset, the directory  _local contains volumes of that dataset"
},
{
"ref":"tf.parameters.ZIP_OPTIONS",
"url":92,
"doc":"Options for zip when packing tf files. This is for packaging collections of plain tf files into zip files to be attached to releases on GitHub/GitLab.  ! caution \"Not for .tfx files\" This is not the zipping as done when .tf files are pickled and compressed to .tfx files."
},
{
"ref":"tf.parameters.YARN_RATIO",
"url":92,
"doc":"Performance parameter in the  tf.search.search module."
},
{
"ref":"tf.parameters.TRY_LIMIT_FROM",
"url":92,
"doc":"Performance parameter in the  tf.search.search module."
},
{
"ref":"tf.parameters.TRY_LIMIT_TO",
"url":92,
"doc":"Performance parameter in the  tf.search.search module."
},
{
"ref":"tf.parameters.SEARCH_FAIL_FACTOR",
"url":92,
"doc":"Limits fetching of search results to this times maxNode (corpus dependent)"
},
{
"ref":"tf.parameters.LS",
"url":92,
"doc":"Directory where layered search code is stored. Layered search is client-side search, generated in a dedicated search repo. If the main data resides in org/repo, then the layered search code resides in org/repo-search/layeredsearch."
},
{
"ref":"tf.cheatsheet",
"url":93,
"doc":"  A. Advanced API  Initialisation, configuration, meta data, and linking  python A = use('org/repo')   : start up and load a corpus from a repository and deliver its API. : See  tf.about.usefunc  python A.load(features)   : Load an extra bunch of features. :  tf.advanced.app.App.load  python A.showContext( .)   : show app settings :  tf.advanced.settings.showContext  python A.header(allMeta=False)   : show colofon :  tf.advanced.links.header  python A.showProvenance( .)   : show provenance of code and data :  tf.advanced.links.showProvenance  python A.webLink(n,  .)   : hyperlink to node n on the web :  tf.advanced.links.webLink  python A.flexLink(\"pages\") A.flexLink(\"tut\")   : hyperlink to app tutorial and documentation :  tf.advanced.links.flexLink  python A.isLoaded(features=None)   : Show information about loaded features :  tf.core.api.Api.isLoaded  -  Displaying  python A.specialCharacters()   : show all hard-to-type characters in the corpus in a widget :  tf.advanced.text.specialCharacters  python A.showFormats()   : show all text formats and their definitions :  tf.advanced.text.showFormats  python A.dm(markdownString)   : display markdown string in notebook :  tf.advanced.helpers.dm  python A.dh(htmlString)   : display HTML string in notebook :  tf.advanced.helpers.dh  python A.method(option1=value1, option2=value2,  .)   : Many of the following methods accept these options as keyword arguments: :  tf.advanced.options  python A.displayShow( .)   : show display options :  tf.advanced.display.displayShow  python A.displayReset( .)   : reset display options :  tf.advanced.display.displayReset  python A.displaySetup( .)   : set up display options :  tf.advanced.display.displaySetup  python A.table(results,  .)   : plain rendering of tuple of tuples of node :  tf.advanced.display.table  python A.plainTuple(tup,  .)   : plain rendering of tuple of node :  tf.advanced.display.plainTuple  python A.plain(node,  .)   : plain rendering of node :  tf.advanced.display.plain  python A.show(results,  .)   : pretty rendering of tuple of tuples of node :  tf.advanced.display.show  python A.prettyTuple(tup,  .)   : pretty rendering of tuple of node :  tf.advanced.display.prettyTuple  python A.pretty(node,  .)   : pretty rendering of node :  tf.advanced.display.pretty  python A.unravel(node,  .)   : convert a graph to a tree :  tf.advanced.unravel.unravel  python A.getCss()   : get the complete CSS stylesheet for this app :  tf.advanced.display.getCss  -  Search (high level)  python A.search( .)   : search, collect and deliver results, report number of results :  tf.advanced.search.search  -  Sections and Structure  python A.nodeFromSectionStr( .)   : lookup node for sectionheading :  tf.advanced.sections.nodeFromSectionStr  python A.sectionStrFromNode( .)   : lookup section heading for node :  tf.advanced.sections.sectionStrFromNode  python A.structureStrFromNode( .)   : lookup structure heading for node :  tf.advanced.sections.structureStrFromNode  -  Volumes and collections See also  tf.about.volumes .  python A.getVolumes()   : list all volumes of this dataset :  tf.fabric.Fabric.getVolumes  python A.extract(volumes,  .)   : export volumes based on a volume specification :  tf.fabric.Fabric.extract  python A.collect(volumes,  .)   : collect several volumes into a new collection :  tf.advanced.display.export :  tf.fabric.Fabric.collect  -  Export to Excel  python A.export(results,  .)   : export formatted data :  tf.advanced.display.export  -  Logging  python A.dm(markdownString)   : display markdown string in notebook :  tf.advanced.helpers.dm  python A.dh(htmlString)   : display HTML string in notebook :  tf.advanced.helpers.dh  python A.version   : version number of data of the corpus. :  tf.fabric.Fabric.version The following methods work also for  TF. instead of  A. :  python A.banner   : banner of the Text-Fabric program. :  tf.fabric.Fabric.banner  python A.isSilent()   : report the verbosity of Text-Fabric :  tf.core.timestamp.Timestamp.isSilent  python A.silentOn(deep=False)   : make TF (deeply) silent from now on. :  tf.core.timestamp.Timestamp.silentOn  python A.silentOff()   : make TF talkative from now on. :  tf.core.timestamp.Timestamp.silentOff  python A.setSilent(silent)   : set the verbosity of Text-Fabric. :  tf.core.timestamp.Timestamp.setSilent  python A.indent(level=None, reset=False)   : Sets up indentation and timing of following messages :  tf.core.timestamp.Timestamp.indent  python A.info(msg, tm=True, nl=True,  .)   : informational message :  tf.core.timestamp.Timestamp.info  python A.warning(msg, tm=True, nl=True,  .)   : warning message :  tf.core.timestamp.Timestamp.warning  python A.error(msg, tm=True, nl=True,  .)   : error message :  tf.core.timestamp.Timestamp.error  -   N. F. E. L. T. S. C. Core API   N. Nodes Read about the canonical ordering here:  tf.core.nodes .  python N.walk()   : generator of all nodes in canonical ordering :  tf.core.nodes.Nodes.walk  python N.sortNodes(nodes)   : sorts  nodes in the canonical ordering :  tf.core.nodes.Nodes.sortNodes  python N.otypeRank[nodeType]   : ranking position of  nodeType :  tf.core.nodes.Nodes.otypeRank  python N.sortKey(node)   : defines the canonical ordering on nodes :  tf.core.nodes.Nodes.sortKey  python N.sortKeyTuple(tup)   : extends the canonical ordering on nodes to tuples of nodes :  tf.core.nodes.Nodes.sortKeyTuple  python N.sortKeyChunk(node)   : defines the canonical ordering on node chunks :  tf.core.nodes.Nodes.sortKeyChunk  -   F. Node features  python Fall()   : all loaded feature names (node features only) :  tf.core.api.Api.Fall  python F.fff.v(node)   : get value of node feature  fff :  tf.core.nodefeature.NodeFeature.v  python F.fff.s(value)   : get nodes where feature  fff has  value :  tf.core.nodefeature.NodeFeature.s  python F.fff.freqList( .)   : frequency list of values of  fff :  tf.core.nodefeature.NodeFeature.freqList  python F.fff.items( .)   : generator of all entries of  fff as mapping from nodes to values :  tf.core.nodefeature.NodeFeature.items  python F.fff.meta   : meta data of feature  fff :  tf.core.nodefeature.NodeFeature.meta  python Fs('fff')   : identical to  F.ffff , usable if name of feature is variable :  tf.core.api.Api.Fs  -  Special node feature  otype Maps nodes to their types.  python F.otype.v(node)   : get type of  node :  tf.core.otypefeature.OtypeFeature.v  python F.otype.s(nodeType)   : get all nodes of type  nodeType :  tf.core.otypefeature.OtypeFeature.s  python F.otype.sInterval(nodeType)   : gives start and ending nodes of  nodeType :  tf.core.otypefeature.OtypeFeature.sInterval  python F.otype.items( .)   : generator of all (node, type) pairs. :  tf.core.otypefeature.OtypeFeature.items  python F.otype.meta   : meta data of feature  otype :  tf.core.otypefeature.OtypeFeature.meta  python F.otype.maxSlot   : the last slot node :  tf.core.otypefeature.OtypeFeature.maxSlot  python F.otype.maxNode   : the last node :  tf.core.otypefeature.OtypeFeature.maxNode  python F.otype.slotType   : the slot type :  tf.core.otypefeature.OtypeFeature.slotType  python F.otype.all   : sorted list of all node types :  tf.core.otypefeature.OtypeFeature.all  -   E. Edge features  python Eall()   : all loaded feature names (edge features only) :  tf.core.api.Api.Eall  python E.fff.f(node)   : get value of feature  fff for edges  from node :  tf.core.edgefeature.EdgeFeature.f  python E.fff.t(node)   : get value of feature  fff for edges  to node :  tf.core.edgefeature.EdgeFeature.t  python E.fff.freqList( .)   : frequency list of values of  fff :  tf.core.edgefeature.EdgeFeature.freqList  python E.fff.items( .)   : generator of all entries of  fff as mapping from edges to values :  tf.core.edgefeature.EdgeFeature.items  python E.fff.b(node)   : get value of feature  fff for edges  from and  to node :  tf.core.edgefeature.EdgeFeature.b  python E.fff.meta   : all meta data of feature  fff :  tf.core.edgefeature.EdgeFeature.meta  python Es('fff')   : identical to  E.fff , usable if name of feature is variable :  tf.core.api.Api.Es  -  Special edge feature  oslots Maps nodes to the set of slots they occupy.  python E.oslots.items( .)   : generator of all entries of  oslots as mapping from nodes to sets of slots :  tf.core.oslotsfeature.OslotsFeature.items  python E.oslots.s(node)   : set of slots linked to  node :  tf.core.oslotsfeature.OslotsFeature.s  python E.oslots.meta   : all meta data of feature  oslots :  tf.core.oslotsfeature.OslotsFeature.meta  -   L. Locality  python L.i(node, otype= .)   : go to intersecting nodes :  tf.core.locality.Locality.i  python L.u(node, otype= .)   : go one level up :  tf.core.locality.Locality.u  python L.d(node, otype= .)   : go one level down :  tf.core.locality.Locality.d  python L.p(node, otype= .)   : go to adjacent previous nodes :  tf.core.locality.Locality.p  python L.n(node, otype= .)   : go to adjacent next nodes :  tf.core.locality.Locality.n  -   T. Text  python T.text(node, fmt= .,  .)   : give formatted text associated with node :  tf.core.text.Text.text  -  Sections Rigid 1 or 2 or 3 sectioning system  python T.sectionTuple(node)   : give tuple of section nodes that contain node :  tf.core.text.Text.sectionTuple  python T.sectionFromNode(node)   : give section heading of node :  tf.core.text.Text.sectionFromNode  python T.nodeFromSection(section)   : give node for section heading :  tf.core.text.Text.nodeFromSection  -  Structure Flexible multilevel sectioning system  python T.headingFromNode(node)   : give structure heading of node :  tf.core.text.Text.headingFromNode  python T.nodeFromHeading(heading)   : give node for structure heading :  tf.core.text.Text.nodeFromHeading  python T.structureInfo()   : give summary of dataset structure :  tf.core.text.Text.structureInfo  python T.structure(node)   : give structure of  node and all in it. :  tf.core.text.Text.structure  python T.structurePretty(node)   : pretty print structure of  node and all in it. :  tf.core.text.Text.structurePretty  python T.top()   : give all top-level structural nodes in the dataset :  tf.core.text.Text.top  python T.up(node)   : gives parent of structural node :  tf.core.text.Text.up  python T.down(node)   : gives children of structural node :  tf.core.text.Text.down  -   S. Search (low level) [searchRough](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/searchRough.ipynb)  Preparation  python S.search(query, limit=None)   : Query the TF dataset with a template :  tf.search.search.Search.search  python S.study(query,  .)   : Study the query in order to set up a plan :  tf.search.search.Search.study  python S.showPlan(details=False)   : Show the search plan resulting from the last study. :  tf.search.search.Search.showPlan  python S.relationsLegend()   : Catalog of all relational devices in search templates :  tf.search.search.Search.relationsLegend  -  Fetching results  python S.count(progress=None, limit=None)   : Count the results, up to a limit :  tf.search.search.Search.count  python S.fetch(limit=None,  .)   : Fetches the results, up to a limit :  tf.search.search.Search.fetch  python S.glean(tup)   : Renders a single result into something human readable. :  tf.search.search.Search.glean  -  Implementation  python S.tweakPerformance( .)   : Set certain parameters that influence the performance of search. :  tf.search.search.Search.tweakPerformance  -   C. Computed data components. Access to precomputed data:  tf.core.computed.Computeds . All components have just one useful attribute:  .data .  python Call()   : all precomputed data component names :  tf.core.api.Api.Call  python Cs('ccc')   : identical to  C.ccc , usable if name of component is variable :  tf.core.api.Api.Cs  python C.levels.data   : various statistics on node types :  tf.core.prepare.levels  python C.order.data   : the canonical order of the nodes ( tf.core.nodes ) :  tf.core.prepare.order  python C.rank.data   : the rank of the nodes in the canonical order ( tf.core.nodes ) :  tf.core.prepare.rank  python C.levUp.data   : feeds the  tf.core.locality.Locality.u function :  tf.core.prepare.levUp  python C.levDown.data   : feeds the  tf.core.locality.Locality.d function :  tf.core.prepare.levDown  python C.boundary.data   : feeds the  tf.core.locality.Locality.p and  tf.core.locality.Locality.n functions :  tf.core.prepare.boundary  python C.characters.data   : frequency list of characters in a corpus, separately for all the text formats :  tf.core.prepare.characters  python C.sections.data   : feeds the section part of  tf.core.text :  tf.core.prepare.sections  python C.structure.data   : feeds the structure part of  tf.core.text :  tf.core.prepare.structure  -   TF. Dataset  Loading  python TF = Fabric(locations=dirs, modules=subdirs, volume=None, collection=None, silent=\"auto\")   : Initialize API on work or single volume or collection of a work from explicit directories. Use  tf.app.use instead wherever you can. See also  tf.about.volumes . :  tf.fabric.Fabric  python TF.isLoaded(features=None)   : Show information about loaded features :  tf.core.api.Api.isLoaded  python TF.explore(show=True)   : Get features by category, loaded or unloaded :  tf.fabric.Fabric.explore  python TF.loadAll(silent=\"auto\")   : Load all loadable features. :  tf.fabric.Fabric.loadAll  python TF.load(features, add=False)   : Load a bunch of features from scratch or additionally. :  tf.fabric.Fabric.load  python TF.ensureLoaded(features)   : Make sure that features are loaded. :  tf.core.api.Api.ensureLoaded  python TF.makeAvailableIn(globals(   : Make the members of the core API available in the global scope :  tf.core.api.Api.makeAvailableIn  python TF.ignored   : Which features have been overridden. :  tf.core.api.Api.ignored  -  Volumes See also  tf.about.volumes .  python TF.getVolumes()   : list all volumes of this dataset :  tf.fabric.Fabric.getVolumes  python TF.extract(volumes,  .)   : export volumes based on a volume specification :  tf.fabric.Fabric.extract  python TF.collect(volumes,  .)   : collect several volumes into a new collection :  tf.advanced.display.export :  tf.fabric.Fabric.collect  Saving  python TF.save(nodeFeatures={}, edgeFeatures={}, metaData={}  .)   : Save a bunch of newly generated features to disk. :  tf.fabric.Fabric.save  -  House keeping  python TF.version   : version number of Text-Fabric. :  tf.fabric.Fabric.version  python TF.clearCache()   : clears the cache of compiled TF data :  tf.fabric.Fabric.clearCache  python from tf.clean import clean    python clean()   : clears the cache of compiled TF data :  tf.clean  -  Volume support TF datasets per volume or collection of a work. See also  tf.about.volumes .  python from tf.volumes import getVolumes getVolumes(volumeDir)   : List volumes in a directory. :  tf.volumes.extract.getVolumes  python from tf.volumes import extract extract(work, volumes,  .)   : Extracts volumes from a work :  tf.volumes.extract  python from tf.volumes import collect collect(volumes, work,  .)   : Collects several volumes into a new collection :  tf.volumes.collect  -  Dataset Operations  python from tf.dataset import modify modify(source, target,  .)   : Modifies a TF datasets into one new TF dataset :  tf.dataset.modify  python from tf.dataset import Versions Versions(api, va, vb, slotMap)   : Extends a slot mapping between versions of a TF dataset to a complete node mapping :  tf.dataset.nodemaps  -  Data Interchange  Custom node sets for search  python from tf.lib import readSets from tf.lib import writeSets    python readSets(sourceFile)   : reads a named sets from file :  tf.lib.readSets  python writeSets(sets, destFile)   : writes a named sets to file :  tf.lib.writeSets  -  Export to Excel  python A.export(results,  .)   : export formatted data :  tf.advanced.display.export  -  Interchange with external annotation tools  python from convert.recorder import Recorder    python Recorder()   : generate annotatable plain text and import annotations :  tf.convert.recorder  -  TEI import  python from tf.convert.tei import TEI    python T = TEI( .)   : convert TEI source to full-fledged TF dataset plus app plus docs :  tf.convert.tei  -  MQL interchange  python TF.exportMQL()   : export loaded dataset to MQL :  tf.fabric.Fabric.exportMQL  python TF.importMQL()   : convert MQL file to TF dataset :  tf.fabric.Fabric.importMQL  -  Walker conversion  python from tf.convert.walker import CV    python cv = CV(TF)   : convert structured data to TF dataset :  tf.convert.walker  -  Exploding  python from tf.convert.tf import explode    python explode(inLocation, outLocation)   : explode TF feature files to straight data files without optimizations :  tf.convert.tf.explode  -  TF-App development  python A.reuse()   : reload config data :  tf.advanced.app.App.reuse  python from tf.advanced.find import loadModule    python mmm = loadModule(\"mmm\",  args)   : load specific module supporting the corpus app :  tf.advanced.find.loadModule   ~/mypath/myname/app/config.yaml   : settings for a TF-App :  tf.advanced.settings  -  Layered search (these work on the commandline if Text-Fabric is installed)  sh text-fabric-make {dataset} {client} ship   : generate a static site with a search interface in client-side javascript and publish it to GitHub pages. If  {client} is left out, generate all clients that are defined for this dataset. Clients are defined in the  app-{dataset} repo, under  layeredsearch . More commands [here](https: github.com/annotation/text-fabric/blob/master/tf/client/make/help.py). :  tf.client.make.build  sh text-fabric-make {dataset} serve   : serve the search interfaces defined for  {dataset} locally. More commands [here](https: github.com/annotation/text-fabric/blob/master/tf/client/make/help.py).  -  Command-line tools (these work on the commandline if Text-Fabric is installed)  sh text-fabric {org}/{repo}   : Starts the text-fabric browser for the corpus in  org / repo . :  tf.server.start  sh text-fabric-zip {org}/{repo}   : Zips the TF dataset in  org / repo so that it can be attached to a release on Github/GitLab. :  tf.advanced.zipdata  sh nbconvert {inDirectory} {outDirectory}   : Converts notebooks in  inDirectory to HTML and stores them in  outDirectory . :  tf.tools.nbconvert  sh xmlschema analysis {schema}.xsd   : Analyses an XML  schema file and extracts meaningful information for processing the XML that adheres to that schema. :  tf.tools.xmlschema "
},
{
"ref":"tf.volumes",
"url":94,
"doc":" Volume operations This package contains functions to support works and their volumes in TF. There are the following basic operations:  Collect, see  tf.volumes.collect , (collect several volumes into one work)  Extract, see  tf.volumes.extract , (extract volumes from a work)"
},
{
"ref":"tf.volumes.collect",
"url":95,
"doc":" Collect  Usage   from tf.volumes import collect collect( ( location1, location2, ), workLocation, )     collect( ( (name1, location1), (name2, location2), ), workLocation, volumeType=None, volumeFeature=None, featureMeta=None,  otext, )  "
},
{
"ref":"tf.volumes.collect.collect",
"url":95,
"doc":"Creates a collection out of a number of volumes. The volumes are individual TF data sets, the work is a new TF data set. You may pass as many volume data sources as you want. The work will be the union of all nodes of the volumes, rearranged according to their types, where node types with the same names will be merged. The slots of the work are the concatenation of the slots of the volumes, which must all have the same slot type. The node and edge features will be remapped, so that they have the same values in the work as they had in the individual volumes.  ! caution \"inter-volume edges\" The edge features of each volume only contain edges between nodes in that volume. But the work as a whole may have had edges between nodes of different volumes. These can be restored from two extra features that may exist in the volumes:  ointerfrom and  ointerto . See also  tf.volumes.extract . The volumes may contain a feature  owork which maps each node in a volume to the corresponding node in the work. Some non-slot nodes in the work may have slots in multiple volumes.  ! hint \"Lexeme nodes\" Think of lexeme nodes that have slots for all occurrences of that lexeme. When a work is split into volumes, the lexeme nodes map to separate lexeme nodes in each volume where these lexemes occur. When we collect volumes into works, we want to merge these lexeme nodes again. When non-slot nodes across volumes have the same value for their  owork feature, they will be merged into the work. That means: only one node will be created in the work, and the slots of that node will be the union of the slots these nodes have in the individual volumes.  ! caution \"Overlapping slots\" It is an error if volumes have overlapping slots. Overlapping slots are those whose values of  owork are identical. A feature  ovolume will be created which maps each node of the work to the corresponding node(s) in the individual volume(s). Optionally, nodes corresponding to the volumes themselves will be added to the work. Care will be taken of the metadata of the features and the contents of the  otext.tf feature, which consists of metadata only. All details of the work can be steered by means of parameters. You can use this function to recombine volumes that have been obtained by extracting them from a work by means of  tf.volumes.extract . In this case, there is no need to pass  volumeType and  volumeFeature . Parameters      volumes: dict or tuple of (string or tuple) You can either pass just the locations of the volumes, or you can give them a name and pass  (name, location) instead, or pass them as a dictionary with names as keys and locations as values. If you do not give names to volumes, their locations will be used as name. However, names are only used if you pass  volumeType and /or  volumeFeature .  ! caution \"Disjointness\" A collection can not contain the same volume more than once. workLocation: string The directory into which the feature files of the work will be written. overwrite: boolean, optional None If True, the target collection will be be created and will replace any existing collection/volume of the same name. If None, the collection will only be created if it does not exist. No check will be performed as to whether an existing collection is equal to what would have been created by this call. If False, refuses to proceed if the collection directory already exists. volumeType, volumeFeature: string, optional None If a string value for one of these is passed, a new node type will be added to the work, with one new node for each volume: the volume node. There will also be a new feature, that assigns the name of a volume to the node of that volume. The name of the new node type is the value of  volumeType if it is a non-empty string, else it is the value of  volumeFeature . The name of the new feature is  volumeFeature if it is a non-empty string, else it is the value of  volumeType .  ! caution \"volumeType must be fresh\" It is an error if the  volumeType is a node type that already occurs in one of the volumes.  ! note \"volumeFeature may exist\" The  volumeFeature may already exist in one or more volumes. In that case the new feature values for nodes of  volumeType will just be added to it. Example    - collect( dict( banks='banks/tf/0.2', river='banks/tf/0.4', ), 'riverbanks/tf/1.0', volumeType='volume', volumeFeature='vol', ) This results in a work with nodes and features from the volumes found at the indicated places on your file system. After combination, the volumes are visible in the work as nodes of type  volume , and the feature  vol provides the names  banks and  river for those nodes. featureMeta: dict, optional None The meta data of the volumes involved will be merged. If feature metadata of the same feature is encountered in different volumes, and if volumes specify different values for the same keys, the different values will be stored under a key with the name of the volume appended to the key, separated by a  ! . The special metadata field  valueType will just be reduced to one single value  str if some volumes have it as  str and others as  int . If the volumes assign the same value type to a feature, that value type will be assigned to the combined feature. If you want to assign other meta data to specific features, or pass meta data for new features that orginate from the merging process, you can pass them in the parameter  featureMeta as in the following example, where we pass meta data for a feature called  level with integer values. The contents of the  otext.tf features are also metadata, and their contents will be merged in exactly the same way. So if the section/structure specifications and the formats are not the same for all volumes, you will see them spread out in fields qualified by the volume name with a  ! sign between the key and the volume. But you can add new specifications explicitly, as meta data of the  otext feature. by passing them as keyword arguments. They will be passed directly to the combined  otext.tf feature and will override anything with the same key that is already in one of the volumes. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp Returns    - boolean Whether the creation was successful. All features in the resulting collection will get a metadata key  volume with as value the name of the collection and its component volumes. Example    - collect( dict( banks='banks/tf/0.2', river='banks/tf/0.4', ), 'riverbanks/tf/1.0', featureMeta=dict( level=dict( valueType='int', description='level of a section node', ), ), ) Example    - collect( dict( banks='banks/tf/0.2', river='banks/tf/0.4', ), 'riverbanks/tf/1.0', featureMeta=dict( otext=dict( volumeType='volume', volumeFeature='vol', sectionTypes='volume,chapter,line', sectionFeatures='title,number,number', ), ), silent=SILENT_D, ) This will give rise to something like this (assuming that  banks and  rivers have some deviating material in their  otext.tf : @config @compiler=Dirk Roorda @dateWritten=2019-05-20T19:12:23Z @fmt:line-default={letters:XXX}{terminator} @fmt:line-term=line {terminator} @fmt:text-orig-extra={letters}{punc}{gap} @fmt:text-orig-full={letters} @fmt:text-orig-full!banks={letters}{punc} @fmt:text-orig-full!rivers={letters}{gap} @name=Culture quotes from Iain Banks @purpose=exposition @sectionFeatures=title,number,number @sectionFeatures!banks=title,number,number @sectionFeatures!rivers=number,number,number @sectionTypes=volume,chapter,line @sectionTypes!banks=book,chapter,sentence @sectionTypes!rivers=chapter,sentence,line @source=Good Reads @status=with for similarities in a separate module @structureFeatures!banks=title,number,number,number @structureFeatures!rivers=title,number,number @structureTypes!banks=book,chapter,sentence,line @structureTypes!rivers=book,chapter,sentence @url=https: www.goodreads.com/work/quotes/14366-consider-phlebas @version=0.2 @writtenBy=Text-Fabric @writtenBy=Text-Fabric @dateWritten=2019-05-28T10:55:06Z  ! caution \"inter-version edges\" Features with names starting in  omap@ contain node maps from older to newer versions. These will be excluded from collection.",
"func":1
},
{
"ref":"tf.volumes.extract",
"url":96,
"doc":" Extract  Usage   from tf.volumes import extract extract( workLocation, volumesLocation, volumes=None or dict of top-level section titles/numbers )  "
},
{
"ref":"tf.volumes.extract.getVolumes",
"url":96,
"doc":"Lists volumes of a work that exist in a given directory. A directory is a volume if it contains the file  otype.tf and that file has a line starting with  @volume= xxx where  xxx is the name of the directory. Parameters      volumesLocation: string The directory to search for volumes. Returns    - None or list If  volumesLocation does not exist or is not a directory, None is returned. Otherwise a list of subdirectories that are modules.",
"func":1
},
{
"ref":"tf.volumes.extract.extract",
"url":96,
"doc":"Extracts volumes of a work. The volumes are new TF data sets, the work is an existing TF data set. Volumes of a work consist of collections of its top-level sections. You can define volumes by passing a volume specification. If the specification  True is given, a volume will be created for every single top-level section. Volumes will get a node feature  owork which maps nodes in the volume to nodes in the work.  ! note \"use of feature owork\" If volumes are combined to a work, nodes in distinct volumes may correspond to a single node in the work. In that case, they have the same value in the  owork feature. When combining, such nodes are merged into one node in the work, with slots the union of the slots of those nodes in the volumes. See also  tf.volumes.collect .  ! caution \"inter-volume edges\" Some edge features may link nodes across volumes. When creating a volume, we leave out those edges. Doing so, we loose information, which prevents us to reinstate inter volume edges when we collect volumes. That's why we'll save those inter-volume edges in two special features.  ! caution \"inter-version edges\" Features with names starting in  omap@ contain node maps from older to newer versions. These will be excluded from volumes. Volumes will also get two node features  ointerfrom and  ointerto . For each node  f in the volume,  ointerfrom has a value composed of all work nodes  t outside the volume that are reached by an edge named  e from  f with value  val . For each node  t in the volume,  ointerto has a value composed of all work nodes  f outside the volume that reach  t by an edge named  e with value  val . More precisely, the keys of  ointerf and  ointert are nodes  nW of the  original work that correspond with nodes in the volume that have outgoing resp. incoming edges to resp. from other volumes. Each value of  oninterf and  ointert is a semicolon separated list of  mW ,  e ,  doValues ,  valueType ,  value where  mW is the node in the  original work reached by  nW or that reaches  nW  e is the name of the edge feature in question  doValues is  v if the edge feature has values and  x otherwise  valueType is \"i\" (int) or \"s\" (str)  value is the value assigned by the edge feature to the edge from  nW to  mW or from  mW to  nW . If the edge does not have values it is a dummy value  x . Parameters      workLocation: string The directory where the dataset resides. volumesLocation: string The directory under which the feature files of the volumes will be written. volumes: boolean or dict or set, optional True If True, extracts all top-level sections into separate volumes. If it is a dict, the keys are names for the volumes, and the values are tuples or lists of top-level sections that make up the volumes. If it is a set, each member is an tuple of top-level sections that belong to that volume. In this case, each volume gets a generated name. The top-level sections must be specified by their title if  byTitle is True, else by their sequence number. If names for volumes have to be generated, they will consist of the top-level section specifications, separated by a \"-\".  ! caution \"Disjointness\" All volumes must be disjoint, they cannot have top-level sections in common. byTitle: boolean, optional True Whether the top-level sections are named by their sequence numbers (starting at 1). or by their titles. Default: by their titles. Note, that depending on the work, section titles may be strings or integers. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp api: object, optional None If given, assume it is the TF api of a loaded work from which the volumes are to be extracted. In this case, the  workLocation parameter is not used. If absent or  None , the dataset at  workLocation will be loaded by Text-Fabric, and its api will be used subsequently. overwrite: boolean, optional None If True, the volumes defined by  volumes will be all be created and will replace any existing volumes of the same names. If None, only missing volumes will be created. No check will be performed as to whether existing volumes conform to the volume specifications. If False, refuses to proceed if any of the volume directories already exist. checkOnly: boolean, optional False If True, only checks whether there is work to do based on the values of the  volumes and  overwrite parameters. If there is an error, returns False, otherwise returns the volumes in as far as they have to be extracted. show: boolean, optional False If True, does not return anything, but pretty prints the result to the screen. Returns    - dict For each volume an item, whose key is the name of the volume and whose value is a dict with items  location (on disk) and  new (whether the volume has been created by this call). Example    - volumeList = extract( 'clariah-gm/tf/0.9.1', 'clariah-gm/asvolumes/tf/0.9.1', ) This will extract the top-level sections of the missives corpus into that many volumes. Example    - volumeList = extract( 'clariah-gm/tf/0.9.1', 'clariah-gm/asvolumes/tf/0.9.1', volumes=dict( early=(1,2,3,4,5,6,7,8), late=(9, 10, 11, 12), ) ) This will create 2 volumes, named  early and  late , where  early consists of top-level sections 1-8, and  late consists of top-level sections 9-12. Top-level section 13 will not be extracted into a volume. Example    - volumeList = extract( 'bhsa/tf/2021', 'bhsa/asvolumes/tf/2021', ) This will extract the books of the bible as separate volumes. Example    - volumeList = extract( 'bhsa/tf/2021', 'bhsa/asvolumes/tf/2021', volumes=dict( thora=(\"Genesis\", \"Exodus\", \"Leviticus\", \"Numeri\", \"Deuteronomy\"), poetry=(\"Psalms\", \"Proverbs\"), ), ) This will extract two volumes of the bible:  thora with the first 5 books and  poetry with two poetic books.",
"func":1
},
{
"ref":"tf.client",
"url":97,
"doc":" Layered Search A search interface for Text-Fabric datasets. The interface is purely client side, written in Javascript. It depends on corpus data generated from the underlying text-fabric data of a corpus. This repo contains the machinery to generate such an interface, based on essentially two parameters:  a bunch of configuration details;  a piece of code that generates the search data. See also:   tf.about.clientmanual   tf.client.make.build  Author  Author : [Dirk Roorda](https: pure.knaw.nl/portal/en/persons/dirk-roorda)  Acknowledgements Layered search has been developed first in a project for the [NENA corpus developed at Cambridge](https: github.com/CambridgeSemiticsLab/nena_tf). Thanks to Cody Kingham for developing the foundational ideas and to Geoffrey Khan for funding the project. Thanks to DANS for giving me the space to turn these ideas into a product and developing them further."
},
{
"ref":"tf.client.make",
"url":98,
"doc":"The search app make program"
},
{
"ref":"tf.client.make.build",
"url":99,
"doc":" Usage After installing Text-Fabric, you have a new command  text-fabric-make . You can use this on the command line to build new search interfaces for existing Text-Fabric apps. Such a search interface is a static HTML page, powered by a Javascript program that reads the corpus data from Javascript variables. You can build the interface and deploy the HTML page to GitHub Pages (GitLab pages not yet supported), after which it is usable for everyone.  Prerequisites 1. A Text-Fabric dataset that has a TF-App, e.g.  CambridgeSemiticsLab/nena_tf [github.com/CambridgeSemiticsLab/nena_tf](https: github.com/CambridgeSemiticsLab/nena_tf). This is the normative example for now. 1. An accompanying repository in the same organization, with the same name but with  -search appended to the name. 1. Within that  -search repo, a subdirectory [layeredsearch](https: github.com/CambridgeSemiticsLab/nena_tf-search/tree/master/layeredsearch) with definitions of search interfaces (you can define multiple search interfaces for one dataset). Within this directory: 1.  config.yaml : common metadata of all defined search interfaces 1. for each search interface a folder whose name is the name of the search interface, containing 1.  config.yaml : definition of this specific search interface 1.  logo.png : a logo 1.  custom.css : additional styling (may be empty) 1.  mkdata.py : a module containing a few functions that wrap the corpus data into Javascript variables: 1.  makeLegends(maker) : produce abbreviation lists for some layers 2.  record(maker) : produce all the search data: full texts of layers and mappings between nodes and positions in those texts The  maker argument is passed by the builder, and contains the definition of the layers and the api of a loaded Text-Fabric dataset.  Commands See also:   tf.client.make.help   tf.about.clientmanual "
},
{
"ref":"tf.client.make.build.console",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.invertMap",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.readArgs",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make",
"url":99,
"doc":""
},
{
"ref":"tf.client.make.build.Make.doCommand",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.config",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.importMake",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.makeClientSettings",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.loadTf",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.makeConfig",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.makeLinks",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.makeCorpus",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.dumpConfig",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.compress",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.dumpCorpus",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.makeCombined",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.makeHtml",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.makeClient",
"url":99,
"doc":"We create a client app in the target directory. The client consists of HTML/CSS/PNG files plus a modular Javascript program. Module loading does not work when you open the HTML file locally (i.e. when the HTML is not served by a server). N.B. There is a difference between a local web server serving at  localhost and opening the file directly into your browser by double clicking on it. In the first case, you see in your un the URL bar of your browser something that starts with  http:  or  https:  , in the second case you see  file:  instead. Modular Javascript does not work with  file:  origins. For that case, we bundle the modules into one, and let a \u00abclient\u00bb-local.html include it We also zip the client into {C.client}.zip so that users can download it easily However, if the debugState is on, we skip all steps that are unneccesary to see the updated client working. But we do save an extra copy of the texts to the local dir in such a way that they can be easily inspected.",
"func":1
},
{
"ref":"tf.client.make.build.Make.zipApp",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.publish",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.ship",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.make",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.serve",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.incVersion",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.showVersion",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.adjustVersion",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.replaceDebug",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.getDebugs",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.showDebug",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.adjustDebug",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.Make.getAllClients",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.makeSearchClients",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.build.main",
"url":99,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.gh",
"url":100,
"doc":""
},
{
"ref":"tf.client.make.gh.console",
"url":100,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.gh.deploy",
"url":100,
"doc":"",
"func":1
},
{
"ref":"tf.client.make.help",
"url":101,
"doc":""
},
{
"ref":"tf.convert",
"url":102,
"doc":" Various forms of data interchange Text-Fabric can interchange data with MQL, see  tf.convert.mql . It has also support for converting streams of data to Text-Fabric format, see  tf.convert.walker . And there is support for round trips of TF data to annotation tools and back, see  tf.convert.recorder . You can  explode plain TF files in big, non-optimized data files, see  tf.convert.tf.explode ."
},
{
"ref":"tf.convert.app",
"url":103,
"doc":""
},
{
"ref":"tf.convert.app.app",
"url":104,
"doc":""
},
{
"ref":"tf.convert.app.app.fmt_layout",
"url":104,
"doc":"",
"func":1
},
{
"ref":"tf.convert.app.app.TfApp",
"url":104,
"doc":"Set up the advanced TF API. The parameters are explained in  tf.about.usefunc . Parameters      appName, appPath, checkout, version: string commit, release, local: string backend: string checkout: string, optional  mod: string or iterable, optional [] version: string, optional None locations, modules: string, optional None collection, volume: string, optional None api: object, optional,  None setFile: string, optional,  None silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp hoist: dict, optional False configOverrides: key value pairs _withGc: boolean, optional True If False, it disables the Python garbage collector before loading features. Used to experiment with performance."
},
{
"ref":"tf.convert.app.app.TfApp.load",
"url":14,
"doc":"Loads extra features in addition to the main dataset. This is the same as  tf.fabric.Fabric.load when called with  add=True . Parameters      features: string | iterable Either a string containing space separated feature names, or an iterable of feature names. The feature names are just the names of  .tf files without directory information and without extension. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp Returns    - boolean Whether the feature has been successfully loaded.",
"func":1
},
{
"ref":"tf.convert.app.app.TfApp.reinit",
"url":14,
"doc":"TF-Apps may override this method. It is called by  reuse . Hence it needs to be present.",
"func":1
},
{
"ref":"tf.convert.app.app.TfApp.reuse",
"url":14,
"doc":"Re-initialize the app. The app's settings are read again, the app's code is re-imported, the app's stylesheets are applied again. But the data is left untouched, and no time-consuming reloading of data takes place. Handy when you are developing a new app and want to experiment with it without the costly re-loading of the data in every cycle. Parameters      hoist: boolean, optional False Same as in  App .  ! hint \"the effect of the config settings\" If you are developing a TF app and need to see the effects of the configuration settings in detail, you can conveniently call  reuse and  tf.advanced.settings.showContext in tandem.",
"func":1
},
{
"ref":"tf.convert.app.app.TfApp.context",
"url":14,
"doc":"Result of interpreting all configuration options in  config.yaml . See Also     tf.advanced.settings.showContext"
},
{
"ref":"tf.convert.variants",
"url":105,
"doc":" Variants This module contains functions to help you constructing nodes when you convert TEI material and encounter elements from the [Critical Apparatus Module](https: www.tei-c.org/release/doc/tei-p5-doc/en/html/examples-lem.html TC). An extensive description of the problems and solutions is in  tf.about.variants ."
},
{
"ref":"tf.convert.variants.Variants",
"url":105,
"doc":"Handlers to turn boundaries into nodes even across variants. This class works inside converters of the type  tf.convert.walker . Import it as  python from tf.convert.variants import Variants   It should typically be instantiated inside the  director() function, at a point where  cv and  cur are known. Then issue  Variants.initApps , either once or for each volume in the corpus. After initialization you should call  Variants.collectWitnesses() for each TEI file in the corpus. After collecting the witnesses you should prepare for the final walk through the data by  Variants.resetApps() . This should match the call(s) to  Variants.initApps . Then, at the start of each app-, lem-, rdg- element, call  Variants.startApp(tag) with tag the corresponding tag name (  app ,  lem , or  rdg ). Likewise, at the end, call  Variants.endApp(tag) . Whenever you create slots, isse a  Variants.startSent() first, and a  Variants.checkSent() after. Close every TEI file with a  Variants.endSent() , to finish off all pending sentences. Parameters      cv: object The  tf.convert.walker.CV object. This is the machinery that constructs nodes and assigns features. cur: dict Keys and values by which a conversion program maintains current information. The conversion proceeds by executing a custom  director() function, and this director walks through the source material and fires  cv actions. During the walk, the director can remember incoming data as needed in a dict, and it is this dict that should be passed. The  Variants object stores additional information here under specific keys. Those keys are mentioned in constants in the source code and there are a few keys dependent on the  sentType parameter, namely f\"n{sentType}\" f\"stack{sentType}\" f\"var{sentType}\" baseWitness: string The name of the base text. Take care that it is different from the names of the witnesses. sentType: string The name of the node type of the nodes that will be constructed on the basis of boundaries. It could be \"sentence\", but it could also be any other name, and it is not assumed that the nodes in question represent sentences. It could be anything, provided we have access to its boundaries. checkPunc: function(string, string, punc): boolean Given a the texts of the last two slots and the punctuation after that, it determines whether is contains a boundary. This function should be written in the converter program. Hence it is up to the conversion code to define what constitues a boundary, and whether it are sentences or some things else that are being bounded. This function is called and depending on the outcome sentence nodes are terminated and/or created, or nothing is done. addWarning, addError: function(string, dict) Functions taking a message string and a dict with current information (typically cur). They will be called if a warning or error has to be issued. When they is called,  cur will be passed as dict. This function should be defined in the conversion program. It may use values in  cur to generate an indication where the warning/error occurred."
},
{
"ref":"tf.convert.variants.Variants.collectWitnesses",
"url":105,
"doc":"Collect all witnesses. Call this for the root nodes of every TEI file of the corpus. Collects the witnesses from all rdg-elements. For each lem-element the set of witnesses of its rdg siblings is collected in such a way that it can be retrieved later on. We also store a pointer to the parent app-element of each nested app-element. We also check that multiple direct-rdg children of the same app have disjoint witnesses.",
"func":1
},
{
"ref":"tf.convert.variants.Variants.initApps",
"url":105,
"doc":"Initialize app- processing and witness collection. You can issue this command once for the whole corpus, or each time before entering a volume.",
"func":1
},
{
"ref":"tf.convert.variants.Variants.resetApps",
"url":105,
"doc":"Initialize app- and \"sentence\" processing. Set up the data store for collecting information and \"sentence\" processing. Do this after collecting the witnesses. You can issue this command once for the whole corpus, or each time before entering a volume. But it should be kept in tandem with  Variants.initApps .",
"func":1
},
{
"ref":"tf.convert.variants.Variants.startApp",
"url":105,
"doc":"Actions at the start of app- lem- and rdg-elements. Use this each time you enter one of these XML elements. Parameters      tag: string The tag name of the XML element that is being entered atts: dict The attributes of the XML element that is being entered",
"func":1
},
{
"ref":"tf.convert.variants.Variants.endApp",
"url":105,
"doc":"Actions at the end of app- lem- and rdg-elements. Use this each time you leave one of these XML elements. Parameters      tag: string The tag name of the XML element that is being left",
"func":1
},
{
"ref":"tf.convert.variants.Variants.checkSent",
"url":105,
"doc":"Checks whether there is a \"sentence\" boundary at this point. Use this every time you have added a slot node. Parameters      trans: string The text of the newly added slot node. If this is empty, the text of the slot before that will be consulted. This value is taken from the context information. This very function is responsible for putting the last text value into the context. punc: string The non-alfanumeric text material after the text of the last slot. Will be used to determine whether there is a \"sentence\" break here. The actual check will be done by the function  checkPunc , which has been passed as parameter when the  Variants object was created.",
"func":1
},
{
"ref":"tf.convert.variants.Variants.startSent",
"url":105,
"doc":"Starts a \"sentence\" if there is no current sentence. When in an rdg-element, witness-dependend \"sentence\" nodes are created for each witness for the rdg. Use this before creating a slot and/or at the start of certain elements such as paragraphs.",
"func":1
},
{
"ref":"tf.convert.variants.Variants.endSent",
"url":105,
"doc":"Ends a \"sentence\" if there is a current sentence. Use this at the end of each XML file if you are sure that there should not remain pending sentences. You can also call this at the end of certain elements, such as paragraphs. When in a lem-element, all pending \"sentences\" of all witnesses that agree with the base text here are also ended. No new sentences for these witnesses are started, since we are in the base text.",
"func":1
},
{
"ref":"tf.convert.tf",
"url":106,
"doc":" Raw, unoptimized data from TF files"
},
{
"ref":"tf.convert.tf.explode",
"url":106,
"doc":"Explodes .tf files into non-optimized .tf files without metadata. An exploded .tf feature file is a tf file with explicit node specifiers, no optimizations. The format of each line is:  Node features : node value If the value is None for a certain  node , there will be no such line.  Edge features without values : node node  Edge features with values : node node value If the value is  None , it will be left out, together with the preceding  . This way, the empty string is distinguished from a  None value.  ! caution \"Ambiguity\" In the resulting data file, all metadata is gone. It is not always possible to infer from the data alone what data type a feature has:  1 2 could be a node feature assigning integer 2 to node 1, or string  2 to node 1. It could also be an edge feature assigning  None to the node pair (1, 2). Parameters      inPath: string Source file(s). If pointing to a file, it should be file containing TF feature data. If pointing to a directory, all .tf files in that directory will be exploded (non-recursively). The path may contain  ~ which will be expanded to the user's home directory. outPath: string Destination of the exploded file(s). If pointing to a non-existing location, a file or directory will be created there, depending on whether  inPath is a file or directory. If pointing to an existing directory, exploded file(s) will be put there. Returns    - bool whether the operation was successful.",
"func":1
},
{
"ref":"tf.convert.walker",
"url":107,
"doc":" Walker You can convert a dataset to TF by writing a function that walks through it. That function must trigger a sequence of actions when reading the data. These actions drive Text-Fabric to build a valid Text-Fabric dataset. Many checks will be performed.  ! hint \"to and from MQL\" If your source is MQL, you are even better off: Text-Fabric has a module to import from MQL and to export to MQL. See  tf.fabric.Fabric.importMQL and  tf.fabric.Fabric.exportMQL .  Set up Here is a schematic set up of such a conversion program.   from tf.fabric import Fabric from tf.convert.walker import CV TF = Fabric(locations=OUT_DIR) cv = CV(TF) def director(cv):  your code to unwrap your source data and trigger  the generation of TF nodes, edges and features slotType = 'word'  or whatever you choose otext = {  dictionary of config data for sections and text formats  . } generic = {  dictionary of metadata meant for all features  . } intFeatures = {  set of integer valued feature names  . } featureMeta = {  per feature dicts with metadata  . } good = cv.walk( director, slotType, otext=otext, generic=generic, intFeatures=intFeatures, featureMeta=featureMeta, warn=True, force=False, silent=\"auto\", ) if good:  . load the new TF data  .   See  tf.convert.walker.CV.walk .  Walking When you walk through the input data source, you'll encounter things that have to become slots, non-slot nodes, edges and features in the new data set. You issue these things by means of an  action method from  cv , such as  cv.slot() or  cv.node(nodeType) . When your action creates slots or non slot nodes, Text-Fabric will return you a reference to that node, that you can use later for more actions related to that node.   curPara = cv.node('para')   To add features to nodes, use a  cv.feature() action. It will apply to a node passed as argument. To add features to edges, issue a  cv.edge() action. It will require two node arguments: the  from node and the  to node. There is always a set of current  embedder nodes . When you create a slot node   curWord = cv.slot()   then TF will link all current embedder nodes to the resulting slot. There are actions to add nodes to the set of embedder nodes, to remove them from it, and to add them again.  Dynamic Metadata When the director runs, you may have already specified all your feature metadata, including the value types. But if some of that information is dependent on what you encounter in the data, you can do two things: (A) Run a preliminary pass over the data and gather the required information, before running the director. (B) Update the metadata later on by issuing  cv.meta() actions from within your director, see below. In doing this, you can remove the metadata from unused features, but you can also add metadata to features that have not got them yet. If the set of possible features is not known on beforehand, you can ask for the list of all feature names by means of  cv.features() .  Action methods The  cv class contains methods that are responsible for particular  actions that steer the graph building:   tf.convert.walker.CV.slot   tf.convert.walker.CV.node   tf.convert.walker.CV.terminate   tf.convert.walker.CV.resume   tf.convert.walker.CV.link   tf.convert.walker.CV.linked   tf.convert.walker.CV.feature   tf.convert.walker.CV.features   tf.convert.walker.CV.edge   tf.convert.walker.CV.meta   tf.convert.walker.CV.occurs   tf.convert.walker.CV.active   tf.convert.walker.CV.activeNodes   tf.convert.walker.CV.activeTypes   tf.convert.walker.CV.get and  cv.get(feature, nf, nt)   tf.convert.walker.CV.stop  ! hint \"Example\" Follow the [conversion tutorial](https: nbviewer.jupyter.org/github/annotation/banks/blob/master/programs/convert.ipynb) Or study a more involved example: [Old Babylonian](https: github.com/Nino-cunei/oldbabylonian/blob/master/programs/tfFromATF.py)"
},
{
"ref":"tf.convert.walker.CV",
"url":107,
"doc":"The object that contains the walker conversion machinery. silent: string, optional tf.core.timestamp.SILENT_D See  tf.core.timestamp.Timestamp "
},
{
"ref":"tf.convert.walker.CV.S",
"url":107,
"doc":""
},
{
"ref":"tf.convert.walker.CV.N",
"url":107,
"doc":""
},
{
"ref":"tf.convert.walker.CV.T",
"url":107,
"doc":""
},
{
"ref":"tf.convert.walker.CV.R",
"url":107,
"doc":""
},
{
"ref":"tf.convert.walker.CV.F",
"url":107,
"doc":""
},
{
"ref":"tf.convert.walker.CV.E",
"url":107,
"doc":""
},
{
"ref":"tf.convert.walker.CV.walk",
"url":107,
"doc":"Asks a director function to walk through source data and receives its actions. The  director function should unravel the source. You have to program the  director , which takes one argument:  cv . From the  cv you can use a few standard actions that instruct Text-Fabric to build a graph. This function will check whether the metadata makes sense and is minimally complete. During node creation the section structure will be watched, and you will be warned if irregularities occur. After the creation of the feature data, some extra checks will be performed to see whether the metadata matches the data and vice versa. The new feature data will be written to the output directory of the underlying TF object. In fact, the rules are exactly the same as for  tf.fabric.Fabric.save . Parameters      slotType: string The node type that acts as the type of the slots in the data set. oText: dict The configuration information to be stored in the  otext feature (see  tf.core.text ):  section types  section features  structure types  structure features  text formats generic: dict Metadata that will be written into the header of all generated TF features. You can make changes to this later on, dynamically in your director. intFeatures: iterable The set of features that have integer values only. You can make changes to this later on, dynamically in your director. featureMeta: dict of dict For each node or edge feature descriptive metadata can be supplied. You can make changes to this later on, dynamically in your director. warn: boolean, optional True This regulates the response to warnings:  True (default): stop after warnings (as if they are errors);  False continue after warnings but do show them;  None suppress all warnings. force: boolean, optional False This forces the process to continue after errors. Your TF set might not be valid. Yet this can be useful during testing, when you know that not everything is OK, but you want to check some results. Especially when dealing with large datasets, you might want to test with little pieces. But then you get a kind of non-fatal errors that stand in the way of testing. For those cases:  force=True . generateTf: boolean, optional True You can pass  False here to suppress the actual writing of TF data. In that way you can dry-run the director to check for errors and warnings director: function An ordinary function that takes one argument, the  cv object, and should not deliver anything. Writing this function is the main job to do when you want to convert a data source to TF. See  tf.convert.walker for more details. Returns    - boolean Whether the operation was successful",
"func":1
},
{
"ref":"tf.convert.walker.CV.stop",
"url":107,
"doc":"Stops the director. No further input will be read. cv.stop(msg) The director will exit with a non-good status and issue the message  msg . If you have called  walk() with  force=True , indicating that the director must proceed after errors, then this stop command will cause termination nevertheless. Parameters      msg: string A message to display upon stopping. Returns    - None",
"func":1
},
{
"ref":"tf.convert.walker.CV.slot",
"url":107,
"doc":"Make a slot node and return the handle to it in  n . n = cv.slot() No further information is needed. Remember that you can add features to the node by later cv.feature(n, key=value,  .) calls. Parameters      None Returns    - node reference: tuple The node reference consists of a node type and a sequence number, but normally you do not have to dig these out. Just pass the tuple as a whole to actions that require a node argument.",
"func":1
},
{
"ref":"tf.convert.walker.CV.node",
"url":107,
"doc":"Make a non-slot node and return the handle to it in  n . n = cv.node(nodeType) You have to pass its  node type , i.e. a string. Think of  sentence ,  paragraph ,  phrase ,  word ,  sign , whatever. There are two modes for this function:  Auto: ( slots=None ): Non slot nodes will be automatically added to the set of embedders.  Explicit: ( slots=iterable ): The slots in iterable will be assigned to this node and nothing else. The node will not be added to the set of embedders. Put otherwise: the node will be terminated after construction. However: you could resume it later to add other slots. Remember that you can add features to the node by later cv.feature(n, key=value,  .) calls. Parameters      nType: string A node type, not the slot type slots: iterable of int, optional None The slots to assign to this node. If left out, the node is left as an embedding node and subsequent slots will be added to it automatically. All slots in the iterable must have been generated before by means of the  cv.slot() action. Returns    - node reference or None If an error occurred,  None is returned. The node reference consists of a node type and a sequence number, but normally you do not have to dig these out. Just pass the tuple as a whole to actions that require a node argument.",
"func":1
},
{
"ref":"tf.convert.walker.CV.terminate",
"url":107,
"doc":" terminate a node. cv.terminate(n) The node  n will be removed from the set of current embedders. This  n must be the result of a previous  cv.slot() or  cv.node() action. Parameters      node: tuple A node reference, obtained by one of the actions  slot or  node . Returns    - None",
"func":1
},
{
"ref":"tf.convert.walker.CV.resume",
"url":107,
"doc":" resume a node. cv.resume(n) If you resume a non-slot node, you add it again to the set of embedders. No new node will be created. If you resume a slot node, it will be added to the set of current embedders. No new slot will be created. Parameters      node: tuple A node reference, obtained by one of the actions  slot or  node . Returns    - None",
"func":1
},
{
"ref":"tf.convert.walker.CV.link",
"url":107,
"doc":"Link the given, existing slots to a node. cv.link(n) Sometimes the automatic linking of slots to nodes is not sufficient. This happens when you feel the need to construct a node retro-actively, when the slots that need to be linked to it have already been created. This action is precisely meant for that. Parameters      node: tuple A node reference, obtained by one of the actions  slot or  node . slots: iterable of integer Returns    - boolean",
"func":1
},
{
"ref":"tf.convert.walker.CV.linked",
"url":107,
"doc":"Returns the slots  ss to which a node is currently linked. ss = cv.linked(n) If you construct non-slot nodes without linking them to slots, they will be removed when TF validates the collective result of the action methods. If you want to prevent that, you can insert an extra slot, but in order to do so, you have to detect that a node is still unlinked. This action is precisely meant for that. Parameters      node: tuple A node reference, obtained by one of the actions  slot or  node . Returns    - tuple of integer The slots are returned as a tuple of integers.",
"func":1
},
{
"ref":"tf.convert.walker.CV.feature",
"url":107,
"doc":"Add  node features . cv.feature(n, name=value,  . , name=value) Parameters      node: tuple A node reference, obtained by one of the actions  slot or  node .  features: keyword arguments The names and values of features to assign to this node. Returns    - None  ! caution \"None values\" If a feature value is  None it will not be added!",
"func":1
},
{
"ref":"tf.convert.walker.CV.edge",
"url":107,
"doc":"Add  edge features . cv.edge(nf, nt, name=value,  . , name=value) Parameters      nodeFrom, nodeTo: tuple Two node references, obtained by one of the actions  slot or  node .  features: keyword arguments The names and values of features to assign to this edge (i.e. pair of nodes). Returns    - None  ! note \"None values\" You may pass values that are  None , and a corresponding edge will be created. If for all edges the value is  None , an edge without values will be created. For every  nodeFrom , such a feature essentially specifies a set of nodes  { nodeTo } .",
"func":1
},
{
"ref":"tf.convert.walker.CV.occurs",
"url":107,
"doc":"Whether the feature  featureName occurs in the resulting data so far. occurs = cv.occurs(featureName) If you have assigned None values to a feature, that will count, i.e. that feature occurs in the data. If you add feature values conditionally, it might happen that some features will not be used at all. For example, if your conversion produces errors, you might add the error information to the result in the form of error features. Later on, when the errors have been weeded out, these features will not occur any more in the result, but then TF will complain that such is feature is declared but not used. At the end of your director you can remove unused features conditionally, using this function. Parameters      feat: string The name of a feature Returns    - boolean",
"func":1
},
{
"ref":"tf.convert.walker.CV.meta",
"url":107,
"doc":"Add, modify, delete metadata fields of features. cv.meta(feature, name=value,  . , name=value) Parameters      feat: string The name of a feature  metaData: pairs of name and value If a  value is  None , that  name will be deleted from the metadata fields of the feature. A bare  cv.meta(feature) will remove the all metadata from the feature. If you modify the field  valueType of a feature, that feature will be added or removed from the set of  intFeatures . It will be checked whether you specify either  int or  str . Returns    - None",
"func":1
},
{
"ref":"tf.convert.walker.CV.features",
"url":107,
"doc":"Get the list of all features. featureNames = cv.features() Returns    - list",
"func":1
},
{
"ref":"tf.convert.walker.CV.active",
"url":107,
"doc":"Returns whether a node is currently active. Active nodes are the nodes in the set of current embedders. isActive = cv.active(n) If you construct your nodes in a very dynamic way, it might be hard to keep track for each node whether it has been created, terminated, or resumed, in other words, whether it is active or not. This action is provides a direct and precise way to know whether a node is active. Parameters      node: tuple A node reference, obtained by one of the actions  slot or  node . Returns    - boolean",
"func":1
},
{
"ref":"tf.convert.walker.CV.activeNodes",
"url":107,
"doc":"The currently active nodes, i.e. the embedders. nodes = cv.activeNodes() nodes = cv.activeNodes(nTypes=(\"sentence\", \"clause\" Parameters      nTypes: iterable optional None If None, all active nodes are returned. Else the iterable lists a few node types, and only active nodes in these types are returned. Returns    - set",
"func":1
},
{
"ref":"tf.convert.walker.CV.activeTypes",
"url":107,
"doc":"The node types of the currently active nodes, i.e. the embedders. nTypes = cv.activeTypes() Parameters      None Returns    - set",
"func":1
},
{
"ref":"tf.convert.walker.CV.get",
"url":107,
"doc":"Retrieve feature values. cv.get(feature, n) and cv.get(feature, nf, nt)  feature is the name of the feature. For node features,  n is the node which carries the value. For edge features,  nf, nt is the pair of from-to nodes which carries the value. Parameters      feature: string The name of a feature node: tuple A node reference, obtained by one of the actions  slot or  node . The node in question when retrieving the value of a node feature. nodeFrom, nodeTo: tuple Two node references, obtained by one of the actions  slot or  node . The nodes in question when retrieving the value of an edge feature. Returns    - string or integer",
"func":1
},
{
"ref":"tf.convert.recorder",
"url":108,
"doc":" Recorder Support for round trips of TF data to annotation tools and back. The scenario is:  Prepare a piece of corpus material for plain text use in an annotation tool, e.g. [BRAT](https: brat.nlplab.org).  Alongside the plain text, generate a mapping file that maps nodes to character positions in the plain text  Use an annotation tool to annotate the plain text  Read the output of the annotation tools and convert it into TF features, using the mapping file.  Explanation The recorder object is an engine to which you can send text material, interspersed with commands that say:  start node  n ;  end node  n . The recorder stores the accumulating text as a plain text, without any trace of the  start and  end commands. However, it also maintains a mapping between character positions in the accumulated text and the nodes. At any moment, there is a set of  active nodes: the ones that have been started, but not yet ended. Every character of text that has been sent to the recorder will add an entry to the position mapping: it maps the position of that character to the set of active nodes at that point.  Usage We suppose you have a corpus loaded, either by   from tf.app import use A = use(corpus) api = A.api   or by   from tf.fabric import Fabric TF = Fabric(locations, modules) api = TF.load(features)     from tf.convert.recorder import Recorder rec = Recorder(api) rec.add(\"a\") rec.start(n1) rec.add(\"bc\") rec.start(n2) rec.add(\"def\") rec.end(n1) rec.add(\"ghij\") rec.end(n2) rec.add(\"klmno\")   This leads to the following mapping: position | text | active nodes  - |  - |  - 0 |  a |  {} 1 |  b |  {n1} 2 |  c |  {n1} 3 |  d |  {n1, n2} 4 |  e |  {n1, n2} 5 |  f |  {n1, n2} 6 |  g |  {n2} 7 |  h |  {n2} 8 |  i |  {n2} 9 |  j |  {n2} 10 |  k |  {} 11 |  l |  {} 12 |  m |  {} 13 |  n |  {} 14 |  o |  {} There are methods to obtain the accumulated text and the mapped positions from the recorder. You can write the information of a recorder to disk and read it back later. And you can generate features from a CSV file using the mapped positions. To see it in action, see this [tutorial](https: nbviewer.jupyter.org/github/etcbc/bhsa/blob/master/tutorial/annotate.ipynb)"
},
{
"ref":"tf.convert.recorder.Recorder",
"url":108,
"doc":"Accumulator of generated text that remembers node positions. Parameters      api: obj, optional None The handle of the API of a loaded TF corpus. This is needed for operations where the recorder needs TF intelligence associated with the nodes, e.g. their types. If you do not pass an api, such methods are unavailable later on."
},
{
"ref":"tf.convert.recorder.Recorder.start",
"url":108,
"doc":"Start a node. That means: add it to the context, i.e. make the node active. Parameters      n: integer A node. The node can be any node type.",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.end",
"url":108,
"doc":"End a node. That means: delete it from the context, i.e. make the node inactive. Parameters      n: integer A node. The node can be any node type.",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.add",
"url":108,
"doc":"Add text to the accumulator. Parameters      string: string | None Material to add. If it is a string, the string will be added to the accumulator. If it is  None , a default value will be added. The default value is passed through parameter  empty . empty: string, optional zero-width-joiner If the string parameter is  None , this is the default value that will be added to the accumulator. If this parameter is absent, the zero-width joiner is used.",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.text",
"url":108,
"doc":"Get the accumulated text. Returns    - string The join of all accumulated text chunks.",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.positions",
"url":108,
"doc":"Get the node positions as mapping from character positions. Parameters      byType: boolean, optional False If True, makes a separate node mapping per node type. For this it is needed that the Recorder has been passed a TF api when it was initialized. simple: boolean, optional False In some cases it is known on beforehand that at each textual position there is at most 1 node. Then it is more economical to fill the list with single nodes rather than with sets of nodes. If this parameter is True, we pick the first node from the set. Returns    - list|dict|None If  byType , the result is a dictionary, keyed by node type, with values the mapping of textual positions to nodes of that type. This mapping takes the shape of a list where entry  i contains the frozen set of all nodes of that type that were active at character position  i in the text. If not  byType then a single mapping is returned (as list), where entry  i contains the frozen set of all nodes, irrespective of their type that were active at character position  i in the text.",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.iPositions",
"url":108,
"doc":"Get the character positions as mapping from nodes. Parameters      byType: boolean, optional False If True, makes a separate node mapping per node type. For this it is needed that the Recorder has been passed a TF api when it was initialized. logical: boolean, optional True If True, specs are represented as tuples of ranges and a range is represented as a tuple of a begin and end point, or as a single point. Points are integers. If False, ranges are represented by strings:  , separated ranges, a ranges is b-e or p. asEntries: boolean, optional False If True, do not return the dict, but rather its entries. Returns    - list|dict|None If  byType , the result is a dictionary, keyed by node type, with values the mapping for nodes of that type. Entry  n in this mapping contains the intervals of all character positions in the text where node  n is active. If not  byType then a single mapping is returned, where each node is mapped to the intervals where that node is active.",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.rPositions",
"url":108,
"doc":"Get the first textual position for each node The position information is a big amount of data, in the general case. Under certain assumptions we can economize on this data usage. Strong assumptions: 1. every textual position is covered by  exactly one node 2. the nodes are consecutive: every next node is equal to the previous node plus 1 3. the positions of the nodes are monotonous in the nodes, i.e. if node n < m, then the position of n is before the position of m. Imagine the text partitioned in consecutive non-overlapping chunks, where each node corresponds to exactly one chunk, and the order of the nodes is the same as the order of the corresponding chunks. Parameters      acceptMaterialOutsideNodes: boolean, optional False If this is True, we accept that the text contains extra material that is not covered by any node. So condition 1 above is relaxed in that we accept no nodes for a textual position. Applications that make use of the positions must realize that in this case the material associated with a node also includes the subsequent material outside any node. Returns    - list | str The result is a list  posList . Suppose we map nodes n, n+1,  ., n+m. Suppose node n starts at position t0, n+1 at position t1, n+m at position tm. Suppose te is the position just after the whole text. Then we deliver as a result:  n - 1 t0 t1  . tm te  So the first element of the list is used to specify the offset to be applied for all subsequent nodes. The  te value is added as a sentinel, to facilitate the determination of the last position of each node. Users of  posList can find the start and end positions of node m as follows  start = posList[m - posList[0 end = posList[m - posList[0] + 1] - 1  We return not only the posList if the assumptions hold. If not, we return a string with diagnostic information.",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.write",
"url":108,
"doc":"Write the recorder information to disk. The recorded text is written as a plain text file, and the remembered node positions are written as a tsv file. You can also let the node positions be written out by node type. In that case you can also optimize the file size. Optimization means that consecutive equal values are prepended by the number of repetitions and a  . Parameters      textPath: string The file path to which the accumulated text is written. inverted: boolean, optional False If False, the positions are taken as mappings from character positions to nodes. If True, they are a mapping from nodes to character positions. posPath: string, optional None The file path to which the mapped positions are written. If absent, it equals  textPath with  .pos appended, or  .ipos if  inverted is True. The file format is: one line for each character position, on each line a tab-separated list of active nodes. byType: boolean, optional False If True, writes separate node mappings per node type. For this it is needed that the Recorder has been passed a TF api when it was initialized. The file names are extended with the node type. This extension occurs just before the last  . of the inferred  posPath . optimize: boolean, optional True Optimize file size. Only relevant if  byType is True and  inverted is False. The format of each line is:  rep   nodes where  rep is a number that indicates repetition and  nodes is a tab-separated list of node numbers. The meaning is that the following  rep character positions are associated with these  nodes .",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.read",
"url":108,
"doc":"Read recorder information from disk. Parameters      textPath: string The file path from which the accumulated text is read. posPath: string, optional None The file path from which the mapped positions are read. If absent, it equals  textPath with  .pos appended. The file format is: one line for each character position, on each line a tab-separated list of active nodes.",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.makeFeatures",
"url":108,
"doc":"Read a tab-separated file of annotation data and convert it to features. An external annotation tool typically annotates text by assigning values to character positions or ranges of character positions. In Text-Fabric, annotations are values assigned to nodes. If a  recorded text has been annotated by an external tool, we can use the position-to-node mapping to construct Text-Fabric features out of it. The annotation file is assumed to be a tab-separated file. Every line corresponds to an annotation. The first two columns have the start and end positions, as character positions in the text. The remaining columns contain annotation values for that strectch of text. If there is a heading column, the values of the headers translate to names of the new TF features. Parameters      featurePath: string Path to the annotation file. headers: boolean or iterable, optional True Indicates whether the annotation file has headers. If not True, it may be an iterable of names, which will be used as headers.",
"func":1
},
{
"ref":"tf.convert.recorder.Recorder.material",
"url":108,
"doc":"Accumulated text. It is a list of chunks of text. The text is just the concatenation of all chunks."
},
{
"ref":"tf.convert.recorder.Recorder.nodesByPos",
"url":108,
"doc":"Mapping from textual positions to nodes. It is a list. Entry  p in this list stores node information for character position  p . That node information consists of the set of active nodes at that position."
},
{
"ref":"tf.convert.recorder.Recorder.context",
"url":108,
"doc":"The currently active nodes."
},
{
"ref":"tf.convert.tei",
"url":109,
"doc":" TEI import You can convert any TEI source into TF by specifying a few details about the source. Text-Fabric then invokes the  tf.convert.walker machinery to produce a Text-Fabric dataset out of the source. Text-Fabric knows the TEI elements, because it will read and parse the complete TEI schema. From this the set of complex, mixed elements is distilled. If the TEI source conforms to a customised TEI schema, you can pass it to the TEI importer, and it will read it and override the generic information of the TEI elements. The converter goes the extra mile: it generates a TF-app and documentation (an  about.md file and a  transcription.md file), in such a way that the Text-Fabric browser is instantly usable. The TEI conversion is rather straightforward because of some conventions that cannot be changed.  Tasks We have the following conversion tasks: 1.  check : makes and inventory of all XML elements and attributes used. 2.  convert : produces actual TF files by converting XML files. 3.  load : loads the generated TF for the first time, by which the precomputation step is triggered. During precomputation some checks are performed. Once this has succeeded, we have a workable Text-Fabric dataset. 4.  app : creates or updates a corpus specific TF-app with minimal sensible settings, plus basic documentation. Tasks can be run by passing any choice of task keywords to the  TEI.task() method.  Flags We have one flag: 1.  test : only converts those files in the input that are named in a test set. The test set is passed as argument to the  TEI constructur. The  test flag is passed to the  TEI.task() method.  Usage It is intended that you call this converter in a script. In that script you can define auxiliary Python functions and pass them to the converter. The  TEI class has some hooks where such functions can be plugged in. Here you can also define a test set, in case you want to experiment with the conversion. Last, but not least, you can assemble all the input parameters needed to get the conversion off the ground. The resulting script will look like this:  python import os from tf.convert.tei import TEI TEST_SET = set(  ' 18920227_HMKR_0001.xml 18920302_HMKR_0002.xml 18930711_PM_RANI_5003.xml 18980415y_PRIX_0007.xml  '.strip().split() ) AUTHOR = \"Piet Mondriaan\" TITLE = \"Letters\" INSTITUTE = \"KNAW/Huygens Amsterdam\" GENERIC = dict( author=AUTHOR, title=TITLE, institute=INSTITUTE, language=\"nl\", converters=\"Dirk Roorda (Text-Fabric)\", sourceFormat=\"TEI\", descriptionTf=\"Critical edition\", ) ABOUT_TEXT =  '  CONTRIBUTORS Researcher: Mariken Teeuwen Editors: Peter Boot et al.  ' TRANSCRIPTION_TEXT =  ' The TEI has been validated and polished before generating the TF data.  ' DOC_MATERIAL = dict( about=ABOUT_TEXT, trans=TRANSCRIPTION_TEXT, ) APP_CONFIG = dict( provenanceSpec=dict( corpus=f\"{GENERIC['author']} - {GENERIC['title']}\", doi=\"10.5281/zenodo.nnnnnn\", ) ) HY = \"\u2010\"  hyphen def transform(text): return text.replace(\" \", HY) T = TEI( schema=\"MD\", sourceVersion=\"2023-01-31\", testSet=TEST_SET, generic=GENERIC, transform=transform, tfVersion=\"0.1\", appConfig=APP_CONFIG, docMaterial=DOC_MATERIAL, force=True, ) T.run(os.path.basename(__file__  "
},
{
"ref":"tf.convert.tei.TEI",
"url":109,
"doc":" Essentials  Text-Fabric non-slot nodes correspond to TEI elements in the source.  Text-Fabric node-features correspond to TEI attributes.  Text-Fabric slot nodes correspond to characters in TEI element content. In order to understand the encoding, you need to know  the [TEI elements](https: tei-c.org/release/doc/tei-p5-doc/en/html/REF-ELEMENTS.html).  the [TEI attributes](https: tei-c.org/release/doc/tei-p5-doc/en/html/REF-ATTS.html).  the [Text-Fabric datamodel](https: annotation.github.io/text-fabric/tf/about/datamodel.html) The TEI to TF conversion is an almost literal and very faithful transformation from the TEI source files to a Text-Fabric data set. But there are some peculiarities.  Sectioning The material is divided into three levels of sections, mainly for the purposes of text display. It is assumed that the source is a directory consisting of subdirectories consisting of xml files, the TEI files. 1. Subdirectories and files are sorted in the lexicographic ordering 1. The subdirectory  __ignore__ is ignored. 1. For each subdirectory, a section level 1 node will be created, with feature  name containing its name. 1. For each file in a subdirecotry, a section level 2 node will be created, with feature  name containing its name. 1. A third section level, named  chunk will be made. For each immediate child element of    and for each immediate child element of    , a chunk node will be created, wit a feature  chunk containing the number of the chunk within the file, starting with 1. Also the following elements will trigger a chunk node:    ,    ,    , and    .  Elements and attributes 1. All elements, except    and    result in nodes whose type is exactly equal to the tag name. 1. These nodes are linked to the slots that are produced when converting the content of the corresponding source elements. 1. Attributes translate into features of the same name; the feature assigns the attribute value (as string) to the node that corresponds to the element of the attribute.  Word detection Words will be detected. They are maximally long sequences of alphanumeric characters and hyphens. 1. What is alphanumeric is determined by the unicode class of the character, see the Python documentation of the function [ isalnum() ](https: docs.python.org/3/library/stdtypes.html text-sequence-type-str) 1. Hyphens are Unicode characters 002D (ascii hyphen) and 2010 (unicode hyphen). 1. Words get the following features:   str : the alphanumeric string that is the word;   after : the non-alphanumeric string after the word unti the following word.  Slots The basic unit is the unicode character. For each character in the input we make a slot, but the correspondence is not quite 1-1. 1. Spaces are stripped when they are between elements whose parent does not allow mixed content; other whitespace is reduced to a single space. 1. All slots inside the teiHeader will get the feature  is_meta set to 1; for slots inside the body,  is_meta has no value. 1. Empty elements will receive one extra slot; this will anchor the element to a textual position; the empty slot gets the ZERO-WIDTH-SPACE (Unicode 200B) as character value. 1. Slots get the following features:   ch : the character of the slot   empty : 1 if the slot has been inserted as an empty slot, no value otherwise.  Text kinds and text formatting We record in additional features whether text occurs in metadata elements and in note elements and what formatting specifiers influence the text. These features are provided for characters and words, and have only one value: 1. The absence of values means that the corresponding property does not hold. The following features are added:   is_meta : 1 if the word occurs in inside the    , no value otherwise.   is_note : 1 if the word occurs in inside the    , no value otherwise.   rend_ r : for any  r that is the value of a  rend attribute. Special formatting for the  rend_ r features is supported for some values of  r . The conversion supports these out-of-the-box:  italic  bold  underline  center  large  spaced  margin  above  below  sub  sup  super It is possible for the corpus designer to add more formatting on a per-corpus basis by adding it to the  display.css in the app directory of the corpus. Unsupported values get a generic kind of special format: an orange-like color. Special formatting becomes visible when material is rendered in a  layout text format.  Text-formats Text-formats regulate how text is displayed, and they can also determine what text is displayed. There are two kind of text-formats: those that start with the word  layout and those that start with  text . The  text formats do not apply any kind of special formating, the  layout formats do. We have the following formats:   text-orig-full : all text   layout-orig-full : all text, formatted in HTML  Simplifications XML is complicated, the TEI guidelines use that complexity to the full. In particular, it is difficult to determine what the set of TEI elements is and what their properties are, just by looking at the schemas, because they are full of macros, indirections, and abstractions, which can be overridden in any particular TEI application. On the other hand, the resulting TF should consist of clearly demarcated node types and a simple list of features. In order to make that happen, we simplify matters a bit. 1. Processing instructions (   ) are ignored. 1. Comments (   ) are ignored. 1. Declarations (         ) are read by the parser, but do not leave traces in the TF output. 1. The atrributes of the root-element (   ) are ignored. 1. Namespaces ( xmlns=\"http: www.tei-c.org/ns/1.0\" ) are read by the parser, but only the unqualified names are distinguishable in the output as feature names. So if the input has elements  tei:abb and  ns:abb , we'll see just the node type  abb in the output.  Validation We have used [lxml](https: lxml.de) for XML parsing. During  convert it is not used in validating mode, but we can trigger a validation step during  check . However, some information about the elements, in particular whether they allow mixed content or not, has been gleaned from the schemas, and has been used during conversion. Care has been taken that the names of these extra nodes and features do not collide with element/attribute names of the TEI.  TF noded and features (only in as far they are not in 1-1 correspondence with TEI elements and attributes)  node type  folder  The type of subfolders of TEI documents.  Section level 1.  Features feature | description  - |  -  folder | name of the subfolder  node type  file  The type of individual TEI documents.  Section level 2.  Features feature | description  - |  -  file | name of the file, without the  .xml extension. Other extensions are included.  node type  chunk  Top-level division of material inside a document.  Section level 3.  Features feature | description  - |  -  chunk | sequence number of the chunk within the document, starting with 1.  node type  word  Individual words, without punctuation.  Features feature | description  - |  -  str | the characters of the word, without soft hyphens.  after | the non-word characters after the word, up till the next word.  is_meta | whether a word is in the teiHeader element  is_note | whether a word is in a note element  rend_ r | whether a word is under the influence of a  rend=\" r \" attribute.  node type  char  Unicode characters.  Slot type. The characters of the text of the elements. Ignorable whitespace has been discarded, and is not present in the TF dataset. Meaningful whitespace has been condensed to single spaces. Some empty slots have been inserted to mark the place of empty elements.  Features feature | description  - |  -  ch | the unicode character in that slot. There are also slots  empty | whether a slot has been inserted in an empty element  is_meta | whether a character is in the teiHeader element  is_note | whether a character is in a note element  rend_ r | whether a character is under the influence of a  rend=\" r \" attribute."
},
{
"ref":"tf.convert.tei.TEI.help",
"url":109,
"doc":"Print a help text to the console. The intended use of this module is that it is included by a conversion script. In order to give help on the command line, here is a pre-baked help text. Only the name of the conversion script needs to be merged in. Parameters      program: string The name of the program that you want to display in the help string.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.getParser",
"url":109,
"doc":"Configure the lxml parser. See [parser options](https: lxml.de/parsing.html parser-options). Returns    - object A configured lxml parse object.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.getValidator",
"url":109,
"doc":"Parse the schema. A parsed schema can be used for XML-validation. This will only happen during the  check task. Returns    - object A configured lxml schema validator.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.getElementInfo",
"url":109,
"doc":"Analyse the schema. The XML schema has useful information about the XML elements that occur in the source. Here we extract that information and make it fast-accessible. Returns    - dict Keyed by element name (without namespaces), where the value for each name is a tuple of booleans: whether the element is simple or complex; whether the element allows mixed content or only pure content.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.getXML",
"url":109,
"doc":"Make an inventory of the TEI source files. Returns    - tuple of tuple The outer tuple has sorted entries corresponding to folders under the TEI input directory. Each such entry consists of the folder name and an inner tuple that contains the file names in that folder, sorted.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.checkTask",
"url":109,
"doc":"Implementation of the \"check\" task. It validates the TEI, but only if a schema file has been passed explicitly when constructing the  TEI() object. Then it makes an inventory of all elements and attributes in the TEI files. The inventory lists all elements and attributes, and many attribute values. But is represents any digit with  n , and some attributes that contain ids or keywords, are reduced to the value  x . This information reduction helps to get a clear overview. It writes reports to the  reportDir :   errors.txt : validation errors   elements.txt : element/attribute inventory.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.getConverter",
"url":109,
"doc":"Initializes a converter. Returns    - object The  tf.convert.walker.CV converter object, initialized.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.convertTask",
"url":109,
"doc":"Implementation of the \"convert\" task. It sets up the  tf.convert.walker machinery and runs it. Returns    - boolean Whether the conversion was successful.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.getDirector",
"url":109,
"doc":"Factory for the director function. The  tf.convert.walker relies on a corpus dependent  director function that walks through the source data and spits out actions that produces the TF dataset. The director function that walks through the TEI input must be conditioned by the properties defined in the TEI schema and the customised schema, if any, that describes the source. Also some special additions need to be programmed, such as an extra section level, word boundaries, etc. We collect all needed data, store it, and define a local director function that has access to this data. Returns    - function The local director function that has been constructed.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.loadTask",
"url":109,
"doc":"Implementation of the \"load\" task. It loads the tf data that resides in the directory where the \"convert\" task deliver its results. During loading there are additional checks. If they succeed, we have evidence that we have a valid TF dataset. Also, during the first load intensive precomputation of TF data takes place, the results of which will be cached in the invisible  .tf directory there. That makes the TF data ready to be loaded fast, next time it is needed. Returns    - boolean Whether the loading was successful.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.appTask",
"url":109,
"doc":"Implementation of the \"app\" task. It creates/updates a corpus-specific app. There should be a valid TF dataset in place, because some settings in the app derive from it. Returns    - boolean Whether the operation was successful.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.task",
"url":109,
"doc":"Carry out any task, possibly modified by any flag. This is a higher level function that can execute a selection of tasks. The tasks will be executed in a fixed order: check, convert load. But you can select which one(s) must be executed. If multiple tasks must be executed and one fails, the subsequent tasks will not be executed. Parameters      check: boolean, optional False Whether to carry out the \"check\" task. convert: boolean, optional False Whether to carry out the \"convert\" task. load: boolean, optional False Whether to carry out the \"load\" task. app: boolean, optional False Whether to carry out the \"app\" task. test: boolean, optional None Whether to run in test mode. In test mode only the files in the test set are converted. If None, it will read its value from the attribute  testMode of the  TEI object. Returns    - boolean Whether all tasks have executed successfully.",
"func":1
},
{
"ref":"tf.convert.tei.TEI.run",
"url":109,
"doc":"Carry out tasks specified by arguments on the command line. The intended use of this module is that it is included by a conversion script. When that script is invoked, you can pass arguments to specify tasks and flags. This function inspects those arguments, and runs the specified tasks, with the specified flags enabled. Parameters      program: string The name of the program that you want to display in the help string, in case a help text must be displayed. Returns    - integer In fact, this function will terminate the conversion program an return a status code: 0 for succes, 1 for failure.",
"func":1
},
{
"ref":"tf.convert.mql",
"url":110,
"doc":" MQL You can interchange with [MQL data](https: emdros.org). Text-Fabric can read and write MQL dumps. An MQL dump is a text file, like an SQL dump. It contains the instructions to create and fill a complete database.  Correspondence TF and MQL After exporting a TF dataset to MQL, the resulting MQL database has the following properties with respect to the TF dataset it comes from:  the TF  slots correspond exactly with the MQL  monads and have the same numbers; provided the monad numbers in the MQL dump are consecutive. In MQL this is not obligatory. Even if there gaps in the monads sequence, we will fill the holes during conversion, so the slots are tightly consecutive;  the TF  nodes correspond exactly with the MQL  objects and have the same numbers  Node features in MQL The values of TF features are of two types,  int and  str , and they translate to corresponding MQL types  integer and  string . The actual values do not undergo any transformation. That means that in MQL queries, you use quotes if the feature is a string feature. Only if the feature is a number feature, you may omit the quotes:   [word sp='verb'] [verse chapter=1 and verse=1]    Enumeration types It is attractive to use eumeration types for the values of a feature, whereever possible, because then you can query those features in MQL with  IN and without quotes:   [chapter book IN (Genesis, Exodus)]   We will generate enumerations for eligible features. Integer values can already be queried like this, even if they are not part of an enumeration. So we restrict ourselves to node features with string values. We put the following extra restrictions:  the number of distinct values is less than 1000  all values must be legal C names, in practice: starting with a letter, followed by letters, digits, or  _ . The letters can only be plain ASCII letters, uppercase and lowercase. Features that comply with these restrictions will get an enumeration type. Currently, we provide no ways to configure this in more detail. Instead of creating separate enumeration types for individual features, we collect all enumerated values for all those features into one big enumeration type. The reason is that MQL considers equal values in different types as distinct values. If we had separate types, we could never compare values for different features. There is no place for edge values in MQL. There is only one concept of feature in MQL: object features, which are node features. But TF edges without values can be seen as node features: nodes are mapped onto sets of nodes to which the edges go. And that notion is supported by MQL: edge features are translated into MQL features of type  LIST OF id_d , i.e. lists of object identifiers.  ! caution \"Legal names in MQL\" MQL names for databases, object types and features must be valid C identifiers (yes, the computer language C). The requirements are for names are:  start with a letter (ASCII, upper-case or lower-case)  follow by any sequence of ASCII upper/lower-case letters or digits or underscores ( _ )  avoid being a reserved word in the C language So, we have to change names coming from TF if they are invalid in MQL. We do that by replacing illegal characters by  _ , and, if the result does not start with a letter, we prepend an  x . We do not check whether the name is a reserved C word. With these provisos:  the given  dbName correspond to the MQL  database name  the TF  otypes correspond to the MQL  objects  the TF  features correspond to the MQL  features The MQL export is usually quite massive (500 MB for the Hebrew Bible). It can be compressed greatly, especially by the program  bzip2 .  ! caution \"Exisiting database\" If you try to import an MQL file in Emdros, and there exists already a file or directory with the same name as the MQL database, your import will fail spectacularly. So do not do that. A good way to prevent clashes:  export the MQL to outside your  text-fabric-data directory, e.g. to  ~/Downloads ;  before importing the MQL file, delete the previous copy; Delete existing copy:   cd ~/Downloads rm dataset ; mql -b 3 < dataset.mql  "
},
{
"ref":"tf.convert.mql.MQL",
"url":110,
"doc":""
},
{
"ref":"tf.convert.mql.MQL.write",
"url":110,
"doc":"",
"func":1
},
{
"ref":"tf.convert.mql.makeuni",
"url":110,
"doc":"Make proper unicode of a text that contains byte escape codes such as backslash xb6",
"func":1
},
{
"ref":"tf.convert.mql.uni",
"url":110,
"doc":"",
"func":1
},
{
"ref":"tf.convert.mql.tfFromMql",
"url":110,
"doc":"Generate TF from MQL Parameters      tmObj: object A  tf.core.timestamp.Timestamp object mqlFile, slotType, otype, meta: various See  tf.core.fabric.Fabric.importMQL",
"func":1
},
{
"ref":"tf.convert.mql.parseMql",
"url":110,
"doc":"",
"func":1
},
{
"ref":"tf.convert.mql.tfFromData",
"url":110,
"doc":"",
"func":1
},
{
"ref":"tf.writing",
"url":111,
"doc":" Writing systems support Transliteration tables for various writing systems. One can pass a language code to Text-Fabric. When Text-Fabric displays text (e.g. in  tf.advanced.display ) the language code may trigger the writing direction and the choice of font. Here are the ones that have an effect: iso | language  - |  -  akk | akkadian  hbo | hebrew  syc | syriac  ara | arabic  grc | greek  cld | neo aramaic Default: : string    "
},
{
"ref":"tf.writing.transcription",
"url":112,
"doc":" Transcription Text-Fabric has support for several writing systems, by means of transcription tables and fonts that will be invoked when displaying the main text. It also calls functions to use these tables for converting Hebrew and Syriac text material to transliterated representations and back. There is also a phonetic transcription for Hebrew, designed in [phono.ipynb](https: nbviewer.jupyter.org/github/etcbc/phono/blob/master/programs/phono.ipynb)  Character tables and fonts   hbo Hebrew  tf.writing.hebrew : full list of characters covered by the ETCBC and phonetic transcriptions Font  Ezra SIL .   syc Syriac  tf.writing.syriac : full list of characters covered by the ETCBC transcriptions Font  Estrangelo Edessa .   ara Arabic  tf.writing.arabic : full list of characters covered by the transcription used for the Quran Font  AmiriQuran .   grc Greek Font  Gentium .   akk Akkadian Font  Santakku .   cld Neo Aramaic Font  CharisSIL-R ."
},
{
"ref":"tf.writing.transcription.Transcription",
"url":112,
"doc":"Conversion between unicode and various transcriptions. Usage notes: Invoke the transcription functionality as follows: from tf.writing.transcription import Transcription Some of the attributes and methods below are  class attributes, others are instance attributes. A class attribute  aaa can be retrieved by saying Transcription.aaa To retrieve an instance attribute, you need an instance first, like tr = Transcription() and then you can say  tr.aaa ."
},
{
"ref":"tf.writing.transcription.Transcription.decomp",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.hebrew_mapping",
"url":112,
"doc":"Maps all ETCBC transliteration character combinations for Hebrew to Unicode. Example: sof-pasuq: Transcription.hebrew_mapping['00'] Output: \u05c3"
},
{
"ref":"tf.writing.transcription.Transcription.hebrew_cons",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.trans_final_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.trans_hebrew_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.swap_accent_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.remove_accent_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.remove_point_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.remove_psn_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.remove_psq_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.shin_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.ph_simple_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.noorigspace",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.syriac_mapping_simple",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.syriac_mapping_pil",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.syriac_mapping",
"url":112,
"doc":"Maps all ETCBC transliteration character combinations for Syriac to Unicode. Example: semkath-final: Transcription.syriac_mapping['s'] Output: \u0724"
},
{
"ref":"tf.writing.transcription.Transcription.trans_syriac_pat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.arabic_mapping",
"url":112,
"doc":"Maps an Arabic transliteration character to Unicode. This is the mapping used in the Quran representation on tanzil.net. Example: beh Transcription.syriac_mapping['b'] Output: \u0628 Maps an Arabic letter in unicode to its transliteration Example: beh transliteration Transcription.syriac_mapping['\u0628'] Output: b"
},
{
"ref":"tf.writing.transcription.Transcription.arabic_mappingi",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.arabicTrans",
"url":112,
"doc":"More Arabic transcriptions:  column 1:  custom [Quran-tanzil](http: tanzil.net/ 1:1), slightly extended  column 2/:  ascii resp.  latin plus diacritics also known as betacode. We use a list compiled by [Peter Verkinderen](https: pverkind.github.io/betacodeTranscriber/js/betacode.js)  column 4:  standard (Library of Congress) (to-be filled). We use the [arabic romanization list of 2012](https: www.loc.gov/catdir/cpso/romanization/arabic.pdf) We refrain of from applying rules that cannot be computed without lexical/grammatical/dialectical knowledge of the arabic language."
},
{
"ref":"tf.writing.transcription.Transcription.arabicTransQuran",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.arabicTransAscii",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.arabicTransLatin",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.arabicTransStandard",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.ara",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.qur",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.asc",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.lat",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.std",
"url":112,
"doc":""
},
{
"ref":"tf.writing.transcription.Transcription.quranFromArabic",
"url":112,
"doc":"",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.asciiFromArabic",
"url":112,
"doc":"",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.latinFromArabic",
"url":112,
"doc":"",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.standardFromArabic",
"url":112,
"doc":"",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.sycSplitPunc",
"url":112,
"doc":"",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.suffix_and_finales",
"url":112,
"doc":"Given an ETCBC transliteration, split it into the word material and the interword material that follows it (space, punctuation). Replace the last consonant of the word material by its final form, if applicable. Output a tuple with the modified word material and the interword material. Example: Transcription.suffix_and_finales('71T_H@>@95REY00') Output: ('71T_H@>@95REy', '00 ') Note that the  Y has been replaced by  y .",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.suppress_space",
"url":112,
"doc":"Given an ETCBC transliteration of a word, match the end of the word for interpunction and spacing characters (sof pasuq, paseq, nun hafukha, setumah, petuhah, space, no-space) Example: Transcription.suppress_space('B.:&') Transcription.suppress_space('B.@R@74>') Transcription.suppress_space('71T_H@>@95REY00') Output:  None  ",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.to_etcbc_v",
"url":112,
"doc":"Given an ETCBC transliteration of a fully pointed word, strip all the non-vowel pointing (i.e. the accents). Example: Transcription.to_etcbc_v('HAC.@MA73JIm') Output: HAC.@MAJIm",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.to_etcbc_c",
"url":112,
"doc":"Given an ETCBC transliteration of a fully pointed word, strip everything except the consonants. Punctuation will also be stripped. Example: Transcription.to_etcbc_c('HAC.@MA73JIm') Output: H MJM Note that the pointed shin ( C ) is replaced by an unpointed one ( ).",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.to_hebrew",
"url":112,
"doc":"Given a transliteration of a fully pointed word, produce the word in Unicode Hebrew. Care will be taken that vowel pointing will be added to consonants before accent pointing. Example: Transcription.to_hebrew('HAC.@MA73JIm') Output: \u05d4\u05b7\ufb2a\u05bc\u05b8\u05de\u05b7\u0596\u05d9\u05b4\u05dd",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.to_hebrew_v",
"url":112,
"doc":"Given a transliteration of a fully pointed word, produce the word in Unicode Hebrew, but without the accents. Example: Transcription.to_hebrew_v('HAC.@MA73JIm') Output: \u05d4\u05b7\ufb2a\u05bc\u05b8\u05de\u05b7\u05d9\u05b4\u05dd",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.to_hebrew_c",
"url":112,
"doc":"Given a transliteration of a fully pointed word, produce the word in Unicode Hebrew, but without the pointing. Example: Transcription.to_hebrew_c('HAC.@MA73JIm') Output: \u05d4\u05e9\u05de\u05d9\u05de Note that final consonant forms are not being used.",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.to_hebrew_x",
"url":112,
"doc":"Given a transliteration of a fully pointed word, produce the word in Unicode Hebrew, but without the pointing. Vowel pointing and accent pointing will be applied in the order given by the input word. Example: Transcription.to_hebrew_x('HAC.@MA73JIm') Output: \u05d4\u05b7\ufb2a\u05bc\u05b8\u05de\u05b7\u0596\u05d9\u05b4\u05dd",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.ph_simplify",
"url":112,
"doc":"Given a phonological transliteration of a fully pointed word, produce a more coarse phonological transliteration. Example: Transcription.ph_simplify('\u0294\u1d49l\u014dh\u02c8\u00eem') Transcription.ph_simplify('m\u0101q\u02c8\u00f4m') Transcription.ph_simplify('kol') Output: \u0294l\u014dh\u00eem m\u00e5q\u00f4m k\u00e5l Note that the simplified version transliterates the qamets gadol and qatan to the same character.",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.from_hebrew",
"url":112,
"doc":"Given a fully pointed word in Unicode Hebrew, produce the word in ETCBC transliteration. Example: tr.from_hebrew('\u05d4\u05b8\u05d0\u05b8\u05bd\u05e8\u05b6\u05e5\u05c3') Output: H@>@95REy00",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.to_syriac",
"url":112,
"doc":"Given a word in ETCBC transliteration, produce the word in Unicode Syriac. Example: tr.to_syriac('MKSJN') Output: \u0721\u071f\u0723\u071d\u0722",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.from_syriac",
"url":112,
"doc":"Given a word in Unicode Syriac, produce the word in ETCBC transliteration. Example: tr.from_syriac('\u0721\u071f\u0723\u071d\u0722') Output: MKSJN",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.can_to_syriac",
"url":112,
"doc":"",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.can_from_syriac",
"url":112,
"doc":"",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.to_arabic",
"url":112,
"doc":"Given a word in transliteration, produce the word in Unicode Arabic. Example: tr.to_arabic('bisomi') Output: \u0628\u0650\u0633\u0652\u0645\u0650",
"func":1
},
{
"ref":"tf.writing.transcription.Transcription.from_arabic",
"url":112,
"doc":"Given a word in Unicode Arabic, produce the word in transliteration. Example: tr.from_arabic('\u0628\u0650\u0633\u0652\u0645\u0650') Output: bisomi",
"func":1
},
{
"ref":"tf.writing.greek",
"url":113,
"doc":" Greek characters [Greek script in Unicode](https: en.wikipedia.org/wiki/Greek_alphabet Greek_in_Unicode)"
},
{
"ref":"tf.writing.arabic",
"url":114,
"doc":" Arabic characters  @font-face { font-family: AmiriQuran; src: url('https: github.com/annotation/text-fabric/blob/master/tf/server/static/fonts/AmiriQuran.woff2') format('woff2'), url('https: github.com/annotation/text-fabric/blob/master/tf/server/static/fonts/AmiriQuran.woff') format('woff'), url('https: github.com/annotation/text-fabric/blob/master/tf/server/static/fonts/AmiriQuran.ttf') format('truetype'); }   body { font-family: sans-serif; } table.chars { border-collapse: collapse; } table.chars thead tr { color:  ffffff; background-color:  444444; } table.chars tbody td { border: 2px solid  bbbbbb; padding: 0.1em 0.5em; } h1.chars { margin-top: 1em; } .t { font-family: monospace; font-size: large; color:  0000ff; } .g { font-family: \"AmiriQuran\", sans-serif; font-size: x-large; } .p { font-family: monospace; font-size: large; color:  666600; } .r { font-family: sans-serif; font-size: small; color:  555555; } .n { font-family: sans-serif; color:  990000; font-size: small; } .u { font-family: monospace; color:  990000; }   Letters     quran/tanzil  ascii  latin  standard  glyph  remarks  name  unicode      '  '  \u02be  '  \u0621    ARABIC LETTER HAMZA  0621    A  & x005f;a  \u0101  \u0101  \u0627    ARABIC LETTER ALEF  0627    b  b  b  b  \u0628    ARABIC LETTER BEH  0628    p  =t  \u0167  t  \u0629    ARABIC LETTER TEH MARBUTA  0629    t  t  t  t  \u062a    ARABIC LETTER TEH  062a    v  & x005f;t  \u1e6f  th  \u062b    ARABIC LETTER THEH  062b    j  j  \u01e7  j  \u062c    ARABIC LETTER JEEM  062c    H  & x002a;h  \u1e25  \u1e25  \u062d    ARABIC LETTER HAH  062d    x  & x005f;h  \u1e2b  kh  \u062e    ARABIC LETTER KHAH  062e    d  d  d  d  \u062f    ARABIC LETTER DAL  062f    & x002a;  & x005f;d  \u1e0f  dh  \u0630    ARABIC LETTER THAL  0630    r  r  r  r  \u0631    ARABIC LETTER REH  0631    z  z  z  z  \u0632    ARABIC LETTER ZAIN  0632    s  s  s  s  \u0633    ARABIC LETTER SEEN  0633    $  ^s  \u0161  sh  \u0634    ARABIC LETTER SHEEN  0634    S  & x002a;s  \u1e63  \u1e63  \u0635    ARABIC LETTER SAD  0635    D  & x002a;d  \u1e0d  \u1e0d  \u0636    ARABIC LETTER DAD  0636    T  & x002a;t  \u1e6d  \u1e6d  \u0637    ARABIC LETTER TAH  0637    Z  & x002a;z  \u1e93  \u1e93  \u0638    ARABIC LETTER ZAH  0638    E     \u02bf     \u0639    ARABIC LETTER AIN  0639    g  & x002a;g  \u0121  gh  \u063a    ARABIC LETTER GHAIN  063a    f  f  f  f  \u0641    ARABIC LETTER FEH  0641    q  & x002a;k  \u1e33  q  \u0642    ARABIC LETTER QAF  0642    k  k  k  k  \u0643    ARABIC LETTER KAF  0643    l  l  l  l  \u0644    ARABIC LETTER LAM  0644    m  m  m  m  \u0645    ARABIC LETTER MEEM  0645    n  n  n  n  \u0646    ARABIC LETTER NOON  0646    h  h  h  h  \u0647    ARABIC LETTER HEH  0647    w  w  w  w  \u0648    ARABIC LETTER WAW  0648    Y  /a  \u00e1  \u0101  \u0649    ARABIC LETTER ALEF MAKSURA  0649    y  y  y  y  \u064a    ARABIC LETTER YEH  064a    {  a  a  a  \u0671    ARABIC LETTER ALEF WASLA  0671    G  g  g  g  \u06af    ARABIC LETTER GAF  06af    J   y  Y  y  \u06af    ARABIC LETTER FARSI YEH  06cc     Numerals     quran/tanzil  ascii  latin  standard  glyph  remarks  name  unicode      0  0  0  0  & x0660;    ARABIC INDIC DIGIT ZERO  0660    1  1  1  1  & x0661;    ARABIC INDIC DIGIT ONE  0661    2  2  2  2  & x0662;    ARABIC INDIC DIGIT TWO  0662    3  3  3  3  & x0663;    ARABIC INDIC DIGIT THREE  0663    4  4  4  4  & x0664;    ARABIC INDIC DIGIT FOUR  0664    5  5  5  5  & x0665;    ARABIC INDIC DIGIT FIVE  0665    6  6  6  6  & x0666;    ARABIC INDIC DIGIT SIX  0666    7  7  7  7  & x0667;    ARABIC INDIC DIGIT SEVEN  0667    8  8  8  8  & x0668;    ARABIC INDIC DIGIT EIGHT  0668    9  9  9  9  & x0669;    ARABIC INDIC DIGIT NINE  0669     Stops     quran/tanzil  ascii  latin  standard  glyph  remarks  name  unicode      -  .  .  .  \u06ea    ARABIC EMPTY CENTRE LOW STOP  06ea    +  .  .  .  \u06eb    ARABIC EMPTY CENTRE HIGH STOP  06eb    %  .  .  .  \u06ec    ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE  06ec     Letters (modified)     quran/tanzil  ascii  latin  standard  glyph  remarks  name  unicode      & x0060;  ~a  \u00e3    \u0670    ARABIC LETTER SUPERSCRIPT ALEF  0670    \u00bb  & x005f;a  \u0101  \u0101  \u0670\u0622    ARABIC LETTER ALEF WITH MADDA ABOVE  0622    :   s  S  s  \u06dc    ARABIC SMALL HIGH SEEN  06dc    [   m  M  M  \u06e2    ARABIC SMALL HIGH MEEM ISOLATED FORM  06e2    ;   s  S  S  \u06e3    ARABIC SMALL LOW SEEN  06e3    ,   w  W  W  \u06e5    ARABIC SMALL WAW  06e5    .   y  Y  Y  \u06e6    ARABIC SMALL YEH  06e6    M   j  J  j  \u06da    ARABIC SMALL HIGH JEEM  06da    !   n  N  N  \u06e8    ARABIC SMALL HIGH NOON  06e8    ]   m  M  M  \u06ed    ARABIC SMALL LOW MEEM  06ed     Letters (combined)     quran/tanzil  ascii  latin  standard  glyph  remarks  name  unicode      >  & x005f;a  \u0101  \u0101  \u0623    ARABIC LETTER ALEF WITH HAMZA ABOVE  0623    &  '  \u02be  '  \u0624    ARABIC LETTER WAW WITH HAMZA ABOVE  0624     /td>  & x005f;a  \u0101  \u0101  \u0625    ARABIC LETTER ALEF WITH HAMZA BELOW  0625    }  '  \u02be  y  \u0626    ARABIC LETTER YEH WITH HAMZA ABOVE  0626    SlY  & x002a;sl/a  \u1e63l\u00e1  \u1e63la  \u06d6    ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA  06d6     Lengthening     quran/tanzil  ascii  latin  standard  glyph  remarks  name  unicode      & x005f;        \u0640    ARABIC TATWEEL  0640     Vowel diacritics     quran/tanzil  ascii  latin  standard  glyph  remarks  name  unicode      F  a& x002a;n  a\u207f  an  \u064b    ARABIC FATHATAN  064b    N  u& x002a;n  u\u207f  un  \u064c    ARABIC DAMMATAN  064c    K  i& x002a;n  i\u207f  in  \u064d    ARABIC KASRATAN  064d    a  a  a  a  \u064e    ARABIC FATHA  064e    u  u  u  u  \u064f    ARABIC DAMMA  064f    i  i  i  i  \u0650    ARABIC KASRA  0650     Non-vocalic diacritics     quran/tanzil  ascii  latin  standard  glyph  remarks  name  unicode      ~  u  u  \u016bw  \u0651    ARABIC SHADDA  0651    o  a  a  a  \u0652    ARABIC SUKUN  0652    ^  & x005f;a  \u0101  \u0101  \u0653    ARABIC MADDAH ABOVE  0653       '  \u02be  \u0101  \u0654    ARABIC HAMZA ABOVE  0654    =  '  \u02be  \u0101  \u0655    ARABIC HAMZA BELOW  0655    @  0  0  0  \u06df    ARABIC SMALL HIGH ROUNDED ZERO  06df    \"  0  0  0  \u06e0    ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO  06e0     Separators     quran/tanzil  ascii  latin  standard  glyph  remarks  name  unicode                  SPACE  0020     See also  [Arabic script in Unicode](https: en.wikipedia.org/wiki/Arabic_script_in_Unicode)  [Arabic diacritics](https: en.wikipedia.org/wiki/Arabic_diacritics harakat)  [Beta code](https: pverkind.github.io/betacodeTranscriber/js/betacode.js)  [Library of Congress](https: www.loc.gov/catdir/cpso/romanization/arabic.pdf)"
},
{
"ref":"tf.writing.hebrew",
"url":115,
"doc":" Hebrew characters  @font-face { font-family: \"Ezra SIL\"; src: url('https: github.com/annotation/text-fabric/blob/master/tf/server/static/fonts/SILEOT.ttf?raw=true'); src: url('https: github.com/annotation/text-fabric/blob/master/tf/server/static/fonts/SILEOT.woff?raw=true') format('woff'); }   body { font-family: sans-serif; } table.chars { border-collapse: collapse; } table.chars thead tr { color:  ffffff; background-color:  444444; } table.chars tbody td { border: 2px solid  bbbbbb; padding: 0.1em 0.5em; } h1.chars { margin-top: 1em; } .t { font-family: monospace; font-size: large; color:  0000ff; } .g { font-family: \"Ezra SIL\", sans-serif; font-size: x-large; } .p { font-family: monospace; font-size: large; color:  666600; } .r { font-family: sans-serif; font-size: small; color:  555555; } .n { font-family: sans-serif; color:  990000; font-size: small; } .u { font-family: monospace; color:  990000; }   ! note \"Disclaimer\" This just a look-up table, not a full exposition of the organisation of the Masoretic system.  ! abstract \"Transcriptions\" The ETCBC transcription is used by the ETCBC. It has entries for all accents, but not for text-critical annotations such as uncertainty, and correction. The Abegg transcription is used in the Dead Sea scrolls. It has no entries for accents, but it has a repertoire of text-critical marks. We have back translated the latter to etcbc-compatible variants and entered them in the etcbc column, although they are not strictly etcbc marks.  ! abstract \"Phonetics\" The phonetic representation is meant as a tentative 1-1 correspondence with pronunciation, not with the script. See [phono.ipynb](https: nbviewer.jupyter.org/github/etcbc/phono/blob/master/programs/phono.ipynb), where the phonetic transcription is computed and thoroughly documented.  Consonants  ! abstract \"Details\"  For most consonants: an inner dot is a  dagesh forte .  For the  \u05d1\u05d2\u05d3\u05db\u05e4\u05ea consonants: an inner dot is either a  dagesh forte or a  dagesh lene .  When the  \u05d4 contains a dot, it is called a  mappiq .     transcription (etcbc)  transcription (Abegg)  glyph  phonetic  remarks  name  unicode      &gt;  a  \u05d0  \u0294  when not  mater lectionis    letter alef  05D0    B  b  \u05d1  bb b v  forte lene normal   letter bet  05D1    G  g  \u05d2  gg g \u1e21  forte lene normal   letter gimel  05D2    D  d  \u05d3  dd d \u1e0f  forte lene normal   letter dalet  05D3    H  h  \u05d4  h  also with  mappiq ; when not  mater lectionis    letter he  05D4    W  w  \u05d5  ww w \u00fb  forte when not part of a long vowel with dagesh as vowel   letter vav  05D5    Z  z  \u05d6  zz z  forte normal   letter zayin  05D6    X  j  \u05d7  \u1e25     letter het  05D7    V  f  \u05d8  \u1e6d     letter tet  05D8    J  y  \u05d9  yy y \u02b8  forte when not part of long vowel in front of final  \u05d5    letter yod  05D9    K  k  \u05db  kk k \u1e35  forte lene normal   letter kaf  05DB    k  K  \u05da  k \u1e35  forte normal   letter final kaf  05DA    L  l  \u05dc  ll l  forte normal   letter lamed  05DC    M  m  \u05de  mm m  forte normal   letter mem  05DE    m  M  \u05dd  m     letter final mem  05DD    N  n  \u05e0  nn n  forte normal   letter nun  05E0    n  N  \u05df  n     letter final nun  05DF    S  s  \u05e1  ss s  forte normal   letter samekh  05E1    &lt;  o  \u05e2  \u0295     letter ayin  05E2    P  p  \u05e4  pp p f  forte lene normal   letter pe  05E4    p  P  \u05e3  p f  forte normal   letter final pe  05E3    Y  x  \u05e6  \u1e63\u1e63 \u1e63  forte normal   letter tsadi  05E6    y  X  \u05e5  \u1e63     letter final tsadi  05E5    Q  q  \u05e7  qq q  forte normal   letter qof  05E7    R  r  \u05e8  rr r  forte normal   letter resh  05E8       C  \u05e9  \u015d     letter shin without dot  05E9    C  v  \u05e9\u05c1  \u0161\u0161 \u0161  forte normal   letter shin with shin dot  FB2A    F  c  \u05e9\u05c2  \u015b\u015b \u015b  forte normal   letter shin with sin dot  FB2B    T  t  \u05ea  tt t \u1e6f  forte lene normal   letter tav  05EA     Vowels  ! caution \"Qere Ketiv\" The phonetics follows the  qere , not the  ketiv , when they are different. In that case a  is added.  ! caution \"Tetragrammaton\" The tetragrammaton  \u05d9\u05d4\u05d5\u05d4 is (vowel)-pointed in different ways; the phonetics follows the pointing, but the tetragrammaton is put between  [ ] .     transcription (etcbc)  transcription (Abegg)  glyph  phonetic  remarks  name  unicode      A  A \u00c5  \u05b7  a \u2090  normal  furtive    point patah  05B7    :A  S  \u05b2  \u1d43     point hataf patah  05B2    @  D \u2202 \u00ce  \u05b8  \u0101 o  gadol qatan   point qamats  05B8    :@  F \u0192 \u00cf  \u05b3  \u1d52     point hataf qamats  05B3    E  R \u00ae \u2030  \u05b6  e e\u02b8  normal with following  \u05d9    point segol  05B6    :E  T  \u05b1  \u1d49 \u1d49\u02b8  normal with following  \u05d9    point hataf segol  05B1    ;  E \u00e9 \u00b4  \u05b5  \u00ea \u0113  with following  \u05d9  alone   point tsere  05B5    I  I \u02c6 \u00ee \u00ca  \u05b4  \u00ee i  with following  \u05d9  alone   point hiriq  05B4    O  O \u00f8  \u05b9  \u00f4 \u014d  with following  \u05d5  alone   point holam  05B9    U  U \u00fc \u00a8  \u05bb  u     point qubuts  05BB    :  V \u221a J \u25ca  \u05b0  \u1d4a  left out if silent   point sheva  05B0     Other points and marks     transcription (etcbc)  transcription (Abegg)  glyph  phonetic  remarks  name  unicode      .  ; \u2026 \u00da \u00a5 \u03a9  \u05bc       point dagesh or mapiq  05BC    .c    \u05c1       point shin dot  05C1    .f    \u05c2       point sin dot  05C2    ,    \u05bf       point rafe  05BF    35    \u05bd  \u02c8     point meteg  05BD    45    \u05bd  \u02c8     point meteg  05BD    75    \u05bd  \u02c8     point meteg  05BD    95    \u05bd  \u02c8     point meteg  05BD    52    \u05c4  \u02c8     mark upper dot  05C4    53    \u05c5  \u02c8     mark lower dot  05C5    & 42;    \u05af       mark masora circle  05AF     Punctuation  ! abstract \"Details\" Some specialties in the Masoretic system are not reflected in the phonetics:   setumah  \u05e1 ;   petuhah  \u05e3 ;   nun-hafuka  \u0307\u05c6 .     transcription (etcbc)  transcription (Abegg)  glyph  phonetic  remarks  name  unicode      00  .  \u05c3  .     punctuation sof pasuq  05C3    n\u0303    \u05c6       punctuation nun hafukha  05C6    &amp;  -  \u05be  -     punctuation maqaf  05BE    & 95;  &nbsp; (non breaking space)  &nbsp;      space  0020    0000  \u00b1       Dead Sea scrolls. We use as Hebrew character a double sof pasuq.  paleo-divider  05C3 05C3    '  /  \u05f3    Dead Sea scrolls. We use as Hebrew character a geresh.  morpheme-break  05F3     Hybrid  ! abstract \"Details\" There is a character that is mostly punctuation, but that can also influence the nature of some accents occurring in the word before. Such a character is a hybrid between punctuation and accent. See also the documentation of the BHSA about [cantillation](https: etcbc.github.io/bhsa/cantillation/).     transcription  glyph  phonetic  remarks  name  unicode      05    \u05c0       punctuation paseq  05C0     Accents  ! abstract \"Details\" Some accents play a role in deciding whether a schwa is silent or mobile and whether a qamets is gadol or qatan. In the phonetics those accents appear as  \u02c8 or  \u02cc . Implied accents are also added.     transcription  glyph  phonetic  remarks  name  unicode      94  \u05a7  \u02c8     accent darga  05A7    13  \u05ad  \u02c8     accent dehi  05AD    92  \u0591  \u02c8     accent etnahta  0591    61  \u059c  \u02c8     accent geresh  059C    11  \u059d  \u02c8     accent geresh muqdam  059D    62  \u059e  \u02c8     accent gershayim  059E    64  \u05ac  \u02c8     accent iluy  05AC    70  \u05a4  \u02c8     accent mahapakh  05A4    71  \u05a5  \u02cc     accent merkha  05A5    72  \u05a6  \u02c8     accent merkha kefula  05A6    74  \u05a3  \u02c8     accent munah  05A3    60  \u05ab  \u02c8     accent ole  05AB    03  \u0599       accent pashta  0599    83  \u05a1  \u02c8     accent pazer  05A1    33  \u05a8  \u02c8     accent qadma  05A8    63  \u05a8  \u02cc     accent qadma  05A8    84  \u059f  \u02c8     accent qarney para  059F    81  \u0597  \u02c8     accent revia  0597    01  \u0592       accent segol  0592    65  \u0593  \u02c8     accent shalshelet  0593    04  \u05a9       accent telisha qetana  05A9    24  \u05a9       accent telisha qetana  05A9    14  \u05a0       accent telisha gedola  05A0    44  \u05a0       accent telisha gedola  05A0    91  \u059b  \u02c8     accent tevir  059B    73  \u0596  \u02cc     accent tipeha  0596    93  \u05aa  \u02c8     accent yerah ben yomo  05AA    10  \u059a  \u02c8     accent yetiv  059A    80  \u0594  \u02c8     accent zaqef qatan  0594    85  \u0595  \u02c8     accent zaqef gadol  0595    82  \u0598  \u02c8     accent zarqa  0598    02  \u05ae  \u02c8     accent zinor  05AE     Numerals  ! abstract \"Details\" These signs occur in the Dead Sea scrolls. We represent them with conventional Hebrew characters for numbers and use the geresh accent or another accent to mark the letter as a numeral. The ETCBC codes are obtained by translating back from the unicode.     transcription (ETCBC)  transcription (Abegg)  glyph  remarks  name      &gt;'  A  \u05d0\u059c     number 1    &gt;52  \u00e5  \u05d0\u05c4  alternative for 1, often at the end of a number, we use the upper dot to distinguish it from the other 1   number 1    &gt;53  B  \u05d0\u05c5  alternative for 1, often at the end of a number, we use the lower dot to distinguish it from the other 1   number 1    &gt;35  \u222b  \u05d0\u05bd  alternative for 1, often at the end of a number, we use the meteg to distinguish it from the other 1   number 1    J'  C  \u05d9\u059c     number 10    k'  D  \u05da\u059c     number 20    Q'  F  \u05e7\u059c     number 100    &amp;  +  \u05be  we use the maqaf to represent addition between numbers  add     Text-critical  ! abstract \"Details\" These signs occur in the Dead Sea scrolls. They are used to indicate uncertainty and editing acts by ancient scribes or modern editors. They do not have an associated glyph in Unicode. The ETCBC does not have codes for them, but we propose an ETCBC-compatible encoding for them. The ETCBC codes are surrounded by space, except for the brackets, where a space at the side of the ( or ) is not necessary. Codes that are marked as  flag apply to the preceding character. Codes that are marked as  brackets apply to the material within them.     transcription (Abegg)  transcription (etcbc)  remarks  name      0  \u03b5  token  missing    ?  ?   token  uncertain (degree 1)    & 92;     token  uncertain (degree 2)    \ufffd   ?   token  uncertain (degree 3)    \u00d8  ?  flag, applies to preceding character  uncertain (degree 1)    \u00ab     flag, applies to preceding character  uncertain (degree 2)    \u00bb   ?  flag, applies to preceding character  uncertain (degree 3)    & 124;     flag, applies to preceding character  uncertain (degree 4)    \u00ab \u00bb  (  )  brackets  uncertain (degree 2)    \u2264 \u2265  (- -)  brackets  vacat (empty space)    ( )  ( )  brackets  alternative    [ ]  [ ]  brackets  reconstruction (modern)    { }  { }  brackets  removed (modern)    {& 123;    {& 123;    brackets  removed (ancient)    &lt; &gt;  (&lt; &gt;)  brackets  correction (modern)    &lt;&lt; &gt;&gt;  (&lt;&lt; &gt;&gt;)  brackets  correction (ancient)    ^ ^  (^ ^)  brackets  correction (supralinear, ancient)    "
},
{
"ref":"tf.writing.syriac",
"url":116,
"doc":" Syriac Characters  @font-face { font-family: \"Estrangelo Edessa\"; src: url('https: github.com/annotation/text-fabric/blob/master/tf/server/static/fonts/SyrCOMEdessa.otf?raw=true'); src: url('https: github.com/annotation/text-fabric/blob/master/tf/server/static/fonts/SyrCOMEdessa.woff?raw=true') format('woff'); }   body { font-family: sans-serif; } table.chars { border-collapse: collapse; } table.chars thead tr { color:  ffffff; background-color:  444444; } table.chars tbody td { border: 2px solid  bbbbbb; padding: 0.1em 0.5em; } h1.chars { margin-top: 1em; } .t { font-family: monospace; font-size: large; color:  0000ff; } .g { font-family: \"Estrangelo Edessa\", sans-serif; font-size: x-large; } .p { font-family: monospace; font-size: large; color:  666600; } .r { font-family: sans-serif; font-size: small; color:  555555; } .n { font-family: sans-serif; color:  990000; font-size: small; } .u { font-family: monospace; color:  990000; }   Letters     transcription  glyph  phonetic  remarks  name  unicode      &gt;  \u0710      alaph  0710    B  \u0712      beth  0712    G  \u0713      gamal  0713    D  \u0715      dalat  0715    H  \u0717      he  0717    W  \u0718      waw  0718    Z  \u0719      zain  0719    X  \u071a      heth  071A    V  \u071b      teth  071B    J  \u071d      yod  071D    K  \u071f      kaf  071F    L  \u0720      lamad  0720    M  \u0721      mim  0721    N  \u0722      nun  0722    S  \u0723      semkath  0723    &lt;  \u0725      e  0725    P  \u0726      pe  0726    Y  \u0728      tsade  0728    Q  \u0729      qof  0729    R  \u072a      resh  072A    C  \u072b      shin  072B    T  \u072c      taw  072C     Word-bound diacritics     transcription  glyph  phonetic  remarks  name  unicode      \"   \u0308      seyame  0308        \u0323      diacritical dot below  0323    ^   \u0307      diacritical dot above  0307     Non-vocalic letter-bound diacritics     transcription  glyph  phonetic  remarks  name  unicode      ^!   \u0743      unclear (syriac two vertical dots above)  0743     vocalic letter-bound diacritics     transcription  glyph  phonetic  remarks  name  unicode      :        shewa       A   \u0733      qamets  0733    A1   \u0734      zeqapa  0734    A2   \u0735      zeqofo  0735    O   \u073f      holem, rewaha  073F    @   \u0730      patah  0730    @1   \u0731      petaha  0731    @2   \u0732      petoho  0732    E   \u0736      segol  0736    E1   \u0737      revasa arrika  0737    E2   \u0738      revoso  0738    I   \u073a      hireq  073A    I1   \u073b      hevoso  073B    U   \u073d      qubbuts  073D    U1   \u073e      esoso  073E     Punctuation     transcription  glyph  phonetic  remarks  name  unicode       & 92;  \u0709      tahtaya, metkashpana (WS), meshalyana (WS)  0709    =.  .      pasuqa  002E    =   \u0707      elaya  0707    =:  :      shewaya (WS), zauga (ES)  003A    =^  \u0706      unclear (SYRIAC COLON SKEWED LEFT)  0706    =/  \u0707      elaya  0707    =& 92;  \u0706      unclear (SYRIAC COLON SKEWED LEFT)  0706    ^:  \u0703      taksa (WS), zauga elaya (ES)  0703    ^& 92;  \u0708      unclear (SYRIAC SUPRALINEAR COLON SKEWED LEFT)  0708     Pericope markers     transcription  glyph  phonetic  remarks  name  unicode      & 42;  \u0700      rosette  0700    .  \u00b7      common dot in caesuras  00B7    & 95;  \u2014      dash in caesuras  2014    o  \u2022      large dot in caesuras  2022    "
},
{
"ref":"tf.writing.neoaramaic",
"url":117,
"doc":" Neo Aramaic transcriptions  body { font-family: sans-serif; } pre.chars { border-collapse: collapse; color:  000080; font-family: monospace; font-size: medium; line-height: 1.0; }  The following table is provided by the collectors of the [NENA](https: github.com/CambridgeSemiticsLab/nena_corpus) corpus at [Cambridge Semitics Lab](https: github.com/CambridgeSemiticsLab). There is also a [PDF]( /images/neoaramaic.pdf) of the table below.  Vowel inventory and conversions  Special vowel signs  \u250f      \u2501\u2533 \u252f \u252f \u252f \u2501\u252f \u2501\u252f \u252f \u2501\u252f \u2501\u252f\u2501\u252f \u252f\u2501\u252f\u2501\u252f \u252f \u252f\u2501\u252f\u2501\u252f \u252f\u2501\u252f \u252f \u252f\u2501\u252f\u2501\u2513\u0010 \u2503 \u2503\u00e1 \u2502\u00e0 \u2502\u0101 \u2502\u0101\u0300 \u2502\u0101\u0301 \u2502\u0103 \u2502\u1eaf \u2502\u1eb1 \u2502e\u2502\u0113 \u2502\u025b\u2502i\u2502\u012b \u2502\u012d \u2502\u0259\u2502o\u2502\u014d \u2502u\u2502\u016b \u2502\u016d \u2502\u0131\u2502\u0251\u2503 \u2520      \u2500\u2542 \u253c \u253c \u253c \u2500\u253c \u2500\u253c \u253c \u2500\u253c \u2500\u253c\u2500\u253c \u253c\u2500\u253c\u2500\u253c \u253c \u253c\u2500\u253c\u2500\u253c \u253c\u2500\u253c \u253c \u253c\u2500\u253c\u2500\u2528 \u2503precise match\u2503a'\u2502a \u2502a-\u2502a- \u2502a-'\u2502a>\u2502a>'\u2502a> \u2502e\u2502e-\u25023\u2502i\u2502i-\u2502i>\u25029\u2502o\u2502o-\u2502u\u2502u-\u2502u  Symbol inventory for conversions  Special signs alphabetical  \u250f      \u2501\u2533   \u252f\u2501\u252f\u2501\u252f \u252f \u252f \u2501\u252f \u2501\u252f \u252f\u2501\u252f\u2501\u252f \u252f \u252f\u2501\u252f \u252f \u252f \u252f \u2501\u252f \u252f \u252f \u252f \u252f \u252f\u2501\u252f\u2501\u252f \u252f \u2513\u0010 \u2503 \u2503\u02be \u2502\u02bf\u2502c\u2502c\u032d \u2502\u010d \u2502\u010d\u032d \u2502\u010d\u0323 \u2502\u1e0d \u2502\u00f0\u2502\u00f0\u0323\u2502\u0121 \u2502\u1e25 \u2502\u025f\u2502k\u032d \u2502\u1e37 \u2502\u1e43 \u2502p\u032d,p\u030c\u2502p\u0323 \u2502\u1e5b \u2502\u1e63 \u2502\u0161 \u2502\u1e71 \u2502\u1e6d\u2502\u03b8\u2502\u017e \u2502\u1e93 \u2503 \u2520      \u2500\u2542   \u253c\u2500\u253c\u2500\u253c \u253c \u253c \u2500\u253c \u2500\u253c \u253c\u2500\u253c\u2500\u253c \u253c \u253c\u2500\u253c \u253c \u253c \u253c \u2500\u253c \u253c \u253c \u253c \u253c \u253c\u2500\u253c\u2500\u253c \u253c \u2528 \u2503precise match\u2503) \u2502(\u2502c\u2502c c\u2502>c c.\u2502d.\u25026\u25026\u2502g.\u2502h.\u25024\u2502k s\u2502t z\u2502z.\u2503 \u2503lite \u2503) \u2502(\u2502c\u2502c \u25025 \u2502 \u2502% \u2502D \u25026\u2502^\u2502G \u2502H \u25024\u2502& \u2502L \u2502M \u2502p \u2502P \u2502R \u2502S \u2502$ \u2502+ \u2502T\u25028\u25027 \u2502Z \u2503 \u2503fuzzy_all \u2503ignore\u2502(\u2502 \u2502 \u25025 \u25025 \u25025 \u2502d \u2502d\u2502d\u2502g \u2502h \u2502 \u2502 \u2502l \u2502m \u2502p \u2502p \u2502r \u2502s \u2502s \u2502t \u2502t\u2502 \u2502z \u2502z \u2503 \u2503fuzzy_Urmi \u2503 \u2502 \u2502k\u2502k \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502g\u2502q \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2503 \u2503fuzzy_Barwar \u2503 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502d\u2502 \u2502 \u2502 \u2502 \u2502k \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502 \u2502t\u2502 \u2502 \u2503 \u2517      \u2501\u253b   \u2537\u2501\u2537\u2501\u2537 \u2537 \u2537 \u2501\u2537 \u2501\u2537 \u2537\u2501\u2537\u2501\u2537 \u2537 \u2537\u2501\u2537 \u2537 \u2537 \u2537 \u2501\u2537 \u2537 \u2537 \u2537 \u2537 \u2537\u2501\u2537\u2501\u2537 \u2537 \u251b\u0010   Capitals  \u250f      \u2501\u2533\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u2513\u0010 \u2503 \u2503\u1e0d\u2502\u0121\u2502\u1e25\u2502\u1e37\u2502\u1e43\u2502p\u0323\u2502\u1e5b\u2502\u1e63\u2502\u1e6d\u2502\u1e93\u2502\u0101\u2502\u0113\u2502\u012b\u2502\u014d\u2502\u016b\u2503 \u2520      \u2500\u2542\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u2528 \u2503lite \u2503D\u2502G\u2502H\u2502L\u2502M\u2502P\u2502R\u2502S\u2502T\u2502Z\u2502A\u2502E\u2502I\u2502O\u2502U\u2503 \u2517      \u2501\u253b\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u251b\u0010   Special symbols  \u250f      \u2501\u2533\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u2513\u0010 \u2503 \u2503\u010d\u032d\u2502\u010d\u0323\u2502\u00f0\u0323\u2502k\u032d\u2502\u1e71\u2502\u0161\u2502\u0103\u2503 \u2520      \u2500\u2542\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u2528 \u2503lite \u2503 \u2502%\u2502^\u2502&\u2502+\u2502$\u2502@\u2503 \u2517      \u2501\u253b\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u251b\u0010   Numbers  \u250f      \u2501\u2533\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u252f\u2501\u2513\u0010 \u2503 \u2503\u016d\u2502\u025b\u2502\u025f\u2502\u010d\u2502\u00f0\u2502\u017e\u2502\u03b8\u2502\u0259\u2503 \u2520      \u2500\u2542\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u2528 \u2503lite \u25032\u25023\u25024\u25025\u25026\u25027\u25028\u25029\u2503 \u2517      \u2501\u253b\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u2537\u2501\u251b\u0010   Consonant phoneme inventory: Lite and fuzzy conversions  Legend  lt =  lite  fz =  fuzzy  fzUr =  fuzzy Urmi  \u0454 = empty  \u250f          \u2533    \u2501\u2533    \u2533    \u2533   \u2501\u2533   \u2501\u2533   \u2533   \u2501\u2533   \u2501\u2513\u0010 \u2503 \u2503labial \u2503dental- \u2503palatal-\u2503palatal\u2503(post-)\u2503uvular\u2503pharyn-\u2503laryn- \u2503 \u2503 \u2503 \u2503alveolar\u2503alveolar\u2503 \u2503velar \u2503 \u2503geal \u2503geal \u2503 \u2523          \u254b \u2501\u252f \u252f \u254b\u2501\u252f \u252f \u2501\u254b\u2501\u252f \u252f \u2501\u254b\u2501\u252f \u252f \u254b\u2501\u252f \u252f \u254b \u252f \u2501\u254b\u2501\u252f \u252f \u254b\u2501\u252f \u252f \u252b \u2503Stops/affricates \u2503 \u2502lt\u2502fz\u2503 \u2502lt\u2502fz \u2503 \u2502lt\u2502fz \u2503 \u2502lt\u2502fz\u2503 \u2502lt\u2502fz\u2503 \u2502 \u2503 \u2502lt\u2502fz\u2503 \u2502lt\u2502fz\u2503 \u2503 \u2503 \u2502 \u2502 \u2503 \u2502 \u2502 \u2503 \u2502 \u2502 \u2503 \u2502 \u2502Ur\u2503 \u2502 \u2502Ur\u2503 \u2502 \u2503 \u2502 \u2502 \u2503 \u2502 \u2502 \u2503 \u2520          \u2542 \u2500\u253c \u253c \u2542\u2500\u253c \u253c \u2500\u2542\u2500\u253c \u253c \u2500\u2542\u2500\u253c \u253c \u2542\u2500\u253c \u253c \u2542 \u253c \u2500\u2542\u2500\u2534 \u2534 \u2542\u2500\u253c \u253c \u2528 \u2503Unvoiced aspirated \u2503p \u2502p \u2502 \u2503t\u2502t \u2502t \u2503\u010d\u25025 \u25025 \u2503c\u2502c \u2502k \u2503k\u2502k \u2502k \u2503 q\u2502q \u2503 \u2503\u02be\u2502) \u2502\u0454 \u2503 \u2503Unvoiced unaspirated\u2503p\u032d,p\u030c\u2502p \u2502p \u2503\u1e71\u2502+ \u2502t \u2503\u010d\u032d\u2502 \u25025 \u2503c\u032d\u2502c \u2502k \u2503k\u032d\u2502& \u2502q \u2503 \u2502 \u2503 \u2503 \u2502 \u2502 \u2503 \u2503Voiced \u2503b \u2502b \u2502 \u2503d\u2502d \u2502d \u2503j\u2502j \u2502j \u2503\u025f\u25024 \u2502g \u2503g\u2502g \u2502g \u2503 \u2502 \u2503 \u2503 \u2502 \u2502 \u2503 \u2503Emphatic \u2503p\u0323 \u2502P \u2502p \u2503\u1e6d\u2502T \u2502t \u2503\u010d\u2502% \u25025 \u2503 \u2502 \u2502 \u2503 \u2502 \u2502 \u2503 \u2502 \u2503 \u2503 \u2502 \u2502 \u2503 \u2503 \u2503 \u2502 \u2502 \u2503\u1e0d\u2502D \u2502d \u2503 \u2502 \u2502 \u2503 \u2502 \u2502 \u2503 \u2502 \u2502 \u2503 \u2502 \u2503 \u2503 \u2502 \u2502 \u2503 \u2523          \u254b \u2501\u2537 \u2537 \u254b\u2501\u2537 \u2537 \u2501\u254b\u2501\u2537 \u2537 \u2501\u253b\u2501\u2537 \u2537 \u254b\u2501\u2537 \u2537 \u254b \u2537 \u2501\u254b   \u2501\u254b\u2501\u2537 \u2537 \u252b \u2503Fricatives \u2503 \u2503 \u2503 \u2503 \u2503 \u2503 \u2503 \u2503 \u2520          \u2542 \u2500\u252c \u252c \u2542\u2500\u252c \u252c \u2500\u2528 \u2520\u2500\u252c \u252c \u2528 \u2520\u2500\u252c \u252c \u2542\u2500\u252c \u252c \u2528 \u2503Unvoiced \u2503f \u2502f \u2502f \u2503\u03b8\u25028 \u2502t \u2503 \u2503x\u2502x \u2502x \u2503 \u2503\u1e25\u2502H \u2502h \u2503h\u2502h \u2502h \u2503 \u2503Voiced \u2503v \u2502v \u2502w \u2503\u00f0\u25026 \u2502d \u2503 \u2503\u0121\u2502G \u2502g \u2503 \u2503 \u2502 \u2502 \u2503 \u2502 \u2502 \u2503 \u2503Emphatic \u2503 \u2502 \u2502 \u2503\u00f0\u0323\u2502^ \u2502d \u2503 \u2503 \u2502 \u2502 \u2503 \u2503\u02bf\u2502( \u2502( \u2503 \u2502 \u2502 \u2503 \u2523          \u254b \u2501\u2537 \u2537 \u254b\u2501\u2537 \u2537 \u2501\u254b    \u2513 \u2517\u2501\u2537 \u2537 \u251b \u2517\u2501\u2537 \u2537 \u253b\u2501\u2537 \u2537 \u252b \u2503Sibilants \u2503 \u2503 \u2503 \u2503 \u2503 \u2520          \u2528 \u2520\u2500\u252c \u252c \u2500\u2542\u2500\u252c \u252c \u2500\u2528 \u2503 \u2503Unvoiced \u2503 \u2503s\u2502s \u2502s \u2503\u0161\u2502$ \u2502s \u2503 \u2503 \u2503Voiced \u2503 \u2503z\u2502z \u2502z \u2503\u017e\u25027 \u2502z \u2503 \u2503 \u2503Emphatic \u2503 \u2503\u1e63\u2502S \u2502s \u2503 \u2502 \u2502 \u2503 \u2503 \u2503 \u2503 \u2503\u1e93\u2502Z \u2502z \u2503 \u2502 \u2502 \u2503 \u2503 \u2523          \u254b    \u2501\u254b\u2501\u2537 \u2537 \u2501\u254b\u2501\u2537 \u2537 \u2501\u251b \u2503 \u2503Nasals \u2503 \u2503 \u2503 \u2503 \u2520          \u2542 \u2500\u252c \u252c \u2542\u2500\u252c \u252c \u2500\u2528 \u2503 \u2503Plain \u2503m \u2502m \u2502m \u2503n\u2502n \u2502n \u2503 \u2503 \u2503Emphatic \u2503\u1e43 \u2502M \u2502m \u2503 \u2502 \u2502 \u2503 \u2503 \u2523          \u254b \u2501\u2537 \u2537 \u254b\u2501\u2537 \u2537 \u2501\u252b \u2503 \u2503Laterals \u2503 \u2503 \u2503 \u2503 \u2520          \u2528 \u2520\u2500\u252c \u252c \u2500\u2528 \u2503 \u2503Plain \u2503 \u2503l\u2502l \u2502l \u2503 \u2503 \u2503Emphatic \u2503 \u2503\u1e37\u2502L \u2502l \u2503 \u2503 \u2523          \u254b    \u2501\u254b\u2501\u2537 \u2537 \u2501\u252b \u250f   \u2501\u2513 \u2503 \u2503Other approximants \u2503 \u2503 \u2503 \u2503 \u2503 \u2503 \u2520          \u2542 \u2500\u252c \u252c \u2542\u2500\u252c \u252c \u2500\u2528 \u2520\u2500\u252c \u252c \u2528 \u2503 \u2503Plain \u2503w \u2502w \u2502w \u2503r\u2502r \u2502r \u2503 \u2503y\u2502y \u2502y \u2503 \u2503 \u2503Emphatic \u2503 \u2502 \u2502 \u2503\u1e5b\u2502R \u2502r \u2503 \u2503 \u2502 \u2502 \u2503 \u2503 \u2517          \u253b \u2501\u2537 \u2537 \u253b\u2501\u2537 \u2537 \u2501\u253b    \u253b\u2501\u2537 \u2537 \u253b               \u251b\u0010  "
}
]