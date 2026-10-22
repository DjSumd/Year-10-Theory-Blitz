// Reference tabs for Theory Blitz (Year 10) — interactive Circle of Fifths + ATAR reference pages.
const COF = {
  maj:['C','G','D','A','E','B','G♭ / F♯','D♭','A♭','E♭','B♭','F'],
  min:['Am','Em','Bm','F♯m','C♯m','G♯m','E♭m','B♭m','Fm','Cm','Gm','Dm'],
  n  :[0,1,2,3,4,5,6,5,4,3,2,1],
  fl :[false,false,false,false,false,false,true,true,true,true,true,true],
};
const SHARP_ORDER=['F','C','G','D','A','E','B'];
const FLAT_ORDER =['B','E','A','D','G','C','F'];
function keySig(i){const n=COF.n[i];if(n===0)return 'No sharps or flats';
  if(COF.fl[i])return n+' flat'+(n>1?'s':'')+': '+FLAT_ORDER.slice(0,n).map(x=>x+'♭').join(' ');
  return n+' sharp'+(n>1?'s':'')+': '+SHARP_ORDER.slice(0,n).map(x=>x+'♯').join(' ');}
function polar(cx,cy,r,deg){const a=(deg-90)*Math.PI/180;return [cx+r*Math.cos(a),cy+r*Math.sin(a)];}
function wedge(cx,cy,ra,rb,a0,a1){const [x1,y1]=polar(cx,cy,rb,a0),[x2,y2]=polar(cx,cy,rb,a1),[x3,y3]=polar(cx,cy,ra,a1),[x4,y4]=polar(cx,cy,ra,a0);
  const laf=(a1-a0)>180?1:0;
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} A${rb} ${rb} 0 ${laf} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} A${ra} ${ra} 0 ${laf} 0 ${x4.toFixed(1)} ${y4.toFixed(1)} Z`;}
function circleOfFifths(){const cx=300,cy=300,R=288,R2=196,R3=118;
  let s=`<svg viewBox="0 0 600 600" class="cof" xmlns="http://www.w3.org/2000/svg">`;
  for(let i=0;i<12;i++){const c=i*30-15,a0=c,a1=c+30,hue=i*30,colM=`hsl(${hue} 62% 55%)`,colm=`hsl(${hue} 46% 44%)`;
    const [mx,my]=polar(cx,cy,(R+R2)/2,i*30),[nx,ny]=polar(cx,cy,(R2+R3)/2,i*30);
    s+=`<path class="seg" data-i="${i}" d="${wedge(cx,cy,R2,R,a0,a1)}" fill="${colM}" stroke="#fff" stroke-width="2.5"/>`;
    s+=`<path class="seg" data-i="${i}" d="${wedge(cx,cy,R3,R2,a0,a1)}" fill="${colm}" stroke="#fff" stroke-width="2.5"/>`;
    s+=`<text x="${mx.toFixed(1)}" y="${(my+9).toFixed(1)}" text-anchor="middle" font-size="27" font-weight="800" fill="#fff" pointer-events="none">${COF.maj[i]}</text>`;
    s+=`<text x="${nx.toFixed(1)}" y="${(ny+6).toFixed(1)}" text-anchor="middle" font-size="17" font-weight="700" fill="#fff" pointer-events="none">${COF.min[i]}</text>`;
    const [sx,sy]=polar(cx,cy,R+16,i*30);
    s+=`<text x="${sx.toFixed(1)}" y="${(sy+4).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="700" fill="#5b616a" pointer-events="none">${COF.n[i]===0?'':(COF.n[i]+(COF.fl[i]?'♭':'♯'))}</text>`;}
  s+=`<circle cx="${cx}" cy="${cy}" r="${R3-2}" fill="#141414"/>`;
  s+=`<text x="${cx}" y="${cy-8}" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">Circle</text>`;
  s+=`<text x="${cx}" y="${cy+16}" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">of 5ths</text>`;
  return s+`</svg>`;}
function refCircle(){
  return `<p class="prompt">Circle of Fifths</p>
   <p class="sub">Clockwise = up a 5th, +1 sharp; anticlockwise = +1 flat. Outer ring major, inner ring relative minor. Click any key.</p>
   <div class="cofwrap">${circleOfFifths()}</div>
   <div class="cofdetail" id="cofd">Tap a key to see its key signature and relative minor.</div>
   <div class="refnote"><b>Sharps:</b> F C G D A E B &nbsp;·&nbsp; <b>flats:</b> B E A D G C F. Last sharp = leading note (+semitone = key); 2nd-last flat names the key.</div>`;}
function refScales(){
  return `<p class="prompt">Scales &amp; Modes</p>
   <div class="reftable"><table><tr><th>Scale</th><th>Pattern / formula</th></tr>
   <tr><td>Major (Ionian)</td><td>T T S T T T S</td></tr>
   <tr><td>Natural minor</td><td>T S T T S T T</td></tr>
   <tr><td>Harmonic minor</td><td>natural minor, raised 7th</td></tr>
   <tr><td>Melodic (jazz) minor</td><td>natural minor, raised 6 &amp; 7 ↑</td></tr>
   <tr><td>Major pentatonic</td><td>1 2 3 5 6</td></tr>
   <tr><td>Minor pentatonic</td><td>1 ♭3 4 5 ♭7</td></tr>
   <tr><td>Blues</td><td>1 ♭3 4 ♯4 5 ♭7</td></tr>
   <tr><td>Whole-tone</td><td>all tones (6 notes)</td></tr></table></div>
   <div class="refhd">The modes (major scale from each degree)</div>
   <div class="reftable"><table><tr><th>Mode</th><th>Degree</th><th>Characteristic note</th></tr>
   <tr><td>Ionian</td><td>1</td><td>— (major)</td></tr><tr><td>Dorian</td><td>2</td><td>♮6</td></tr>
   <tr><td>Phrygian</td><td>3</td><td>♭2</td></tr><tr><td>Lydian</td><td>4</td><td>♯4</td></tr>
   <tr><td>Mixolydian</td><td>5</td><td>♭7</td></tr><tr><td>Aeolian</td><td>6</td><td>— (natural minor)</td></tr>
   <tr><td>Locrian</td><td>7</td><td>♭2 &amp; ♭5</td></tr></table></div>
   <div class="refcard">Brightest → darkest: Lydian · Ionian · Mixolydian · Dorian · Aeolian · Phrygian · Locrian.</div>`;}
function refIntervals(){
  const rows=[['minor 2nd','1','C–D♭'],['Major 2nd','2','C–D'],['minor 3rd','3','C–E♭'],['Major 3rd','4','C–E'],
    ['Perfect 4th','5','C–F'],['Tritone (A4/d5)','6','C–F♯ / C–G♭'],['Perfect 5th','7','C–G'],['minor 6th','8','C–A♭'],
    ['Major 6th','9','C–A'],['minor 7th','10','C–B♭'],['Major 7th','11','C–B'],['Octave','12','C–C']];
  return `<p class="prompt">Intervals</p>
   <div class="refcard"><b>Number</b> = letter names (inclusive). <b>Quality</b> = semitones. Perfect: U, 4, 5, 8. Major/minor: 2, 3, 6, 7. One wider = augmented; one narrower = diminished.</div>
   <div class="reftable"><table><tr><th>Interval</th><th>Semitones</th><th>From C</th></tr>`
   +rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')+`</table></div>
   <div class="refcard"><b>Inversion:</b> numbers add to 9, quality flips (M↔m, P↔P, aug↔dim). <b>Compound:</b> 9th = comp 2nd, 11th = comp 4th, 13th = comp 6th.</div>`;}
function refChords(){
  return `<p class="prompt">Chords &amp; Harmony</p>
   <div class="reftable"><table><tr><th>Chord</th><th>Formula</th><th>On C</th></tr>
   <tr><td>Major / minor</td><td>1 3 5 / 1 ♭3 5</td><td>C E G / C E♭ G</td></tr>
   <tr><td>Dim / Aug</td><td>1 ♭3 ♭5 / 1 3 ♯5</td><td>C E♭ G♭ / C E G♯</td></tr>
   <tr><td>maj7 / 7</td><td>1 3 5 7 / 1 3 5 ♭7</td><td>C E G B / C E G B♭</td></tr>
   <tr><td>m7 / m7♭5</td><td>1 ♭3 5 ♭7 / 1 ♭3 ♭5 ♭7</td><td>C E♭ G B♭ / C E♭ G♭ B♭</td></tr></table></div>
   <div class="refcard"><b>Inversions:</b> root (C), 1st = 3rd in bass (C/E), 2nd = 5th in bass (C/G).</div>
   <div class="refhd">Scale-tone chords (major key)</div>
   <div class="reftable"><table><tr><th>I</th><th>ii</th><th>iii</th><th>IV</th><th>V</th><th>vi</th><th>vii°</th></tr>
   <tr><td>maj7</td><td>m7</td><td>m7</td><td>maj7</td><td>7</td><td>m7</td><td>m7♭5</td></tr></table></div>
   <div class="refcard"><b>Cadences:</b> perfect V–I · plagal IV–I · imperfect any–V · interrupted V–vi. <b>ii–V–I</b> is the core jazz cadence.</div>`;}
function refTerms(){
  const dyn=[['pp / p / mp','very soft / soft / med. soft'],['mf / f / ff','med. loud / loud / very loud'],['cresc. (&lt;)','gradually louder'],['dim. (&gt;)','gradually softer'],['sfz','sudden strong accent'],['fp','loud then immediately soft']];
  const art=[['staccato','short, detached'],['legato','smooth, connected'],['accent (&gt;)','emphasised'],['tenuto','held for full value'],['marcato (^)','strongly accented']];
  const orn=[['trill','rapid alternation with the note above'],['turn','above, note, below, note'],['acciaccatura','crushed grace note'],['glissando','a slide between pitches']];
  const nav=[['D.C.','back to the beginning'],['D.S.','back to the sign'],['al Coda / Fine','to the Coda / the end'],['fermata','pause, hold the note']];
  const form=[['binary / ternary','AB / ABA'],['rondo','ABACA'],['AABA','32-bar song form'],['sonata','exposition–development–recap'],['theme &amp; variations','theme, then varied']];
  const tex=[['monophonic','one line'],['homophonic','melody + chords'],['polyphonic','independent lines'],['heterophonic','one melody, simultaneous variants']];
  const tbl=(t,rows)=>`<div class="refhd">${t}</div><div class="reftable"><table>`+rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')+`</table></div>`;
  return `<p class="prompt">Terms, Form &amp; Texture</p>`+tbl('Dynamics',dyn)+tbl('Articulation',art)+tbl('Ornaments',orn)+tbl('Navigation',nav)+tbl('Form',form)+tbl('Texture',tex);}
const REFS=[
  {id:'cof', name:'Circle of 5ths', render:refCircle},
  {id:'scl', name:'Scales & Modes', render:refScales},
  {id:'ivl', name:'Intervals', render:refIntervals},
  {id:'chd', name:'Chords & Harmony', render:refChords},
  {id:'term', name:'Terms & Form', render:refTerms},
];
