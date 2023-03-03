
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CounterComponentForLab } from "./counter.component";

describe('Counter Component for lab', () => {
  let fixture:ComponentFixture<CounterComponentForLab>,component:CounterComponentForLab
  // let component = new CounterComponentForLab();
  beforeEach((() => {
    // arrange
    TestBed.configureTestingModule({
        declarations:[CounterComponentForLab],
        schemas:[NO_ERRORS_SCHEMA]
    })
    fixture= TestBed.createComponent(CounterComponentForLab)
    component=fixture.componentInstance
    
  }));
  it("when click btn fires increse fun should the interpolation detect the change",()=>{
   
    let countPlus =  component.counter;
       
        let counttt = fixture.debugElement.query(By.css(".count")).nativeElement
        console.log(counttt)
 
    let btn = fixture.debugElement.queryAll(By.css("button"))[0]
    // act
    btn.triggerEventHandler("click")
    // assert
    fixture.detectChanges()
    console.log("counter",(typeof counttt.textContent),(counttt.textContent).toString())
    expect(component.counter).toBe(countPlus+1)
    let plus = countPlus+1;
    expect((counttt.textContent).toString()).toBe(`${countPlus+1}`);

  })
  it("when click btn fires decrease fun should the interpolation detect the change",()=>{
   
    let countPlus =  component.counter;
       
        let counttt = fixture.debugElement.query(By.css(".count")).nativeElement
      
 
    let btn = fixture.debugElement.queryAll(By.css("button"))[1]
    // act
    btn.triggerEventHandler("click")
    // assert
    fixture.detectChanges()
   
    expect(component.counter).toBe(countPlus-1)
    expect((counttt.textContent).toString()).toBe(`${countPlus-1}`);

  })
});
