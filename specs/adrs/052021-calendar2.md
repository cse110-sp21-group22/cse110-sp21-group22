# Calendar Page Features

* Status:
* Date: 05-20-2021

Technical Story: Final decision on calendar functionality

## Context and Problem Statement

We need to reach a decision on how the calendar will work in tandem with the daily log entries. Looking back from the previous calendar ADR & redo some decisions from it.

## Decision Drivers

* Implementaion

## Considered Options

1. No calendar, replace it with:
   1. Using the input from countdown to create a list of tasks.
   2. Let the user create a countdown for some specific task

2. Keep the calendar
   1. Read-only or editable
   2. Information that it will hold?
   3. How to use API calendar

## Decision Outcome

We choose the option 1.2 first, letting the user to create their own countdown events. We will try to figure out the calendar after we finish with the basic functionality of the daily log.

### Positive Consequences

* We already have the functionality for the general countdown graphic
* Allows for much greater organization of tasks and scheduling for the user.
* For option 2: Provides the user with different level of task management.

### Negative Consequences

* Dedicates an entire page of our website that the user may not even chose to utilize.
* We may need to explain this feature to the user for them to be able to use it properly.
