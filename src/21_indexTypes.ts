type Person = {
    name: string,
    skilllevel: 'Beginner' | 'Master' | 'Expert'
}

function printPersonSkilLevel(skilllevel: Person['skilllevel']){
    return skilllevel
}

type PeopleGroupedBySkillLevel = {
    [index in Person['skilllevel']]: Person[] //Iw ant to have any of the keys that match the specific keys
}

const a: PeopleGroupedBySkillLevel = {
    'Beginner': [{name: 'Maggie', skilllevel: "Beginner"}]
}

const array = [1, 2 , 3]

type ArrayType = (typeof array)[number]