import { SquarePipe } from "./square.pipe"

describe("square pipe:",()=>{

    let pipe= new SquarePipe()

    it("should retrun Square number that passing ",()=>{
        // arrage
       

        expect(pipe.transform(5)).toBe(25);
    })
    it("should retrun error when passing not number ",()=>{
        // arrage
       

        // expect(pipe.transform("t")).toBeNaN;
        expect(pipe.transform("t")).toBe("Not a number");
    })
})