function Word({ item }) {
    return (
            <View>
                <Text style={{ fontWeight: 'bold' }}> {item.word}</Text>
                <View style={{ borderWidth: 0.5, borderColor:'black', margin:10}} />
                <View>
                    {item.meaning.map((itemValue) => (
                     <View>  
                       <Text> Part of speech: {itemValue["partOfSpeech"]} </Text>
                        <Text>Defintions: </Text>
                        {item.meaning.definitions.map((definitionValue) => (
                            <Text>{definitionValue.definition}</Text>
                        ))} 
                    </View>
                    ))}
                </View>
            </View>
        )

}
function renderItem({ item }) {
    return (
        <View>
            <Text style={{ fontWeight: 'bold' }}> {item.word}</Text>
            <View style={{ borderWidth: 0.5, borderColor:'black', margin:10}} />
            <View>
                {item.meaning.map((itemValue) => (
                 <View>  
                   <Text> Part of speech: {itemValue["partOfSpeech"]} </Text>
                    <Text>Defintions: </Text>
                    {item.meaning.definitions.map((definitionValue) => (
                        <Text>{definitionValue.definition}</Text>
                    ))} 
                </View>
                ))}
            </View>
        </View>
    )
}

function _getWordList(wordList, grade, set) {
    var word_set = wordList[grade][set]
    console.log(` the word set is ${word_set}`)
    return word_set
}

function _parseWordList(_wordList){
    for ( let i = 0; i < _wordList.length ; i++) {
        fetch(`https:api.dictionaryapi.dev/api/v2/entries/en_US/${_wordList[i]}`)
            .then((result) => {

                console.log(`the word list is ${_wordList}`)
                console.log(`the result is ${result}`)
                
               var meaningsResult = result[0]["meanings"]

               console.log(` meanings result is ${meaningsResult}`)

              _finalList.push({ word: _wordList[i], meaning: meaningsResult})

              console.log(` the final list is ${_finalList}`)

              return _finalList
            })
          .catch((err) => {
                console.error(`err is ${err}`)
          })
    }
}

  // word_set = this._getWordList(this.state.wordList, data.grade, data.set)

                       // console.log(`Word set is ${word_set}`)

                       // final_list = this._parseWordList(word_set)

                       // console.log(` the get info final list is ${final_list}`)

                       // this.setState({ wordMap: final_list })
                    
