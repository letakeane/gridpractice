# Module 3 Curriculum Goals

## Focus & Goals

### Technical Skills Goals:

* Fundamental JavaScript
  - Should be reaching for Array Prototype methods (map, reduce, etc)
  - Should be comfortable destructuring objects, and assigning destructured
    objects to variables
* Asynchronous JavaScript
  - Should be able to resolve promises using both the .then(callback) syntax, as
    well as the newer async/await syntax
  - Should be able to create generic promises, and make use of .resolve/.reject
    for control flow
  - Should be cofortable creating/resolving arrays of promises using Promise.all
  - Should have a working understand of testing asynchronous code
  - Should be comfortable using jest.fn() to mock fetch
  - Should have a cursory understanding of manual mocks, and how they can assist
    in testing asynchronous code
* React
  - Breaking components into stateful and stateless pieces
  - Should be able to speak clearly about passing down props
  - Snapshot testing UI
  - Unit testing helper functions
* Redux
  - Should be comfortable creating pure action creators, and testing them
  - Should be comfortable creating pure reducers, and testing them
  - Should be comfortable creating pure mapStateToProps and mapDispatchToProps
    functions
  - Should be comfortable testing that mapStateToProps correctly maps the passed
    state object
  - Should be comfortable testing that mapDispatchToProps correctly calls passed
    dispatch function
* Vocabulary
  - Students should be able to explain asynchronous code using the correct
    terminology

### Professional Skills Goals:

* Students must have a polished resume, ready to send to prospective employers
* Students must have their Turing portfolio page updated with (at a minimum)
  their final Mod 3 project
* Students should be able to point to work they've done to push forward their
  career after Turing. This could vary substantially student to student, but may
  include: cold outreaches, coffee meetings with prospective employeers, mock
  interviews with mentors, networking at meetups, etc.
* [Mod 3 Professional
  Overview](https://github.com/turingschool/career-development-curriculum/tree/master/module_three)
* [Gear Up Overview](https://github.com/turingschool/gear-up)

## Role in Program

Mod 3 gives the students their first real taste of how real applications
are/will be built, and we explain to them at the outset that they are hirable
developers if they can master everything we go over in the module. Our goal is
to take their foundation of HTML/CSS/JavaScript, and put them in a position to
deploy scalable, well tested, front-end application.


## Expectations for Instructors

The module requires a healthy mix of code alongs, whiteboarding sessions, and
pairing. In the past, our students have told us that the lessons which involve
multiple instructors are the most effective, so being willing to co-teach is
very helpful. The first half of the Module is heavier on instruction, with at
least one lesson most days.

This can be a pretty stressful mod for the students, and instructors should keep
an eye out for any students that may be falling behind. In most cases, students
that are struggling are closer to success than they realize, and identifying
these students as early as possible in the module increases the chances they'll
ultimately be able to pass.


## Module Flow

Mod 3 is breaks fairly evenly into two halves, with the first 3 weeks being
more instructionally intensive, and the second three weeks being more devoted to
pairing with and coaching students individually during their final project. 

At the end of Mod 2, React is introduced, so we spend much of week one reviewing and
learing to test React applications. The week one project is Headcount, a group
project, which can be done as either a 2 or 3 person project.

In week two we layer on asynchronous concepts, introducing the students to the stack 
and the queue, and how Promises/fetch fit into this equation. We also spend some 
time discussing/coding how to test asynchronous code, which is always a struggle for 
the students. Ultimately some students will take to this more difficult testing
curriculum more easily than others. 

The week two project is SWAPIBox, which we have the students do as a solo
project. This tends to be pretty difficult for them, as it's their first
exposure to using asynchronous fetch's in their code. One thing to watch out for
here is nested fetches. Students have a tendency to build apps that load slowly
because they're making many fetch calls when calling a single function.

Week three adds Redux to the mix, and can be tough for the students. While Redux
is generally less technically challenging that learning some of the concepts
from the earlier weeks, the students will often struggle with underlying
patterns that are present in Redux, and won't always grasp the use case. It can
help to have use cases at the ready. Additionally, we go over how to test all of
the pieces in Redux effectively, which many students actually enjoy, as it's
much easier than testing the asynchronous code.

The week three project is movie tracker, which uses a movie database api, a
prebuilt postgres database, and Redux. This allows them to build an app that
pulls in recent movie data, create a minimal user authentication, save favorite
movies, and manage all of the data in a single source of truth.

In the second half of the module, we give the students large chunks of time to
work on their personal projects, with regular "client" check ins. In this case,
you as the instructor play the role of the client. Some students will want to
build project that require technologies we've only lightly touch on, or haven't
even discussed. This is usually acceptable (should be discussed with the
anchor), but does sometimes require helping the student to manage a sensible
list of deliverables so they ultimately build something they're happy with.

The few lessons that are in this second half only work to give the students 
a fuller understanding of the tools they are already using. 

## Links
* [Prework](https://github.com/turingschool/intermission-assignments/blob/master/prep-for-module-3-frontend.markdown)
* [Coursework]()
* [Coursework repo]()
