# Services 

   A Service is a class that contains reusable callable logic and data
   that can be shared by mulitiple components

   usually a service is Singleton

   And that too not created by programmer it is injected by the angular framework
   using Dependency Injection [Constructor Injection]


### Directives

Directives are custom Tags(elements) and attributes that we
create in angular

There are three kinds of Directives in Angular
    
      *  Component Directive
      *  Structural Directive
      *  Attribute Directive

Every Component is a custom element - Component Directive

* Structural Directive

     Structural Directives will generate template [html]
     hides Template/ unhides template
    
     For all the structural directives we must prefix them with *

     ex: ngIf,ngSwitch,ngFor....


* Attribute Directives

     Attribute Directives  impacts the behavior of target elements

      behavior- css Change or data change

     attribute directives are further classified in three types
      
      * input Directives
      * output Directives
      * Input output Directives

  * input Directives
                Input directive receives input from the value part of the
                expression

                Input Directives are enclosed with []

                They change the behavior of the target element

                Examples: ngStyle, style, ngClass,routerLink.....

        <h1 [style.color]="bcolor"></h1>
        <h1 [style.color]="'green'"></h1> //here green is value
        <div [ngClass]="sample"></h1> //sample is a variable
        <div ngClass="sample"></div> //sample is a value



           here style.color is input directive
           bcolor is not the value, but bcolor is variable
           that is defined in the component class

* Output Directives
 
    Output Directives are event listeners and emits events when occurs
    
    They are enclose in ()

    They call the functions that is mentioned in value

    All Html events gets handled in Angular using output directives

    ex: click, hover, change, mouseover, mouseclick, keyup, keydown

    <button (click)="handle()"></button>

    Here click is output directive
      handle is the function that it will call on occurance of click event

Input Output Directive

  This directives work two way

  It receives input from the right at the same time
  it also stores values to the variable in the right 
  if any event occures

 It hast to be enclosed within [()]

  example : ngModel

  <input type="text" [(ngModel)]="city">

  let city="Mumbai"

  initially the text box will get filled with Mumbai

  suppose if erase and type Chennai, the city variable will be updated to Chennai