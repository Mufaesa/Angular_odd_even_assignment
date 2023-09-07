# Odd-Even assignment

## The Repo
This was an assignment as part of the Udemy Angular course by Maximilian Schwarzmüller.

The goal of this assignment was the following:

1. The GameControl Component should have buttons to start and stop the game

2. When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())

3. The event should be listenable from outside the component

4. When stopping the game, no more events should get emitted (clearInterval(ref))

5. A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)

6. Simply output Odd - NUMBER or Even - NUMBER in the two components

7. Style the element (e.g. paragraph) holding your output text

I have completed this succesfully.

## Challenges
First of all, the scope of "this" changes when you are using "setInterval()". Only 10 minutes in, this was already causing the first headaches. Luckily I found a solution for this quickly by using the arrow documentation for this:
```ts
this.counterInterval = setInterval(() => this.startCounter(), 1000);
```

My second problem lied with Inputs and Outputs. I had a tough time actually passing through the number from 1 component to the next. This seems like a very important basic skill to have for Angular so I spent a lot of time on this.

The final solution was not very spectacular since it is using the basic tools to accomplish this: Output in the child component -> adding the event + listener to the parent HTML file -> Input in the parent component.

The third challenge I walked into was displaying the correct number. In the course, Maximillan does show how to do this. Only he does this using TS objects instead of actual components. That's why this took some figuring out as well.

I eventually ended up using a fairly standard solution for this as well which goes as follows:
```html
<div class="col" *ngIf="oddNumbers.length > 0">
      <h4>Odd column</h4>
      <app-odd 
      *ngFor="let oddNumber of oddNumbers" 
      [oddNumber]="oddNumber">
      </app-odd>
    </div>
```
## Things I learned
* How to communicate between different components
* How to dynamically use/style/display different components
* Multi-layering of components
* New ways how 'this' interacts withing different environments
* Inputs and outputs
* Event emitters

