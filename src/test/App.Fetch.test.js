import Forecast from 'c:/Users/JL/Documents/Task2/To-do/src/weatherApi';

test("this returns cape town weather", async () => {
    const data = await Forecast();
    expect(data).toBe(15.1)
});