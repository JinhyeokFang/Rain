import RainElementBuilder from "../builders/rain-element-builder";

describe('a rain element has its velocity and acceleration', () => {
    it('a rain elemnent has velocity and acceleration properties', () => {
        const rainElement = new RainElementBuilder()
            .setVelocity(10)
            .setAcceleration(1)
            .build();
        
        expect(rainElement.getVelocity()).toEqual(10);
        expect(rainElement.getAcceleration()).toEqual(1);
    });
});
