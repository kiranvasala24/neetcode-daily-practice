class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;    }
}
class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }
    

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;
        for (let char of word){
            if (!current.children[char]){
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.traverse(word);
        return node !== null && node.isEnd; 
    }
    traverse(word){
        let current = this.root;
        for (let char of word){
            if (!current.children[char]){
                return null;
            }
            current = current.children[char];
        }
        return current;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.traverse(prefix);
        return node !== null;
    }
}
