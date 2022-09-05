describe('a rain element has its velocity and acceleration', () => {
    it('a rain element has move method', () => {
        const rainElement = new RainElementBuilder()
            .setVelocity(0)
            .setAcceleration(1)
            .build();
        
        rainElement.move(6);
        expect(rainElement.getVelocity()).toEqual(18);
        expect(rainElement.getPosition().y).toEqual(-36);
    });
});

describe('a rain element has its color', () => {
    it('a rain element'+"'"+'s color is #36afff', () => {
        const rainElement = new RainElementBuilder()
            .build();
        
        expect(rainElement.color).toEqual({
            red: 54,
            green: 175,
            blue: 255,
            alpha: 100
        });
    })
});
