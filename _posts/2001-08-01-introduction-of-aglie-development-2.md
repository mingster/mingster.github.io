---
layout: post
title: Introduction of Aglie Development
date: 2001-08-01 23:24:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- dev
- dev enviornment
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: Ming Tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '2199915388038761115'
author: mingster
---
<p><span style="font-weight:bold;font-size:100%;"><span style="font-family:trebuchet ms;">Introduction</span></span><br />I want to provide thorough information for the everyday coder - without the "I want to sell you something so I have to look extra smart" obfuscation layer. These are my personal views, acquired by analyzing my own development "challenges", browsing the web, discussing it at CP and elsewhere, and trying it myself. It won't be a "brief introduction", so here's an overview in case you want to skip something:<span style="font-family:trebuchet ms;font-size:100%;"></p>
<ul>
<li><span style="font-size:0;">Where do we come from - two scenarios you might find yourself in<br /></span></li>
<li><span style="font-size:0;">Agile Programming - introduction to "new old" principles<br /></span></li>
<li><span style="font-size:0;">Refactoring Techniques - simple techniques, and an advanced real-life example<br /></span></li>
<li><span style="font-size:0;">Selling to your Boss - how to convince your company<br /></span></li>
<li><span style="font-size:0;">Limits of the Agile process - Where Agile Techniques are not applicable<br /></span></li>
<li>
<div><span style="font-size:0;">Appendix</span></div>
</li>
</ul>
<div style="font-weight:bold;">Where do we come from</div>
<p><strong>We all know this:</strong> Your project has a neat design you're really proud of. You did care for all eventualities that came up in the early design studies, the schedule is approved, there's even an extra week "padding for the unexpected" - and you are happy you can finally start coding. Two weeks into it, the first change requests arrive. Nothing special, just the usual "can we do this, too?" - "Yes, no big problem, we just need to plug an Carbunkulator into the Arglebargle".</p>
<p>Halfway through it, things look less shiny. A few more functionality tweaks, a few bugs, your best coder one week in the hospital - the schedule lags behind big time. Your boss returns from a talk with a client, after they played around with the first beta. It turns out they never really needed an arglebarge, it is just in the spec because their old system had a big one that was very expensive. What they really need is a big gonkulator, and it must be fast - much faster than now. Oh, and the one feature that gave you headaches while designing - you can scrap that: the only one guy who insisted on this feature (although no one understood why) moved on to greener pastures.</p>
<p>Whatever the reasons - the application ends up different from what it was envisioned. Chances are, it's a mess of crooks and shortcuts across a baroque, utterly inefficient infrastructure. You might even get afraid of touching it - 'cause a little change here breaks something there. Every time you try to fix some nasty behavior, you have to wad through tons of interdependent code, and every function, every class you see screams "rewrite me". Far from what you wanted.</p>
<p><strong>Interestingly</strong>, you can arrive at the same place by leaving out the formal design process altogether: You have an idea, a rough plan how you can make it, and start coding. It starts well, but after some time, it gets tricky: an important library refrains doing what you expect, some things didn't work out as you thought, you're forced to hold much more distributed state information than you can juggle in your head.</p>
<p>The whole thing turns out a bit fragile, and although it mostly does what you want it to, it's a pain to use. As much as it's brittle to the user, the code feels brittle to you, probably no one will be able or willing to continue working on it, you're reluctant to change anything yourself, because, once you start to weed out the crooks, you wish you had the strength to start over again.</p>
<p><strong>What went wrong?</strong> In the first scenario, the design (likely perfect for the initial requirements) did not live up to the changes that are inevitable in the course of a project. In the second, a reasonable design failed to evolve.</p>
<p>The solutions I discuss here are aimed at the course of the project, to help you avoid situations like this. Once you are stuck with a huge unmaintainable code base, it's much harder to stay on the success track (or get back on it again). At least, even when you feel you're stuck, many of the techniques here can help you not to give up on the way - neither economically nor stress-wise.</p>
<h1><span style="font-size:100%;">What is Agile Programming</span><br /></h1>
<p>AP is a collection of principles and techniques that try to overcome the inflexibility of the strictly-design-based development cycle. Three things make AP very powerful:</p>
<p>You are not required to model the entire development process after AP (of course you can). You can change project management slowly and incrementally, and you need to adopt only what really helps you.</p>
<p>The Agile process does not require extreme excellence at design or development - rather, it's aimed at the average team with some experience.</p>
<p>The techniques are simple, so simple that most old-timers consider them "common knowledge" - if only they were!</p>
<p>Here is what I understand as the core rules:</p>
<ul>
<li><span style="font-size:0;">Simple Design: use the simplest design that solves your immediate needs<br /></span></li>
<li><span style="font-size:0;">Design as you go: Always scrub and exercise the code you work on while the project develops, to make sure it remains well structured, designed and written. (Techniques for this are called Refactoring)<br /></span></li>
<li><span style="font-size:0;">Incremental steps: When changing or adding code, take the smallest step you can, then compile and test again.<br /></span></li>
<li><span style="font-size:0;">Independent steps: Don't mix up the things you do - when you fix a bug, fix the bug, when you add a feature, add the feature.<br /></span></li>
<li><span style="font-size:0;">Know and use your tools with purpose: Especially for tasks beyond writing code - like design and documentation, know the available tools, use those that help you (not just a single one), and always understand why you do what you do.<br /></span></li>
</ul>
<p>The Meta Rule: Use only the principles and techniques that actually work for you.</p>
<h2>Simple Design and Design as you go<br /></h2>
<p>I considers this the very heart of the AP approach - and the one with the biggest potential to change the development process.</p>
<p>Instead of planning ahead for all nooks and crannies, make sure "Version 0.1" works out well. Concentrate on your next task, and pick the most simple design that makes it possible. This does not mean forget about design! Design remains an important part of the entire process, and classic good/bad rules still apply. The additional rule is: make your next step happen, not the 10th. Don't go far out of your way for something you think you need later. When you really need it, new possibilities will have opened, and priorities sure will have changed.</p>
<p>To keep the design evolving with the project, you always need to pay attention to the code base. With only some primitive techniques and trust in your instincts, you can get along very well for most of the time - so you're less burdened when you have to face te real challenges. Exercising the part you're working on means: over time the "hot spots" of your application get most attention automatically.</p>
<p>Although individual things, like renaming variables, might appear silly as itself, the cumulative effect is impressive. It's wonderful when the feeling of understanding your code base kicks in - don't miss it!</p>
<p>The initial design will have a great impact on your project as well (although you typically end up more flexible than with a strict design based approach). But don't worry too much: Different designs can support the same product, a simple one will give you something to work with, and refactoring will make sure your design grows with the application.</p>
<p>If the analogy is allowed: Agile Modeling is replacing the intention of a "perfect creation" with an evolutionary process: Although 7 neck vertebras can't be the perfect design for both the mouse and the giraffe, it does it's job very well in both cases.</p>
<h3>Advantages<br /></h3>
<ul>
<li><span style="font-size:0;">You can react much more flexible to requirement changes and additions<br /></span></li>
<li><span style="font-size:0;">The overall design remain simple almost "by itself" - baroque arabesques are usually rooted out very early, before they grow big<br /></span></li>
<li><span style="font-size:0;">By scrubbing the code you're working on, the most important parts get most attention, and you don't invest extra time into changing what doesn't need to be changed.<br /></span></li>
<li><span style="font-size:0;">When cleaning up your code is technically part of the development process, you have much better chances to end up with a well commented and documented orthogonal readable code base<br /></span></li>
<li><span style="font-size:0;">You might be able to start coding earlier (although you won't necessarily be faster overall)<br /></span></li>
<li><span style="font-size:0;">You won't end up in the dead ends<br /></span></li>
<li>
<div><span style="font-size:0;">A good designer/developer can achieve the same with a "less agile" approach. But chances are, a wizard will get very close to the agile approach himself, if you let him do as he pleases. And for us non-wizards, we're all fallible to the stress and strains of development, and forget to follow idolized "good practice" in those dreaded one-nighters.<br /></span></div></p>
<h2>Incremental, independent Changes<br /></h2></p>
</li>
</ul>
<p>Incremental changes are the key to happiness, and the core idea of refactoring. However, I want to separate the principle from the techniques, that's why it gets it's own paragraph. To repeat the two rules:</p>
<p>Take the smallest step possible into the direction you want to go. Then compile and do a basic test that it's still working. And always do only one step - don't try sneak in a feature while you refactor - tempting as it may be.</p>
<p>For me, these rules still require some discipline, and a conscious effort. Sometimes it just seems easiest to scrap a class, and write it anew. Yet, when I get interrupted, it's much easier to say "five minutes" - and finish the search&amp;replace at hand; or jot down a quick note what I was doing. When I return to my desk, I can continue without looking back and forth where I left of, without the fear I forget something.</p>
<p><strong>Advantage</strong>: You always have working code you can deliver. Don't take this literally and skip QA - but in case of emergency (e.g. a bug at a customer site) you're much more ready to leave your current task in a working condition. In-house testing can get a new version anytime. You are quicker to react to new requirements: No more "I need to finish the Gonkulator rewrite before I can add this graphic feature that everybody suddenly seems to need urgently."</p>
<p>Also, your code passes much more often through the compiler, and a basic "does it work?" test - especially so if you do Automated Unit Testing. This gives a bit more confidence in complex code, and can be a real live saver.</p>
<p>There's one human reason behind this rule: Only a limited amount of state information is present in your mind (the often-mentioned "seven things"). Conscious splitting into steps with the least state information tries to saves you from a "short term memory overflow", which makes you forget things you wanted to do, and feel overwhelmed by the complexity of the code. And there is a Murphy reason: Every step you take will be a little bit more complex, have a few more dependencies and side effects than you expected. E.g. when rewriting two classes into one, a problem with header inclusion order can sidetrack you so far that you just forget to initialize an important variable again.</p>
<h2>Know your Tools, and know your reasons<br /></h2>
<p>Besides writing code, many things belong to the development process: Design, Documentation, QA...</p>
<p>The first question should be: Why do I do that? The importance of these artifacts is as well known as a rich number of techniques and methods for them, that all to often claim or at least suggest to be exclusive. But, to take an example: why do you actually document your code? Do you still want to understand your code in 6 month? Should a 3rd party be able to write plugins based on your API? Is it to inform co-workers of changes in the interface or implementation specifics? Is it because you plan to retire to the Bahamas, so the code base needs to be passed on to a still-to-be-hired guy? These are quite different goals, and for each of them, different techniques are appropriate.</p>
<p>In the example, documentation comes in many flavors. UML charts, formal code comments that can be extracted by a parser, inline comments, a separate Word file describing your intentions, Source Control change logs, etc. You are much better off when you understand and use more than one tool. Look out for new tools, and don't forget about unused features of the tools you have.</p>
<p><strong>Advantage</strong>: The time spent on non-coding tasks is used more effective, and doesn't feel wasted. Again: It's just to make you happy!</p>
<h1>Refactoring Techniques<br /></h1>
<p>Refactoring is nothing magic, refactoring is a fancy word for cleaning up the code. A more formal definition would be:</p>
<p style="margin-left:27pt;text-align:center;"><span style="color:navy;"><strong>Refactoring means continuously improving the design and appearance of your code base in small steps confined to surveyable areas.<br /></strong></span></p>
<p>All techniques are allowed that:</p>
<ul>
<li><span style="font-size:0;">improve code quality, readability, design<br /></span></li>
<li><span style="font-size:0;">are simple, or even "dumb" (such as automatic search-and-replace of a variable name)<br /></span></li>
<li><span style="font-size:0;">are small, and independent steps<br /></span></li>
</ul>
<p>Refactoring has two major uses: first, to keep an application well designed, to enable the "design as you go" principle. Second, instead of rewriting a larger module or class, you can refactor it into something much better. This requires much more discipline (controlling one's enthusiasm to make it better) than a rewrite, but is often the less risky yet more rewarding route.</p>
<p>I split the discussion in two parts - a formal list of basic techniques, and a real life example that contains suggestions for less automatable ones.</p>
<h2>Basic Refactoring Techniques<br /></h2>
<h3>Rename a variable / type / class / function<br /></h3>
<p>Every developer or team has it's coding standards - usually both formally defined and informal. Apply them to your code! If you have a function ReadData, and a complementary function DataWrite - rename one, so they are consistent. if you have a member that misses the m_ - prefix everyone else uses, spend the one or two minutes to change that. When you plan to change multiple identifiers, change only one at each step then compile and run. Use unique names - so when you forget to rename one place, the compiler catches it. (Oh, if the function is in an interface declaration shared by all modules of your 10-developer-project, ask your co-workers before you do!)</p>
<h3>Reformat a function to conform to your coding standards<br /></h3>
<p>We want readable code - make it so! All-nighters tend to produce interesting, almost-working code that's horrible to understand. We don't want to throw it away, so first apply some formal beatification to it, then look deeper.</p>
<h3>turn a code sequence into a function<br /></h3>
<p>If the complexity of a method increases beyond what makes you feel well, or if you notice that similar functionality is used at different places, make it a function.</p>
<h3>move functionality shared by multiple classes to a common base class (or helper class)<br /></h3>
<p>This can break down the complexity of a single class back to a reasonable level.</p>
<h3>Separate independent functionality into different classes / functions<br /></h3>
<p>The inverse of the above.</p>
<p>Notice a theme in c-e: We introduce a base class only when it seems necessary. Early design decisions are often intentionally immutable: because the design guru said it so, because it was the result of heated discussions, etc. In this course, the technical reason for a decision often gets lost, and with it: simplicity.</p>
<p>All these steps will take around 5 - 10 minutes - usually including "compile and test". You can take them anytime: when you're bored, while you're waiting for another project to compile, when you don't want to leave shortly before your boss. Whatever. Even taking one step will make your code base a little bit better, and you will have working code. They are easily undone (assuming you know to use your tools: editor, and source control)</p>
<p>While the decision what to do requires that you understand the structure of the code you're working on, executing it does not: they are simple search-and-replace or copy-and-paste tasks, and under VS.NET there are nifty tools available that can automate them safely.</p>
<p>Also, AP does not tell you how to design, only when. You still need to know what makes a good design, and find it yourself.</p>
<h2>Other Refactoring techniques - A real life example<br /></h2>
<p>When I plan to refactor a complex class or module, I start with the things mentioned above. This has two purposes: First, the code gets easier to read, more compact, and unnecessary arabesques are removed in these steps, so I have a much easier time later on. Second, I get fairly accustomed to the class again, refreshing my memory. I find out which members are hot spots, discover old comments telling me what I wanted to do, etc.</p>
<p>Only when I'm through with the basics, I begin the actual changes. Again, I try to take the smallest step that takes me closer to my goal and keeps the code working. Here you need to be more creative - the techniques are not that straightforward anymore, and you need to plan ahead. That's why I'll take a real example, to illustrate some possibilities.</p>
<p>Recently, I refactored a class implementation that simulated a map by two arrays: a data array holding the values, and a key array, holding the key for each value at the same index as the data array. To speed things up, I tried to store the values at their "native" position: e.g. the value for key 17 I would first try to insert into index 17. To look up a value, I checked the "native position", then I had to search the key array for the index where the key was stored, then retrieve the value from the same index in the data array. The whole thing looked like this:</p>
<p><span style="color:maroon;">if (keyArray.size() &gt; key &amp;&amp; keyArray[key] == key)<br /></span></p>
<p><span style="color:maroon;">// look up "native" position<br /></span></p>
<p><span style="color:maroon;">return dataArray[key];<br /></span></p>
<p><span style="color:maroon;">else {<br /></span></p>
<p><span style="color:maroon;">int index = FindKeyInKeyArray(key); // linear search! (ugh)<br /></span></p>
<p><span style="color:maroon;">if (index &gt;= 0)<br /></span></p>
<p><span style="color:maroon;">return dataArray[index];<br /></span></p>
<p><span style="color:maroon;">}<br /></span></p>
<p>(This atrocity to common sense grew from a quick side hack into a generic datakeeper class. I'm really ashamed of this - well, no more)</p>
<p>The first step were to rename the arrays (originally named data and map) to the ones above, so I wouldn't get a name clash later on - neither in the code, nor in my mind.</p>
<p>Ultimately, I would have to remove the <span style="color:maroon;">keyArray</span> index lookups completely, and replace the <span style="color:maroon;">dataArray</span> lookups. So I did a "Find in Files" for "keyArray[" and "dataArray[", just to see how often they were used. I was shocked - over 20 times each. I needed to break this down a bit further, before I "injected" the map.</p>
<p>So I moved some rarely used extra functionality that affected most functions to a derived class - due to the prior usage this wouldn't break any client code. While this moved no "hot spots" out of the class, the complexity of the hot spots itself was greatly reduced. Compile and run - still working. (Later I found I introduced a bug in this step, that even escaped my quickly written unit test. But due to the new cleaner code structure, it was found quickly).</p>
<p>The remaining lookup complexity, especially when inserting/changing values, was dominated by the "native position" handling - it probably didn't help much, and made everything ugly. I decided to remove this altogether. While the code would still work, performance might take a hit - this was a small risk I had to take. The worst thing that could happen would be rolling back to before this step (so I made a check-in at this point).</p>
<p>After removing the extra lookup, most of the hot spot functions did something similar to this:</p>
<p><span style="color:maroon;">int index = MapID(key); // lookup the key<br /></span></p>
<p><span style="color:maroon;">if (index &gt;= 0) { // when found...<br /></span></p>
<p><span style="color:maroon;">// do something to dataArray[index]<br /></span></p>
<p><span style="color:maroon;">}<br /></span></p>
<p><span style="color:maroon;">else { // when not found...<br /></span></p>
<p><span style="color:maroon;">// do something else<br /></span></p>
<p><span style="color:maroon;">}<br /></span></p>
<p>I figured, to replace this with a map, it wouldn't be a simple m_map[key] - the dataArray[index] was often used multiple times but I wanted the map lookup to happen only once, and I didn't need the operator[]'s feature to insert a new element silently. So I wrote a helper function, that contained all the functionality that I intended to change:</p>
<p><span style="color:maroon;">ValueType * GetValPtr(int key) {<br /></span></p>
<p><span style="color:maroon;">int index = MapID(key); // lookup the key<br /></span></p>
<p><span style="color:maroon;">if (index &gt;= 0) { // when found...<br /></span></p>
<p><span style="color:maroon;">return dataArray[index];<br /></span></p>
<p><span style="color:maroon;">else<br /></span></p>
<p><span style="color:maroon;">return NULL;<br /></span></p>
<p><span style="color:maroon;">}<br /></span></p>
<p>And started replacing the lookups by</p>
<p><span style="color:maroon;">ValueType * pVal = GetValPtr(key);<br /></span></p>
<p><span style="color:maroon;">if (pVal) { // when found...<br /></span></p>
<p><span style="color:maroon;">// do something to *pVal<br /></span></p>
<p><span style="color:maroon;">}<br /></span></p>
<p><span style="color:maroon;">else { // when not found...<br /></span></p>
<p><span style="color:maroon;">// do something else<br /></span></p>
<p><span style="color:maroon;">}<br /></span></p>
<p>Again, very simple replacements, especially since I had made sure before local variable and parameter names are consistent. I renamed dataArray and MapID() in the class declaration and the GetValPtr implementation, so the compiler caught all occurrences where I was still relying on them. I picked "pVal" as name for the new local variable, since this name was used nowhere in the class.</p>
<p>After this step, I had a sleek implementation of a horrible idea. Quite an improvement.</p>
<p>Everything worked fine, so I took the last step: introducing an std::map member into the class, commenting out the the dataArray and keyArray declaration, and replacing the GetValPtr implementation with a std::map.find call:</p>
<p><span style="color:maroon;">ValueType * GetValPtr(int key) {<br /></span></p>
<p><span style="color:maroon;">std::map::iterator it = m_map.find(key);<br /></span></p>
<p><span style="color:maroon;">if (it == m_map.end())<br /></span></p>
<p><span style="color:maroon;">return NULL;<br /></span></p>
<p><span style="color:maroon;">else<br /></span></p>
<p><span style="color:maroon;">return &amp;(it-&gt;second);<br /></span></p>
<p><span style="color:maroon;">}<br /></span></p>
<p>Of course, replacing the two arrays with a map had some other side effects, temporarily breaking the storage functions (that needed to iterate over all values), and turning the array allocation/cleanup functions into syntax errors. This was a single big step, I had no ideas how to break this down further (and maybe started to get a little bit impatient). But due to all the preparation, it took no more than 40 minutes to do the change, replace the keyArray iteration with an map iterator, and get the code compile and run again. The thing is working fine now, I felt very happy, and I sleep much better.</p>
<p>While scrubbing the code, I marked commented-out sequences with a special comment tag, so I could search for these places. Thus, removing all the dead code (that I left in initially for reference and rollback), was a matter of a minute or two.</p>
<p>Of course, a few things still could be done. There's still a naming inconsistency in the "insert new item" implementation, and the GetValPtr function could be removed altogether, replacing the ValueType * with anmap::iterator. But the task at hand was done, and a new task was waiting for the next day, so I left it at that.</p>
<p style="margin-left:21pt;">
<h2>Refactoring techniques used in the example<br /></h2></p>
<p>A short overview of the things I used:</p>
<ul>
<li><span style="font-size:0;">Move "hot spot" functionality to be changed to a helper function, that has a the same calling syntax for the old and the desired new implementation - so you separate syntactic changes at many places (that are semi-automatic and can be caught by the compiler) from functional changes (that need to be tested if they still do the same)<br /></span></li>
<li><span style="font-size:0;">Move functionality to be replaced "inline" to a temporary helper function that you can remove later<br /></span></li>
<li><span style="font-size:0;">Use "Find in files" to find occurrences of a certain construct in your project - so you find hot spots, and know if you can replace it in one step.<br /></span></li>
<li><span style="font-size:0;">Pick names that make the compiler catch mistakes, or places you forgot to change<br /></span></li>
<li>
<div><span style="font-size:0;">Use simple refactoring techniques, like generalizing variable names, until you feel you can handle the complexity of the trickier steps<br /></span></div></p>
<h2>Selling to your boss<br /></h2></p>
</li>
</ul>
<p>OK, since you didn't fall asleep yet, you'll probably pondering one question: How do you convince your boss that renaming variables is worth your pay?</p>
<ol>
<li>The best selling point is success.<br />Just try some of the techniques and ideas presented here on a small scale. In an ideal situation, they help you solve a tricky problem efficiently - maybe one that has been bugging your team for a time. Your boss might ask you "Nice! How did you do that?" Just mention that you "tried some new techniques you read about recently"...</li>
<li>Refactoring is a fancy word for cleaning up code.<br />There is a reason to use a fancy word: it sounds new, it sounds smart, and it makes you think about "usual things" from a different perspective. "Agile Programming" and Refactoring are buzzwords, chances are, your boss might already have heard something of this and wonder if he misses something.</li>
<li>Unless you have a very strict development process, Agile techniques can sneak in step-by-step. A key point of all Agile techniques is: only do what works for you. You don't have to revolutionize the entire development process. Start with "Incremental changes" for tasks assigned to you. If your tasks is to rewrite something, consider refactoring it instead. Try new tools, and unused features of existing tools, first for minor design and documentation tasks.</li>
<li>
<div>Remember the prime strength and original intent of Agile Programming: Additional flexibility towards requirement changes. Requirements do change over time. Clients can change their priorities at a large scale after trying the first beta. New features need to be added. 3rd party components (libraries, or OS components) change over time.</div>
<p style="margin-left:3pt;">
<h2>Limits of the Agile Process<br /></h2></p>
</li>
</ol>
<p>AP is not the holy grail either. There are some requirements that must be met to make it work:</p>
<ul>
<li><span style="font-size:0;">You need an open, friendly team<br />If you have to stand mind games among the coders, if communication is bad, or if your co-workers take changes to "their" code as personal insults, it won't work.<br /></span></li>
<li><span style="font-size:0;">You need some experience in the team<br />While you may not need a design ueberguru, you need a decent amount of real-live experience in your team. AP can stand a certain percentage of newbies, but if your 10-headed team consists of 9 freshmen and one experienced developer to guide them, you're probably better off with a more formal approach<br /></span></li>
<li><span style="font-size:0;">AP alone is not sufficient<br />You will need other techniques. Focusing solely on AP techniques, you can quickly loose the "big picture" of your application. bad thing - you still need to know what you do, how things interact etc. AP is one tool, to make some of these tasks easier.<br /></span></li>
<li><span style="font-size:0;">Refactoring won't change the construction plans<br />The basic structure of your code base can rarely be changed through refactoring. Usually, you can work towards something that might even look completely different, but uses the same basic mechanisms as the old code. If the implementation is good but the structure is wrong, a rewrite might be faster. Relying on AP alone might stall the large-scale changes that are necessary from time to time.<br /></span></li>
<li><span style="font-size:0;">AP doesn't tell you how to design<br />Although certain techniques became popular together with AP (designing around user stories, design patterns, etc.), there is no formal mechanism. As I said, old design principles still hold true, but some designs work better with AP than others.<br /></span></li>
</ul>
<p></p></p>
<ol style="margin-left:42pt;">
<li>
<div style="background:navy 0 50%;-moz-background-clip:-moz-initial;-moz-background-origin:-moz-initial;"><span style="font-size:0;"><strong>Appendix<br /></strong></span></div>
</li>
</ol>
<h2>Links<br /></h2>
<ol>
<li>Here on CP, Marc Cliftons Organic Programming Environment and Automation Application Layer are well worth reading if you're looking for design concepts. According to Marc, they go along very well with agile techniques. (Sorry to the CPians with valuable related articles - I'm just not aware of them. If you know a related article, why not leave a comment?)</li>
<li>The WIKI - An interesting "open database" mainly concerned with modern design and development techniques - a good starting point is WhatIsRefactoring</li>
<li>
<div>Agile Modeling - A very good web site, with much more information than I can (or want to) present here, well written and not too heady.</div>
<p style="margin-left:3pt;">
<h2>Why is Refactoring called Refactoring?<br /></h2></p>
</li>
</ol>
<p>Although there are different explanations, the one that feels most natural to me is this one: Refactoring stems from the mathematicians "desire" to reorganize a term like</p>
<p><span style="color:maroon;">F = xyz + 2xy -7xz + 3yz - 14x + 6y - 21z - 42<br /></span></p>
<p>into it's factors:</p>
<p><span style="color:maroon;">F = (x+3)*(y-7)*(z+2)<br /></span></p>
<p>While both are absolutely identical, the second one exposes it's inner structure and important information on one look. Also, there are parallels between the processes.</p>
<p></span></p>
