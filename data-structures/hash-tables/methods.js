class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96;
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, val) {
        const hashedIdx = this._hash(key);
        const kvPair = [key, val];
        if (!this.keyMap[hashedIdx]) {
            this.keyMap[hashedIdx] = [];
        }
        this.keyMap[hashedIdx].push(kvPair)
        return this.keyMap[hashedIdx];
    }

    get(key) {
        const hashedIdx = this._hash(key);
        const hashVal = this.keyMap[hashedIdx];
        if (!hashVal) return undefined; // No value set yet
        for (let i=0; i < hashVal.length; i++) {
            if (hashVal[i][0]===key) return hashVal[i][1];
        }
    }

    values(){
        const values = []
        for (let i=0; i < this.keyMap.length; i++){
            if (this.keyMap[i]) {
                for (let j=0; j < this.keyMap[i].length; j++){
                    if (!values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1]);
                    }
                };
            }
        }
        return values;
    }

    keys(){
        const keys = [];    
        for (let i=0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j=0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }

        return keys
    }
}

const hashy = new HashTable();
hashy.set('name', 'chelsea')
hashy.set("frfrf", 45);

hashy.set('age', 45)
console.log(hashy.keyMap);
console.log(hashy.get("age"));
console.log(hashy.values())
console.log(hashy.keys());

