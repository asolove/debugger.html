---
permalink: docs/updates
---

### Weekly Updates

#### [February 28th - Weekly Update](./updates-2-28-2017.md)

* :red_circle: Testing Improvements
* :ant: Lots of bug squashing

#### [March 7th - Weekly Update](./updates-3-7-2017.md)

* :mag: Function Search
* :waning_gibbous_moon: Dark Theme Polish

#### [March 14th - Weekly Update](./updates-3-14-2017.md)

* :smiling_imp: Jest
* :mag: File Search
* :eyes: Preview

#### [March 21st - Weekly Update](./updates-3-21-2017.md)

* :nail_care: Prettier
* :red_circle: Persisted Breakpoints

#### [March 28th - Weekly Update](./updates-3-28-2017.md)

* :mag: Function Search
* :traffic_light: Code Coverage

#### [April 4th - Weekly Update](./updates-4-4-2017.md)

* :black_medium_small_square: Blackboxing
* :kissing_heart: ES6
* :eyes: Preview
* :phone: client

#### [April 10th - Call Stack Plans](./call-stack-4-10-2017.md)

* :diamond_shape_with_a_dot_inside: Highlighting libraries
* :envelope: Simplifying Function Names
* :spaghetti: Collapsing Libarary frames
* :baby: Naming Library frames
* :black_medium_small_square: Blackboxing libraries

#### [April 11th](./updates-4-11-2017.md)

* :ant: Bucket Window Properties
* :eyes: Display popover intelligently
* :baby: Formatting Functions


### [April 18th](./updates-4-18-2017.md)

* :orange_book: Framework Frames
* :mag: Previewing Windows
* :ant: Component + Integration Tests

### [April 25th](./updates-4-25-2017.md)

* :corn: We started working on proper code folding
* :mag: landed support for getter values


### [May 2nd](./updates-5-2-2017.md)

* :bullettrain_front: Column Breakpoints
* :spaghetti: Framework Frames
* :speech_balloon: Watch Expressions
* :spaghetti: Copy Call Stack

### [May 9th](./updates-5-9-2017.md)

* [Adam][@asolove] dramatically improved our startup performance. [pr][pr-6]
* [Ryan][@ryanjduffy] completed the heroic and insane project of getting babel working with HTML inline JS. [pr][pr-23]
* [Diéssica][@diessica] jumped in and polished our Tabs UI
* We started converting our Prop Types to Flow Props. Thanks [Mateusz][@Andarist] and others for the help kicking this off!
* We added several new Jest component tests. Big thanks to [Andrei][@andreicristianpetcu] for tackling async component updates. It was not an easy task!
* We re-added storybook this week and wrote our first stories for Frames and Tabs! The stories are also being tested on CI with the great [percy.io](http://percy.io).

### [May 16th](./updates-5-16-2017.md)

Here are some highlights from the week:

* :yellow_heart: Function highlighting
* :police_car: License checking for our dependencies
* :nail_care: Lots of UI polish

### [When the World Stops](./when-the-world-stops.md)

One of the most interesting debugger questions is what happens when the debugger stops? This post is a quick run-through that will give you some context so that you can dig in and answer your own questions.

### [May 23rd](./updates-5-23-2017.md)

We focused this week on UI polish, bug fixing, and performance as we focus on getting ready for the June 15th Firefox 55 release.

* Intelligently place preview popups and tooltips
* Add an option for disabling Framework Frames
* Polish the search bar
* Speed up stepping performance

### [June 6th](./updates-6-6-2017.md)

This was a really great week for QA improvements as the debugger is getting more stable each week.

* We now disable out of scope lines when the debugger pauses.
* We have huge updates to preview - it's faster, more consistent, and works for HTML elements
* Breakpoints are kept in sync as code changes. Big thanks to [codehag][@codehag]
* We're chipping away at two new features: Outline View and Project Search

### [June 13th](./updates-6-13-2017.md)

We focused this week on getting lots of bugfixes and community prs in

* Nightly is up to date with the latest debugger updates
* new styling for the Outline View, big thanks to [@amelzer]
* searchbar had a lot of improvements
* lots of dependancies were updated, thanks to [@zaggy]
* further work on getting more frameworks included on our framework frames. Thanks to
  [@andreicristianpetcu]

### [June 20th](./updates-6-20-2017.md)
It's been a quieter week than last week. This weeks highlights include:

* new UI improvements to search (thankyou to [@ruturajv]!
* some new documentation
* WTR runner

### [July 11th](./updates-7-11-2017.md)
lots happened since the last update:

* Edge Cases: pretty print, symmetric breakpoints, …
* Performance: stepping, preview
* UI: New symbol modal, full project text search
* Experiments: Call Site Breakpoints, Async stepping

### Types and Tests Review

* [Flow Review](./5-1-2017-flow.md)
* [Tests Review](./5-1-2017-tests.md)

### [July 25th](./updates-7-25-2017.md)

* lots of polish as we prepare for releasing in 56
* breakpoints are more stable
* project text search is getting closer
* wasm support is coming to the debugger

[@asolove]:http://github.com/asolove
[@ryanjduffy]:http://github.com/ryanjduffy
[@diessica]:http://github.com/diessica
[@codehag]:http://github.com/codehag
[@andreicristianpetcu]:http://github.com/andreicristianpetcu
[@Andarist]:http://github.com/Andarist
[pr-6]:https://github.com/devtools-html/debugger.html/pull/2784
[pr-23]:https://github.com/devtools-html/debugger.html/pull/2810
[@zaggy]:http://github.com/zaggy
[@amelzer]:http://github.com/amelzer
[@ruturajv]:http://github.com/ruturajv
