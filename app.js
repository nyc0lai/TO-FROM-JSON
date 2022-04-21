class Developer {
    constructor(name, experience, domains=[]) {
        this.name = name
        this.experience = experience
        this.domains = domains
    }

    get toJson() {
        return JSON.stringify(this)
    }

    fromJson() {
        return JSON.parse(this.toJson)
    }
}

let dev1 = new Developer('John Doe', 10, ['JS','CSS'])
console.log(dev1.toJson)
let dev1Restored = dev1.fromJson()
console.log(dev1Restored)