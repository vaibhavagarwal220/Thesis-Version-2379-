%!PS-Adobe-3.0 EPSF-3.0
%%Title: flow.eps
%%Creator: XCircuit v0.0 rev-1029703628
%%CreationDate: Sat Jul 21 12:59:03 2018
%%Pages: 1
%%BoundingBox: 68 68 358 421
%%DocumentNeededResources: font Times-Roman 
%%EndComments
%%BeginProlog
%
%  PostScript prolog for output from xcircuit
%  Version: 3.9
%
%  Electrical circuit (and otherwise general) drawing program
%
%  Written by Tim Edwards 8/5/93--4/12/16  (tim@opencircuitdesign.com)
%  The Johns Hopkins University (1993-2004)
%  MultiGiG, Inc. (2004-2012)
%  Open Circuit Design (2012-2016)
%
%%BeginResource: procset XCIRCproc 3.9 1
%
% supporting definitions --- these are the primary xcircuit types.

/XCIRCsave save def
/topmat matrix currentmatrix def

/fontslant { /slant exch def [1 0 slant 1 0 0] 
    exch findfont exch makefont dup length dict /ndict exch def
    { 1 index /FID ne { ndict 3 1 roll put } { pop pop } ifelse } forall
    ndict definefont pop} def
/ul { count 0 gt { dup type /stringtype eq showflag 1 eq and { gsave 
   currentpoint topmat setmatrix 0 0 moveto 2 index stringwidth pop (_)
   false charpath flattenpath pathbbox grestore exch pop 1 index
   sub setlinewidth exch pop currentpoint 3 -1 roll add moveto 0
   rlineto stroke moveto } if } if } def
/ol { count 0 gt { dup type /stringtype eq showflag 1 eq and { gsave gsave
   currentpoint topmat setmatrix 2 index stringwidth pop 3 index
   true charpath flattenpath pathbbox grestore exch pop
   exch pop topmat setmatrix (_) true charpath pathbbox grestore
   exch pop 1 index sub setlinewidth exch pop currentpoint
   exch 4 1 roll exch sub add moveto pop 0 rlineto stroke
   moveto } if } if } def
/stW { gsave currentpoint newpath moveto true charpath flattenpath
	pathbbox pop exch pop sub grestore } def
/Ts {mark Tabs aload pop counttomark 1 add array astore /Tabs exch def Tabs
	0 currentpoint pop put} def
/Tbn {mark Tabs aload pop counttomark dup 2 add 1 roll cleartomark 1 sub} def
/Tb { 0 1 Tbn {Tabs exch get dup currentpoint pop lt
	{currentpoint exch pop moveto exit} {pop} ifelse } for } def
/Tf { Tbn -1 0 {Tabs exch get dup currentpoint pop gt
	{currentpoint exch pop moveto exit} {pop} ifelse } for } def
/qS { (aa) stW (a a) stW sub 4 div 0 Kn } def
/hS { qS qS } def
/pspc 0 def
/cf0 { scalefont setfont } bind def
/Kn { dup kY add /kY exch def rmoveto } bind def
/ss { /fscale fscale 0.67 mul def currentfont 0.67 cf0 0 fscale0 fscale mul
	0.33 mul neg Kn} def
/Ss { /fscale fscale 0.67 mul def currentfont 0.67 cf0 0 fscale0 fscale mul
	0.67 mul Kn } def
/ns { 0 kY neg Kn /kY 0 def /fscale 1.0 def xfont0 1.0 cf0 } def
/MR { /twidth exch def } def
/CRx { } def
/CR { ns 0 /Bline Bline fscale0 neg add def Bline moveto CRx } def
/cf { dup type /realtype ne {1.0} if exch findfont exch kY 0 eq
	{ 40 mul dup /fscale0 exch def cf0 /xfont0 currentfont def}
	{fscale0 mul fscale mul cf0} ifelse } def
/ctmk { counttomark dup 2 add -1 roll pop } bind def
/label { gsave translate 0 0 moveto dup scale neg
	/rotval exch def /twidth 100000 def /just exch def just 128 and
	0 gt {/mshow {pop} def} {/mshow {show} def} ifelse just 16 and 0
	gt {gsave rotval rotate 0 1 dtransform gsave pagemat setmatrix
	idtransform exch grestore 1 0 dtransform gsave pagemat setmatrix
	idtransform exch grestore dup abs 1e-9 lt {pop mul 0 gt} {3 1 roll
	pop pop 0 lt} ifelse grestore {-1 /rotval rotval neg def /just just
	dup 3 and 1 ne {3 xor} if def} {1} ifelse exch -1e-9 lt {-1 /rotval
	rotval neg def /just just dup 12 and 4 ne {12 xor} if def} {1}
	ifelse scale } if /showflag 0 def /fspc pspc def /Bline 0 def
	/numlines 0 def /padding 0 array def /Tabs 0 array def
	/fscale 1.0 def /kY 0 def gsave /CRx { linewid padding
	aload pop numlines 1 add dup /numlines exch def array astore
	/padding exch def /linewid 0 def } def dup 1 add copy dup 1 0
	dtransform exch atan rotate {exch dup type /stringtype eq {gsave dup
	gsave newpath 0 0 moveto true charpath flattenpath pathbbox pop exch
	pop exch pop grestore currentpoint pop add dup /linewid exch def twidth
	ge {grestore CR exch 1 add dup 2 add {CR} exch 1 roll exch} {grestore}
	ifelse true charpath flattenpath} {dup type /arraytype eq {exec} {12
	string cvs true charpath flattenpath} ifelse} ifelse} repeat
	CRx /CRx {padding aload pop just 1280 and 0 gt {blockwid exch sub just
	1024 and 0 gt {0.5 mul} if} {pop 0} ifelse 0 rmoveto numlines 1 sub
	dup /numlines exch def array astore /padding exch def} def exch pop
	pathbbox grestore 4 copy pop exch pop exch sub /blockwid exch def
	3 -1 roll pop 3 1 roll just 1 and 0 gt {just 2 and
	0 gt {exch pop neg fspc sub} {exch sub 0.5 mul neg} ifelse} {pop neg
	fspc add} ifelse exch Bline exch just 4 and 0 gt {just 8 and 0 gt
	{exch pop neg fspc sub} {add 0.5 mul neg} ifelse} {pop neg fspc add}
	ifelse rotval rotate Kn currentpoint translate /showflag 1 def /Bline
	0 def /Tabs 0 array def /fscale 1.0 def /kY 0 def CRx {dup type
	/stringtype eq {mshow} {dup type /arraytype eq {exec} {12 string cvs
	mshow} ifelse} ifelse} repeat grestore endclip} def
/pinlabel { 4 index 32 and 0 ne hlevel 0 eq or { /pspc 10 def label
	/pspc 0 def } { pop pop pop pop pop {pop} repeat } ifelse } def
/pinglobal { pinlabel } def
/infolabel { pinlabel } def
/graphic { gsave 4 index cvx exec /DataSource get resetfile translate 0 0
	moveto neg rotate dup scale cvx exec image grestore endclip} def

/scb { setrgbcolor } bind def  /sce { defColor aload pop scb } bind def
/cRedef {/defColor currentcolor 3 array astore def} def
/begingate {dup type /dicttype ne {1 dict} if begin	% default params
	dup type /dicttype ne {1 dict} if begin		% instanced params
	/hlevel hlevel 1 add def /defColor currentcolor sce 3 array astore
	def gsave sce translate 0 0 moveto neg rotate dup type /nametype
	eq not { dup abs currentlinewidth exch div setlinewidth } { pop }
	ifelse dup abs scale clipped 1 and 1 eq {/clipped clipped 1 add def}
	if} bind def
/endgate { /hlevel hlevel 1 sub def grestore defColor aload pop cRedef
	scb end end endclip} bind def

/hlevel 0 def
/endclip {clipped 1 and 1 eq {grestore /clipped clipped 1 sub def} if} def
/tmpa [1 0 0 1 0 0] def
/gar {8 8 true tmpa {<c0 c0 00 00 0c 0c 00 00>} imagemask} bind
{8 8 true tmpa {<30 70 60 02 03 07 06 20>} imagemask} bind
{8 8 true tmpa {<0c 1e 1e 0c c0 e1 e1 c0>} imagemask} bind
{8 8 true tmpa {<0f 0f 0f 0f f0 f0 f0 f0>} imagemask} bind
{8 8 true tmpa {<3f f3 e1 e1 f3 3f 1e 1e>} imagemask} bind
{8 8 true tmpa {<df cf 8f 9f fd fc f8 f9>} imagemask} bind
{8 8 true tmpa {<ff 3f 3f ff ff f3 f3 ff>} imagemask} bind 7 array astore def
/ppaint { gsave clip tmpa dup setmatrix pathbbox neg exch neg 4 2 roll
  neg 4 -1 roll 2 copy gt {exch} if 8 div ceiling 8 mul 4 2 roll neg 2 copy
  gt {exch} if 8 div ceiling 8 mul 3 -1 roll -8 5 -1 roll
  { 3 index exch 5 exch put dup -8 3 index { 3 index
  exch 4 exch put 3 index exec } for } for pop pop pop pop grestore } bind def
/setstyles {
  currentlinewidth mul setlinewidth /style exch def style 2048 and 0 gt
  clipped 1 and 0 eq and {clip newpath /clipped clipped 1 add def} {
  style 1 and 0 gt not {closepath} if
  style 1024 and 0 gt {2 setlinecap 0 setlinejoin} if
  style 2 and 0 gt {currentlinewidth 4 mul dup 2 array astore 0 setdash} if
  style 4 and 0 gt {0.5 currentlinewidth 4 mul 2 array astore 0 setdash} if
  gsave style 16 and 0 gt { style 224 and -5 bitshift style 256 and 0 gt {
  7 exch sub 8 div dup 1 exch sub currentrgbcolor 3 array astore
  {3 copy mul add 4 1 roll pop} forall pop pop setrgbcolor eofill}
  {dup 7 lt {gar exch get ppaint} {pop eofill} ifelse} ifelse}
  {style 256 and 0 gt {1 setgray eofill} if} ifelse grestore style 8 and 0 gt 
  style 512 eq or {newpath} {stroke} ifelse grestore endclip} ifelse} def     

/addtoy {exch dup dup 2 mul 3 add 1 roll -1 1 { 4 1 roll dup 4 1 roll add
	4 -1 roll 2 mul 1 add index 2 mul 2 add 2 roll} for pop} def
/addtoy1 {1 exch addtoy pop} def
/addtoy3 {3 exch addtoy pop} def
/addtoy4 {4 exch addtoy pop} def
/addtox {exch dup dup 2 mul 3 add 1 roll -1 1 { 4 1 roll dup 4 1 roll 3 -1 roll
	add exch 4 -1 roll 2 mul 1 add index 2 mul 2 add 2 roll} for pop} def
/addtox1 {1 exch addtox pop} def
/addtox3 {3 exch addtox pop} def
/addtox4 {4 exch addtox pop} def
/polygon { gsave /num exch def moveto num 1 sub {lineto} repeat setstyles } def
/xcarc   { gsave newpath arc setstyles } def
/elb { matrix currentmatrix 7 -1 roll 7 -1 roll translate 5 1 roll 4 -1 roll
	3 index div 1 scale } def
/ele { 0 4 1 roll 0 4 1 roll } bind def
/ellipse { gsave elb newpath ele arc setmatrix setstyles } def
/pellip  { elb ele arc setmatrix } def
/nellip  { elb ele arcn setmatrix } def
/spline  { gsave moveto curveto setstyles } def
/polyc   { {lineto} repeat } bind def
/beginpath { gsave moveto } bind def
/endpath { setstyles } bind def
/bop	 { 1 setlinecap 2 setlinejoin 6 setmiterlimit 0 0 0 scb cRedef
	/clipped 0 def} def
/psinsertion {/PSobj save def /showpage {} def /setpagedevice {pop} def bop
	rotate translate dup scale} def
/end_insert {PSobj restore} def
/setpagemat {/pagemat matrix currentmatrix def} def
/inchscale  {setpagemat 0.375 mul dup scale} def
/cmscale    {setpagemat 0.35433071 mul dup scale} def

%%EndResource
%%EndProlog
% XCircuit output starts here.

%%BeginSetup

/generic::arrowhead {
% nonetwork
begingate
8 -28 beginpath
3 -18 3 -15 0 0 curveto
-3 -15 -3 -18 -8 -28 curveto
-2 -26 2 -26 8 -28 curveto
249 
1.000 endpath
endgate
} def


%%EndSetup

%%Page: flow 1
%%PageOrientation: Portrait
/pgsave save def bop
% 32.00 8.00 gridspace
1.0000 inchscale
4.4200 setlinewidth 616 848 translate

(Feed the comparator outputs to MSB capacitors.) {/Times-Roman cf} 2 16 0.000 
0.700 -312 -128 label
(Push the comparator outputs from first cycle) {/Times-Roman cf} 2 16 0.000 
0.700 -312 -336 label
(Push the comparator outputs from second cycle) {/Times-Roman cf} 2 16 0.000 
0.700 -312 -496 label
(Sample the input on all CDACs.) {/Times-Roman cf} 2 16 0.000 0.700 -224 96 
label
(to T-to-B converter and output register.) {/Times-Roman cf} 2 16 0.000 0.700 
-280 -376 label
(to T-to-B converter and output register.) {/Times-Roman cf} 2 16 0.000 0.700 
-272 -536 label
(Set EOC) {/Times-Roman cf} 2 16 0.000 0.700 -104 -640 label
0 1.000 -344 -464 -344 -560 264 -560 264 -464 4 polygon
1 1.000 -48 80 -48 48 2 polygon
-1.000 180.000 -48 32 generic::arrowhead
-1.000 180.000 -48 -96 generic::arrowhead
1 1.000 -48 -40 -48 -80 2 polygon
-1.000 180.000 -48 -192 generic::arrowhead
1 1.000 -48 -144 -48 -176 2 polygon
-1.000 180.000 -48 -304 generic::arrowhead
1 1.000 -48 -256 -48 -288 2 polygon
-1.000 180.000 -48 -464 generic::arrowhead
1 1.000 -48 -400 -48 -448 2 polygon
-1.000 180.000 -48 -608 generic::arrowhead
1 1.000 -48 -560 -48 -592 2 polygon
1 1.000 -344 -632 -424 -632 -424 264 -352 264 4 polygon
1.000 90.000 -344 104 generic::arrowhead
(Cycle 1) {/Times-Roman cf} 2 16 90.000 0.700 296 88 label
(Cycle 2) {/Times-Roman cf} 2 16 90.000 0.700 296 -192 label
(Cycle 3) {/Times-Roman cf} 2 16 90.000 0.700 296 -488 label
(Generate bit patterns for CDACs as shown in ) {/Times-Roman cf} 2 16 0.000 
0.700 -312 -216 label
0 1.000 -344 -608 -344 -656 264 -656 264 -608 4 polygon
0 1.000 -344 -304 -344 -400 264 -400 264 -304 4 polygon
0 1.000 -344 -192 -344 -256 264 -256 264 -192 4 polygon
0 1.000 -344 -96 -344 -144 264 -144 264 -96 4 polygon
0 1.000 -344 32 -344 -40 264 -40 264 32 4 polygon
0 1.000 -344 128 -344 80 256 80 256 128 4 polygon
(Table I.) {/Times-Roman cf} 2 16 0.000 0.700 -80 -248 label
(Generate bit patterns for CDACs as shown in ) {/Times-Roman cf} 2 16 0.000 
0.700 -320 8 label
(Table I.) {/Times-Roman cf} 2 16 0.000 0.700 -88 -24 label
3 1.000 -392 -432 328 -432 2 polygon
3 1.000 -392 -56 328 -56 2 polygon
pgsave restore showpage

%%Trailer
XCIRCsave restore
%%EOF
