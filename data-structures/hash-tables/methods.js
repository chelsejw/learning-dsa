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
        console.log(`Hash is ${total}`);
        return total;
    }

    set(key, val) {
        const hashedIdx = this._hash(key);
        const kvPair = [key, val];
        if (this.keyMap[hashedIdx]) {
            //If it is already a nested array
            if (this.keyMap[hashedIdx][0].constructor === Array) this.keyMap[hashedIdx].push(kvPair);

            //If it is not a nested array (should only happen during the first collision.)
            else {
                this.keyMap[hashedIdx] = [this.keyMap[hashedIdx], kvPair];
            }
        }
        else this.keyMap[hashedIdx] = kvPair;
        return this.keyMap[hashedIdx];
    }
}

const hashy = new HashTable(30);
hashy.set('name', 'chelsea')

hashy.set('age', 45)
console.log(hashy.keyMap);