class Developer {
    constructor(name, experience, domains=[]) {
        this.name = name
        this.experience = experience
        this.domains = domains
    }

    toJson() {
        localStorage.setItem(this.name, JSON.stringify(this))
    }

    fromJson() {

        let obj = localStorage.getItem(this.name)
        //localStorage.clear('dev1')
        this.name = JSON.parse(obj).name
        this.experience = JSON.parse(obj).experience
        this.domains = JSON.parse(obj).domains
    }
}

let dev1 = new Developer('John Doe', 10, ['JS','CSS'])

dev1.toJson()
dev1.fromJson()

let dev2 = new Developer('Andree', 5, ['JS','CSS', 'Python'])
dev2.toJson()
dev2.fromJson()
