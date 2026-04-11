
class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;

        for (let char of word){
            if (!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.searchHelper(word, 0, this.root);
    }
    searchHelper(word, index, node){
        if (index === word.length){
            return node.isEndOfWord;
        }
        let char = word[index];
        if (char !== '.'){
            if (!node.children[char]){
                return false;
            }
            return this.searchHelper(word, index + 1, node.children[char]);
        }
        else{
            for (let key in node.children){
                if (this.searchHelper(word, index + 1, node.children[key])){
                    return true;
                }
            }  
        }
        return false
    }
}
