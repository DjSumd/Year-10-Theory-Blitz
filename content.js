// Year 10 Music · Theory (ATAR level) — full syllabus for Theory Blitz.
// types: notate | choice (optional `show`) | match. Each unit has a `guide`.
const IVL=['m2','M2','m3','M3','P4','P5','m6','M6','m7','M7','P8'];

const UNITS=[
{ id:'u1', name:'Notation',
  guide:`<b>Reading &amp; writing pitch</b>
   <ol><li><b>Clefs:</b> treble lines E G B D F, spaces FACE; bass lines G B D F A, spaces A C E G. Middle C = C4, one ledger below the treble / above the bass.</li>
   <li><b>Octave registers (SPN):</b> each octave numbers from C up — C3–B3 in the bass, C5–B5 in the treble.</li>
   <li><b>Accidentals:</b> ♯ up a semitone, ♭ down, ♮ cancels; a double sharp/flat moves two. An accidental lasts to the end of the bar.</li>
   <li><b>Enharmonics:</b> same pitch, different name — C♯=D♭, F♯=G♭, A♯=B♭, E♯=F, B♯=C, C♭=B.</li></ol>`,
  qs:[
  {t:'notate',anyOctave:true,prompt:'Notate: G, C, F, A',sub:'Treble. Any octave of each counts.',clef:'treble',given:1,notes:[['G',4,''],['C',4,''],['F',5,''],['A',4,'']]},
  {t:'notate',anyOctave:true,prompt:'Notate: F, A, C, D',sub:'Bass. Any octave counts.',clef:'bass',given:1,notes:[['F',3,''],['A',2,''],['C',4,''],['D',3,'']]},
  {t:'choice',prompt:'Name this note.',show:{clef:'treble',cols:[['A5']]},options:['F','A','C','E'],answer:'A',why:'Top space of the treble staff is E; the A is above it.'},
  {t:'choice',prompt:'Name this note.',show:{clef:'bass',cols:[['E2']]},options:['C','E','G','A'],answer:'E'},
  {t:'choice',prompt:'Middle C in scientific pitch notation is…',options:['C3','C4','C5'],answer:'C4'},
  {t:'choice',prompt:'A double sharp (𝄪) raises a pitch by…',options:['one semitone','two semitones','an octave'],answer:'two semitones'},
  {t:'choice',prompt:'An accidental lasts until…',options:['the next note','the end of the bar','the end of the line'],answer:'the end of the bar'},
  {t:'choice',prompt:'The enharmonic equivalent of C♯ is…',options:['D♭','B♯','D♮'],answer:'D♭'},
  {t:'choice',prompt:'The enharmonic equivalent of B♯ is…',options:['C','A♯','B♭'],answer:'C'},
  {t:'choice',prompt:'Is C up to D♭ a tone or a semitone?',options:['tone','semitone'],answer:'semitone'},
  {t:'choice',prompt:'How many semitones are in one octave (the chromatic scale)?',options:['7','11','12'],answer:'12'},
  {t:'choice',prompt:'A slash chord C/E means…',options:['a C chord with E in the bass','C then E played in turn','C sharpened to E'],answer:'a C chord with E in the bass'},
  {t:'choice',prompt:'A chord symbol with just a letter (e.g. F) means a…',options:['major triad','minor triad','single note'],answer:'major triad'},
]},

{ id:'u2', name:'Rhythm & Metre',
  guide:`<b>Values &amp; metre</b>
   <ul><li><b>Values halve:</b> semibreve 4 → minim 2 → crotchet 1 → quaver ½ → semiquaver ¼ (in 4/4). A dot adds half again (dotted minim = 3, dotted crotchet = 1½).</li>
   <li><b>Simple</b> metre splits the beat into 2 (2/4, 3/4, 4/4); <b>compound</b> into 3 (6/8, 9/8, 12/8), beat = dotted crotchet. Divide a compound top number by 3 for the beats.</li>
   <li><b>Tuplet:</b> a triplet is 3 in the time of 2; a duplet is 2 in the time of 3. <b>Syncopation</b> accents an off-beat; <b>anacrusis</b> is an upbeat.</li></ul>`,
  qs:[
  {t:'match',prompt:'Match each note to its value in 4/4.',pairs:[['Semibreve','4 beats'],['Minim','2 beats'],['Crotchet','1 beat'],['Quaver','½ beat'],['Dotted minim','3 beats']]},
  {t:'choice',prompt:'A dotted crotchet is worth…',options:['1 beat','1½ beats','2 beats'],answer:'1½ beats'},
  {t:'choice',prompt:'How many quavers equal a minim?',options:['2','3','4'],answer:'4'},
  {t:'choice',prompt:'A minim tied to a crotchet lasts…',options:['2 beats','3 beats','4 beats'],answer:'3 beats'},
  {t:'choice',prompt:'In simple metre the beat divides into…',options:['two','three'],answer:'two'},
  {t:'choice',prompt:'In compound metre the beat divides into…',options:['two','three'],answer:'three'},
  {t:'choice',prompt:'The beat note in 6/8, 9/8 and 12/8 is a…',options:['crotchet','dotted crotchet','quaver'],answer:'dotted crotchet'},
  {t:'choice',prompt:'How many beats in a bar of 12/8?',options:['3','4','6'],answer:'4'},
  {t:'choice',prompt:'6/8 is best described as…',options:['simple duple','compound duple','compound triple'],answer:'compound duple'},
  {t:'choice',prompt:'3/4 is…',options:['simple triple','compound triple','simple duple'],answer:'simple triple'},
  {t:'choice',prompt:'A triplet plays…',options:['2 notes in the time of 3','3 notes in the time of 2','4 notes in the time of 3'],answer:'3 notes in the time of 2'},
  {t:'choice',prompt:'Accenting a weak beat or off-beat is called…',options:['syncopation','augmentation','rubato'],answer:'syncopation'},
  {t:'choice',prompt:'An anacrusis is…',options:['the upbeat before bar 1','a held final note','a triplet'],answer:'the upbeat before bar 1'},
  {t:'match',prompt:'Match each tempo term to its meaning.',pairs:[['Largo','very slow, broad'],['Andante','walking pace'],['Allegro','fast, lively'],['Presto','very fast'],['rubato','flexible tempo']]},
  {t:'choice',prompt:'Order from slowest to fastest:',options:['Andante, Largo, Allegro, Presto','Largo, Andante, Allegro, Presto','Largo, Allegro, Andante, Presto'],answer:'Largo, Andante, Allegro, Presto'},
]},

{ id:'u3', name:'Keys & Tonality',
  guide:`<b>Key signatures &amp; tonality</b>
   <ul><li><b>Order of sharps:</b> F C G D A E B (Father Charles Goes Down And Ends Battle). <b>Flats</b> are the reverse: B E A D G C F.</li>
   <li><b>Find a sharp key:</b> the last sharp is the leading note — go up a semitone (last sharp C♯ → D major). <b>Flat key:</b> the second-last flat names the key.</li>
   <li><b>Relative minor</b> shares the signature, a minor 3rd below (C↔Am). The <b>tonic (parallel) minor</b> keeps the letter but changes the signature (C major ↔ C minor).</li>
   <li><b>Major or minor?</b> Check the 3rd above the tonal centre: major 3rd → major; minor 3rd → minor. A raised 7th accidental signals harmonic/melodic minor.</li></ul>`,
  qs:[
  {t:'choice',prompt:'The order of sharps is…',options:['F C G D A E B','B E A D G C F','C G D A E B F'],answer:'F C G D A E B'},
  {t:'choice',prompt:'The order of flats is…',options:['F C G D A E B','B E A D G C F','C F B E A D G'],answer:'B E A D G C F'},
  {t:'choice',prompt:'A key signature with the last sharp C♯ is…',options:['C major','D major','A major'],answer:'D major',why:'The last sharp is the leading note; a semitone up from C♯ is D.'},
  {t:'choice',prompt:'How many sharps/flats does A major have?',options:['2 sharps','3 sharps','3 flats'],answer:'3 sharps'},
  {t:'choice',prompt:'E♭ major has…',options:['2 flats','3 flats','3 sharps'],answer:'3 flats'},
  {t:'choice',prompt:'Which sharps does D major have?',options:['F♯ C♯','F♯ C♯ G♯','F♯ only'],answer:'F♯ C♯'},
  {t:'choice',prompt:'The relative minor of E♭ major is…',options:['C minor','E♭ minor','G minor'],answer:'C minor'},
  {t:'choice',prompt:'The relative major of F♯ minor is…',options:['A major','D major','F♯ major'],answer:'A major'},
  {t:'choice',prompt:'C major and C minor are…',options:['relative keys','parallel (tonic) keys','the same key'],answer:'parallel (tonic) keys'},
  {t:'choice',prompt:'E minor has…',options:['no sharps/flats','1 sharp (F♯)','1 flat (B♭)'],answer:'1 sharp (F♯)'},
  {t:'choice',prompt:'Name this scale.',show:{clef:'treble',cols:[['C4'],['D4'],['E4'],['F4'],['G4'],['A4'],['B4'],['C5']]},options:['C major','A minor','C Mixolydian'],answer:'C major'},
  {t:'choice',prompt:'Name this scale.',show:{clef:'treble',cols:[['A4'],['B4'],['C5'],['D5'],['E5'],['F5'],['G#5'],['A5']]},options:['A natural minor','A harmonic minor','A major'],answer:'A harmonic minor',why:'The raised 7th (G♯) is the harmonic-minor leading note.'},
  {t:'choice',prompt:'On the circle of fifths, moving clockwise one step…',options:['adds a sharp (up a 5th)','adds a flat','changes nothing'],answer:'adds a sharp (up a 5th)'},
  {t:'choice',prompt:'A piece centres on A, minor 3rd above it, no raised 7th and no sharps/flats. It is most likely…',options:['A major','A natural minor / A Aeolian','A harmonic minor'],answer:'A natural minor / A Aeolian'},
]},

{ id:'u4', name:'Scales & Modes',
  guide:`<b>Scales &amp; the modes</b>
   <ol><li><b>Letters first</b> (one of each), then fit the pattern with accidentals. Major = T T S T T T S. Natural minor = T S T T S T T.</li>
   <li><b>Minor forms:</b> harmonic minor raises the 7th; melodic (jazz) minor raises the 6th and 7th ascending.</li>
   <li><b>Pentatonic/blues:</b> minor pentatonic = 1 ♭3 4 5 ♭7; blues adds the ♯4/♭5 blue note.</li>
   <li><b>Modes</b> = the major scale begun on each degree: Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian. Characteristic notes: Dorian ♮6, Phrygian ♭2, Lydian ♯4, Mixolydian ♭7, Locrian ♭2 &amp; ♭5.</li></ol>`,
  qs:[
  {t:'notate',prompt:'G major, ascending',sub:'1 sharp (F♯). Tonic given.',clef:'treble',given:1,notes:[['G',4,''],['A',4,''],['B',4,''],['C',5,''],['D',5,''],['E',5,''],['F',5,'s'],['G',5,'']]},
  {t:'notate',prompt:'E♭ major, ascending',sub:'3 flats. Tonic given.',clef:'treble',given:1,notes:[['E',4,'f'],['F',4,''],['G',4,''],['A',4,'f'],['B',4,'f'],['C',5,''],['D',5,''],['E',5,'f']]},
  {t:'notate',prompt:'A harmonic minor, ascending',sub:'Raised 7th (G♯). Tonic given.',clef:'treble',given:1,notes:[['A',4,''],['B',4,''],['C',5,''],['D',5,''],['E',5,''],['F',5,''],['G',5,'s'],['A',5,'']]},
  {t:'notate',prompt:'D harmonic minor, ascending',sub:'1 flat + raised 7th (C♯). Tonic given.',clef:'treble',given:1,notes:[['D',4,''],['E',4,''],['F',4,''],['G',4,''],['A',4,''],['B',4,'f'],['C',5,'s'],['D',5,'']]},
  {t:'notate',prompt:'G melodic (jazz) minor, ascending',sub:'Raised 6 &amp; 7 (E♮ F♯), ♭3 = B♭. Tonic given.',clef:'treble',given:1,notes:[['G',4,''],['A',4,''],['B',4,'f'],['C',5,''],['D',5,''],['E',5,''],['F',5,'s'],['G',5,'']]},
  {t:'notate',prompt:'D Dorian, ascending',sub:'White notes from D. Tonic given.',clef:'treble',given:1,notes:[['D',4,''],['E',4,''],['F',4,''],['G',4,''],['A',4,''],['B',4,''],['C',5,''],['D',5,'']]},
  {t:'notate',prompt:'E Phrygian, ascending',sub:'White notes from E. Tonic given.',clef:'treble',given:1,notes:[['E',4,''],['F',4,''],['G',4,''],['A',4,''],['B',4,''],['C',5,''],['D',5,''],['E',5,'']]},
  {t:'notate',prompt:'F Lydian, ascending',sub:'White notes from F. Tonic given.',clef:'treble',given:1,notes:[['F',4,''],['G',4,''],['A',4,''],['B',4,''],['C',5,''],['D',5,''],['E',5,''],['F',5,'']]},
  {t:'notate',prompt:'G Mixolydian, ascending',sub:'White notes from G. Tonic given.',clef:'treble',given:1,notes:[['G',4,''],['A',4,''],['B',4,''],['C',5,''],['D',5,''],['E',5,''],['F',5,''],['G',5,'']]},
  {t:'notate',prompt:'A blues scale, ascending',sub:'A C D D♯ E G A. Tonic given.',clef:'treble',given:1,notes:[['A',4,''],['C',5,''],['D',5,''],['D',5,'s'],['E',5,''],['G',5,''],['A',5,'']]},
  {t:'notate',prompt:'C major pentatonic, ascending',sub:'C D E G A C. Tonic given.',clef:'treble',given:1,notes:[['C',4,''],['D',4,''],['E',4,''],['G',4,''],['A',4,''],['C',5,'']]},
  {t:'choice',prompt:'The harmonic minor raises which degree of the natural minor?',options:['the 6th','the 7th','the 5th'],answer:'the 7th'},
  {t:'choice',prompt:'The melodic (jazz) minor ascending raises degrees…',options:['6 and 7','2 and 6','3 and 7'],answer:'6 and 7'},
  {t:'choice',prompt:'Which mode has a ♯4 as its characteristic note?',options:['Dorian','Lydian','Mixolydian'],answer:'Lydian'},
  {t:'choice',prompt:'Dorian’s characteristic note (vs natural minor) is the…',options:['♭2','♮6','♯4'],answer:'♮6'},
  {t:'choice',prompt:'Name this scale.',show:{clef:'treble',cols:[['G4'],['A4'],['B4'],['C5'],['D5'],['E5'],['F5'],['G5']]},options:['G major','G Mixolydian','G Dorian'],answer:'G Mixolydian',why:'Major 3rd (B) with a ♭7 (F♮) = Mixolydian.'},
  {t:'choice',prompt:'The minor pentatonic scale is spelled…',options:['1 2 3 5 6','1 ♭3 4 5 ♭7','1 2 ♭3 4 5'],answer:'1 ♭3 4 5 ♭7'},
]},

{ id:'u5', name:'Intervals',
  guide:`<b>Number, quality &amp; inversion</b>
   <ol><li><b>Number:</b> count letter names from the lower note, counting both (C→E = 3rd).</li>
   <li><b>Quality:</b> count semitones. <b>Perfect</b>: unison, 4th, 5th, octave. <b>Major/minor</b>: 2nd, 3rd, 6th, 7th. One wider than perfect/major = <b>augmented</b>; one narrower than perfect/minor = <b>diminished</b>. A tritone = 6 semitones (A4/d5).</li>
   <li><b>Inversion:</b> the two numbers add to 9 and quality flips (major↔minor, perfect↔perfect, aug↔dim). M3 inverts to m6.</li>
   <li><b>Compound</b> intervals exceed an octave: a 9th = compound 2nd, 11th = compound 4th, 13th = compound 6th.</li></ol>`,
  qs:[
  {t:'notate',prompt:'Write a major 3rd above C.',sub:'Place the upper note. Lower note given.',clef:'treble',given:1,notes:[['C',4,''],['E',4,'']]},
  {t:'notate',prompt:'Write a perfect 5th above D.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['D',4,''],['A',4,'']]},
  {t:'notate',prompt:'Write a minor 7th above E.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['E',4,''],['D',5,'']]},
  {t:'notate',prompt:'Write a major 6th above C.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['C',4,''],['A',4,'']]},
  {t:'notate',prompt:'Write an augmented 4th above C.',sub:'The tritone, spelled upward (F♯). Place the upper note.',clef:'treble',given:1,notes:[['C',4,''],['F',4,'s']]},
  {t:'notate',prompt:'Write a minor 6th above C.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['C',4,''],['A',4,'f']]},
  {t:'notate',prompt:'Write a major 7th above C.',sub:'Place the upper note.',clef:'treble',given:1,notes:[['C',4,''],['B',4,'']]},
  {t:'choice',prompt:'Name this interval.',show:{clef:'treble',cols:[['C4'],['A4']]},options:IVL,answer:'M6'},
  {t:'choice',prompt:'Name this interval.',show:{clef:'treble',cols:[['E4'],['G4']]},options:IVL,answer:'m3'},
  {t:'choice',prompt:'Name this interval.',show:{clef:'treble',cols:[['C4'],['B4']]},options:IVL,answer:'M7'},
  {t:'choice',prompt:'Name this interval.',show:{clef:'treble',cols:[['C4'],['F#4']]},options:['P4','A4 (tritone)','P5','M3'],answer:'A4 (tritone)'},
  {t:'choice',prompt:'How many semitones in a perfect 5th?',options:['6','7','8'],answer:'7'},
  {t:'choice',prompt:'How many semitones in a tritone?',options:['5','6','7'],answer:'6'},
  {t:'choice',prompt:'Which interval numbers can be perfect?',options:['2nd, 3rd, 6th, 7th','unison, 4th, 5th, octave','all of them'],answer:'unison, 4th, 5th, octave'},
  {t:'choice',prompt:'A major 3rd inverts to a…',options:['minor 6th','major 6th','minor 3rd'],answer:'minor 6th'},
  {t:'choice',prompt:'A perfect 5th inverts to a…',options:['perfect 4th','perfect 5th','augmented 4th'],answer:'perfect 4th'},
  {t:'choice',prompt:'A 9th is a compound…',options:['2nd','4th','6th'],answer:'2nd'},
]},

{ id:'u6', name:'Chords',
  guide:`<b>Triads &amp; seventh chords</b>
   <ul><li><b>Triads</b> (stack two 3rds): major 1 3 5, minor 1 ♭3 5, diminished 1 ♭3 ♭5, augmented 1 3 ♯5.</li>
   <li><b>Inversions:</b> root position (root in bass), 1st inversion (3rd in bass, e.g. C/E), 2nd inversion (5th in bass, C/G).</li>
   <li><b>Seventh chords</b> add a 3rd on top: maj7 (1 3 5 7), dominant 7 (1 3 5 ♭7), m7 (1 ♭3 5 ♭7), m7♭5 / half-dim (1 ♭3 ♭5 ♭7), dim7 (1 ♭3 ♭5 ♭♭7).</li>
   <li><b>Scale-tone 7ths (major key):</b> Imaj7 ii m7 iii m7 IVmaj7 V7 vi m7 vii m7♭5.</li></ul>`,
  qs:[
  {t:'notate',prompt:'Notate a D major triad.',sub:'Root position (D F♯ A). Root given.',clef:'treble',given:1,notes:[['D',4,''],['F',4,'s'],['A',4,'']]},
  {t:'notate',prompt:'Notate an A minor triad.',sub:'Root position. Root given.',clef:'treble',given:1,notes:[['A',4,''],['C',5,''],['E',5,'']]},
  {t:'notate',prompt:'Notate a B diminished triad.',sub:'1 ♭3 ♭5 (B D F). Root given.',clef:'treble',given:1,notes:[['B',4,''],['D',5,''],['F',5,'']]},
  {t:'notate',prompt:'Notate a C augmented triad.',sub:'1 3 ♯5 (C E G♯). Root given.',clef:'treble',given:1,notes:[['C',4,''],['E',4,''],['G',4,'s']]},
  {t:'notate',prompt:'Notate an E♭ major triad.',sub:'Root position (E♭ G B♭). Root given.',clef:'treble',given:1,notes:[['E',4,'f'],['G',4,''],['B',4,'f']]},
  {t:'notate',prompt:'Notate a C major 7th (Cmaj7).',sub:'1 3 5 7 (C E G B). Root given.',clef:'treble',given:1,notes:[['C',4,''],['E',4,''],['G',4,''],['B',4,'']]},
  {t:'notate',prompt:'Notate a G dominant 7th (G7).',sub:'1 3 5 ♭7 (G B D F). Root given.',clef:'treble',given:1,notes:[['G',4,''],['B',4,''],['D',5,''],['F',5,'']]},
  {t:'notate',prompt:'Notate a D minor 7th (Dm7).',sub:'1 ♭3 5 ♭7 (D F A C). Root given.',clef:'treble',given:1,notes:[['D',4,''],['F',4,''],['A',4,''],['C',5,'']]},
  {t:'choice',prompt:'Name this triad.',show:{clef:'treble',cols:[['E4','G4','Bb4']]},options:['E major','E minor','E diminished'],answer:'E diminished'},
  {t:'choice',prompt:'Name this triad.',show:{clef:'treble',cols:[['F4','A4','C#5']]},options:['F major','F augmented','D minor'],answer:'F augmented'},
  {t:'choice',prompt:'Spell a half-diminished 7th on C (Cm7♭5).',options:['C E♭ G♭ B♭','C E♭ G B♭','C E G B'],answer:'C E♭ G♭ B♭'},
  {t:'choice',prompt:'A C major triad with E in the bass is written…',options:['C/E','C/G','Em'],answer:'C/E'},
  {t:'choice',prompt:'C/G is a C chord in…',options:['root position','1st inversion','2nd inversion'],answer:'2nd inversion'},
  {t:'choice',prompt:'The dominant 7th formula is…',options:['1 3 5 7','1 3 5 ♭7','1 ♭3 5 ♭7'],answer:'1 3 5 ♭7'},
  {t:'choice',prompt:'In C major, the vii chord (triad) is…',options:['B major','B minor','B diminished'],answer:'B diminished'},
  {t:'choice',prompt:'A ii–V–I in C major (sevenths) is…',options:['Dm7 – G7 – Cmaj7','D7 – G7 – C7','Dm7 – Gm7 – Cmaj7'],answer:'Dm7 – G7 – Cmaj7'},
]},

{ id:'u7', name:'Harmony',
  guide:`<b>Roman numerals, cadences &amp; modulation</b>
   <ul><li><b>Scale-tone chords (major):</b> I ii iii IV V vi vii° (upper = major, lower = minor, ° = dim). In C: C Dm Em F G Am B°.</li>
   <li><b>Cadences:</b> perfect V–I (full stop), plagal IV–I (Amen), imperfect any–V (comma), interrupted V–vi (surprise).</li>
   <li><b>Common progressions:</b> ii–V–I (jazz), I–IV–V (primary), I–V–vi–IV (pop), vi–ii–V–I.</li>
   <li><b>Modulation</b> = changing key, most often to the dominant or relative. A persistent new accidental signals it.</li></ul>`,
  qs:[
  {t:'match',prompt:'Match each scale-tone chord to its quality (major key).',pairs:[['I','major'],['ii','minor'],['IV','major'],['V','major'],['vii°','diminished']]},
  {t:'choice',prompt:'In C major, chord vi is…',options:['A minor','A major','F major'],answer:'A minor'},
  {t:'choice',prompt:'In G major, chord IV is…',options:['C major','D major','E minor'],answer:'C major'},
  {t:'choice',prompt:'In a minor key, chord V is made major by raising the…',options:['3rd','leading note (7th)','5th'],answer:'leading note (7th)'},
  {t:'match',prompt:'Match each cadence to its chords.',pairs:[['Perfect','V – I'],['Plagal','IV – I'],['Imperfect','any – V'],['Interrupted','V – vi']]},
  {t:'choice',prompt:'A V–vi cadence is called…',options:['perfect','plagal','interrupted'],answer:'interrupted'},
  {t:'choice',prompt:'A perfect cadence in G major is…',options:['D – G','G – C','C – G'],answer:'D – G'},
  {t:'choice',prompt:'The progression C – G – Am – F in C major is…',options:['I – V – vi – IV','I – IV – V – I','ii – V – I'],answer:'I – V – vi – IV'},
  {t:'choice',prompt:'Analyse Am – Dm – G – C in C major:',options:['vi – ii – V – I','I – IV – V – vi','vi – IV – V – I'],answer:'vi – ii – V – I'},
  {t:'choice',prompt:'Modulation means…',options:['changing key within a piece','changing tempo','changing dynamics'],answer:'changing key within a piece'},
  {t:'choice',prompt:'The most common modulation is to the…',options:['dominant (up a 5th)','tritone','minor 2nd'],answer:'dominant (up a 5th)'},
  {t:'choice',prompt:'A piece in C major that introduces a persistent F♯ has most likely modulated to…',options:['G major','F major','D minor'],answer:'G major'},
]},

{ id:'u8', name:'Transposition',
  guide:`<b>Transposition</b>
   <ol><li><b>Octave:</b> move every note the same octave — letter names and key signature stay the same, only the register changes.</li>
   <li><b>Transposing instruments</b> sound a fixed interval from the written note. To write a part from a concert melody, move <b>up</b> by the interval the instrument sounds <b>down</b>.</li>
   <li><b>B♭</b> (trumpet, clarinet, tenor sax): sounds a M2 lower → write up a M2. <b>E♭</b> (alto/bari sax): sounds a M6 lower → write up a M6. <b>F</b> (horn): sounds a P5 lower → write up a P5.</li>
   <li>Change the key signature to match, and transpose accidentals too.</li></ol>`,
  qs:[
  {t:'notate',prompt:'Transpose up one octave: C, E, G',sub:'Same letters, one octave higher. First note given (C5).',clef:'treble',given:1,notes:[['C',5,''],['E',5,''],['G',5,'']]},
  {t:'notate',prompt:'Transpose up one octave: D, F, A',sub:'Bass clef, one octave higher. First note given (D3).',clef:'bass',given:1,notes:[['D',3,''],['F',3,''],['A',3,'']]},
  {t:'choice',prompt:'Moving a melody up an octave changes the register but keeps the same…',options:['letter names and key signature','clef','tempo'],answer:'letter names and key signature'},
  {t:'choice',prompt:'A B♭ instrument sounds how far from the written note?',options:['a major 2nd lower','a major 2nd higher','a perfect 5th lower'],answer:'a major 2nd lower'},
  {t:'choice',prompt:'A B♭ trumpet plays a written C. The concert pitch is…',options:['C','B♭','D'],answer:'B♭'},
  {t:'choice',prompt:'To write a part for B♭ clarinet from a concert melody, transpose…',options:['up a major 2nd','down a major 2nd','up a perfect 5th'],answer:'up a major 2nd'},
  {t:'choice',prompt:'An E♭ alto sax sounds how far below the written note?',options:['a major 2nd','a perfect 5th','a major 6th'],answer:'a major 6th'},
  {t:'choice',prompt:'A French horn in F sounds…',options:['a perfect 4th lower','a perfect 5th lower','a major 6th lower'],answer:'a perfect 5th lower'},
  {t:'choice',prompt:'To make a B♭ clarinet sound concert D, you write…',options:['C','D','E'],answer:'E',why:'Up a major 2nd from D is E.'},
]},

{ id:'u9', name:'Expression',
  guide:`<b>Dynamics, articulation, ornaments &amp; terms</b>
   <ul><li><b>Dynamics:</b> pp p mp mf f ff; cresc. (&lt;) louder, dim./decresc. (&gt;) softer; sfz sudden accent; fp loud then soft.</li>
   <li><b>Articulation:</b> staccato (short), legato (smooth), accent (&gt;), tenuto (held), marcato (^, strongly accented).</li>
   <li><b>Ornaments:</b> trill (alternate with the note above), mordent (quick upper/lower neighbour), turn (above–note–below–note), acciaccatura (crushed grace note), glissando (slide).</li>
   <li><b>Navigation:</b> D.C. (from the start), D.S. (from the sign), al Coda/Fine, fermata (pause).</li></ul>`,
  qs:[
  {t:'match',prompt:'Match each dynamic to its meaning.',pairs:[['pp','very soft'],['mp','medium soft'],['mf','medium loud'],['ff','very loud'],['sfz','sudden strong accent']]},
  {t:'choice',prompt:'fp means…',options:['loud then immediately soft','soft then loud','very fast'],answer:'loud then immediately soft'},
  {t:'match',prompt:'Match each articulation to its meaning.',pairs:[['staccato','short, detached'],['legato','smooth, connected'],['tenuto','held for full value'],['marcato','strongly accented']]},
  {t:'choice',prompt:'A dot above a note means…',options:['staccato','accent','tenuto'],answer:'staccato'},
  {t:'match',prompt:'Match each ornament to its meaning.',pairs:[['Trill','rapid alternation with the note above'],['Turn','above, note, below, note'],['Acciaccatura','crushed grace note before the beat'],['Glissando','a slide between pitches']]},
  {t:'choice',prompt:'An appoggiatura differs from an acciaccatura because it…',options:['takes time from the main note','is played after the beat','is always staccato'],answer:'takes time from the main note'},
  {t:'choice',prompt:'The term dolce means…',options:['sweetly','loudly','detached'],answer:'sweetly'},
  {t:'choice',prompt:'The term cantabile means…',options:['in a singing style','very fast','with pedal'],answer:'in a singing style'},
  {t:'match',prompt:'Match each navigation sign to its meaning.',pairs:[['D.C.','go back to the beginning'],['D.S.','go back to the sign'],['Fine','the end'],['Fermata','pause / hold the note']]},
  {t:'choice',prompt:'D.S. al Coda means…',options:['back to the sign, then jump to the Coda','back to the start, then stop','repeat the whole piece'],answer:'back to the sign, then jump to the Coda'},
  {t:'choice',prompt:'A jazz slide up into a note is a…',options:['scoop','fall','ghost note'],answer:'scoop'},
]},

{ id:'u10', name:'Form & Devices',
  guide:`<b>Form, devices &amp; texture</b>
   <ul><li><b>Forms:</b> binary AB, ternary ABA, rondo ABACA, AABA (32-bar song), strophic, through-composed, theme &amp; variations, sonata form (exposition–development–recapitulation), 12-bar blues.</li>
   <li><b>Devices:</b> ostinato/riff (repeated pattern), pedal (sustained bass under changing harmony), sequence (repeated higher/lower), imitation, canon, augmentation/diminution, inversion, call &amp; response.</li>
   <li><b>Texture:</b> monophonic (one line), homophonic (melody + chords), polyphonic (independent lines), heterophonic (one melody with simultaneous variants).</li></ul>`,
  qs:[
  {t:'match',prompt:'Match each form to its structure.',pairs:[['Binary','AB'],['Ternary','ABA'],['Rondo','ABACA'],['AABA','32-bar song form']]},
  {t:'choice',prompt:'The three sections of sonata form are exposition, development and…',options:['recapitulation','coda','bridge'],answer:'recapitulation'},
  {t:'choice',prompt:'A song that uses the same music for every verse is…',options:['strophic','through-composed','rondo'],answer:'strophic'},
  {t:'choice',prompt:'Most pop and rock songs use which form?',options:['verse–chorus','sonata','rondo'],answer:'verse–chorus'},
  {t:'match',prompt:'Match each device to its meaning.',pairs:[['Ostinato','a repeated pattern'],['Pedal','a sustained note under changing harmony'],['Sequence','a pattern repeated higher or lower'],['Canon','strict imitation throughout (a round)']]},
  {t:'choice',prompt:'Lengthening the note values of a theme is…',options:['augmentation','diminution','inversion'],answer:'augmentation'},
  {t:'choice',prompt:'Turning a melody upside-down is…',options:['inversion','retrograde','sequence'],answer:'inversion'},
  {t:'match',prompt:'Match each texture to its meaning.',pairs:[['Monophonic','a single line, no accompaniment'],['Homophonic','melody with chordal accompaniment'],['Polyphonic','two or more independent lines'],['Heterophonic','one melody with simultaneous variations']]},
  {t:'choice',prompt:'A fugue with several independent lines is…',options:['monophonic','homophonic','polyphonic'],answer:'polyphonic'},
  {t:'choice',prompt:'A singer accompanied by guitar chords is…',options:['monophonic','homophonic','polyphonic'],answer:'homophonic'},
]},
];
