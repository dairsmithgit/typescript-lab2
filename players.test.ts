import { Player } from "./players";
import { TeamPlayer } from "./players";

describe("Player", () => {
    test("constructor set name & jersey", () => {
        let player: Player = new Player("Wayne", 10);
        expect(player.name).toBe("Wayne");
        expect(player.jersey).toBe(10);
    });
});

describe("TeamPlayer", () => {
    test("constructor set name, team & jersey", () => {
        let teamPlayer: TeamPlayer = new TeamPlayer("Daniel", 25, "Rockets");
        expect(teamPlayer.name).toBe("Daniel");
        expect(teamPlayer.jersey).toBe(25);
        expect(teamPlayer.team).toBe("Rockets");
    });

    test("constructor set name, team & jersey", () => {
        let teamPlayer: TeamPlayer = new TeamPlayer("Jose", 33, "Longhorns");
        let result: string = teamPlayer.describe();
        expect(result).toBe("Jose wears 33 and plays for the Longhorns");
    });
});