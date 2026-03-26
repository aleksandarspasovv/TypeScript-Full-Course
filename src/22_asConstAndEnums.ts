let a = 1 as const //makes let == const

let nums = [1, 2, 3] as const //hardcodes nums[0] to 1

const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Expert'] as const
// as const at the end to make TS communicate with JS

type Person = {
    skilLevel: (typeof SKILL_LEVELS)[number]
}

SKILL_LEVELS.forEach(skill => {
    console.log(skill)
})

const bestPerson = {
    name: 'Maggie',
    age: 26,
    address: {
        planet: 'Saturn'
    }
}

