import React, { Component } from 'react'
import { Button, Text, View, FlatList } from 'react-native'
import firebase from 'firebase'
import { get } from 'react-native/Libraries/Utilities/PixelRatio'

export default class WordList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: null,
            hasWords: false,
            wordMap: [],
            grade: null
        }

        this.getInfo = this.getInfo.bind(this)
    }


    getInfo() {   
        firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
            .then((user) => {
                if (user.exists) {
                    data = user.data().grade
                    console.log(data)
                    this.setState({ grade: data })
                    console.log(this.state.grade)
                
                }
                else { 
                }
            })
        wordList = {
                1: [["annoy attention calm investigate protect".split(" ")],["comfortable invite proud consequences important".split(" ")],["question curious jealous reminds curve".split(" ")]],
                2: [["amaze energy non-living amusing enormous".split(" ")],["noticed analyze escape observed annoy".split(" ")],["estimate opinion arranged exercise peeking".split(" ")],["avoid expect plan cause famous poke classify".split(" ")]],
                3: [["additional event region agreeable exame".split(" ")],["repair argue example ridiculous arrange".split(" ")],["experience scar assist fatal scatter".split(" ")],["attract flexible shiver careless furious".split(" ")],["signal cause gathered similar climate".split(" ")],["gist slumber coast infer solution compare".split(" ")]],
                4: [["accomplish essential reason adapttation estimate".split(" ")],["recognize approached evidence recommend argued".split(" ")],["example represent automatically except result".split(" ")],["avoid exclaimed select calculate flexible".split(" ")],["seperate cause fortunate simplify circular".split(" ")],["furious surround concluding increasing support".split(" ")]],
                5: [["abloish escalate influence accomplish establish".split(" ")],["investigate accurate evaluate navigate announce".split(" ")],["evidence opposed axious exhaust ordinary".split(" ")],["approach expansion passage approval expectation".split(" ")],["persuade approximate explain primary argument".split(" ")],["express recently avoid extend reference".split(" ")],["briskly familiar review cease frequent".split(" ")],["revolt claim gigantic scarce".split(" ")]],
                6: [["adjacent dimension obedient accumulate drastic".split(" ")],["oblivious adapt elaborate origin adequate".split(" ")],["encourage peculiar analyze equation persuade".split(" ")],["anticipate evaluate prediction artifact exhaust".split(" ")],["quote benefit expression realisitic calculate".split(" ")],["extend recount catastrophe extend recount".split(" ")],["chronological factor repetition citizen ferocious".split(" ")],["retrieve civilization requent frequency compose".split(" ")],["genuine solution".split(" ")]],
                7: [["abdicate connotation legendary abrasive consecutive".split(" ")],["liason abruptly irrelevant livel acknowledge".split(" ")],["consult ludicrous acquirer contrast mandatory".split(" ")],["addict copious mitigate adequate correspond".split(" ")],["naive admonish dawdle narrate affiliation".split(" ")],["deceitful necessity agitate demeanor negligent allege".split(" ")]],
                8: [["absolve escalate mediate alleviate evaluate".split(" ")],["mortify alternative exacerbate niche ambivalent".split(" ")],["excerpt obscure analyze exemplify obsolete".split(" ")],["animosity explicit pacify approximate exposition".split(" ")],["perception arbitrary falter perspective atrribute".split(" ")]]
        
        }

        function _getWordList(wordList, grade, set) {
            var word_set = wordList[grade][set]

            
        }
               
        for ( let i = 0; i < _wordList.length ; i++) {
            fetch(`https:api.dictionaryapi.dev/api/v2/entries/en_US/${_wordList[i]}`)
                .then((result) => {
                    var meaningsResult = result[0]["meanings"]

                    _finalList.push({ word: _wordList[i], meaning: meaningsResult})

                    this.setState({ hasWords: true})
                })
                .catch((err) => {
                    console.error(err)
                })
        }

            
    }

    renderItem({ item }) {
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

    render() {

        const {message } = this.state
        
        return (
            <View>
                <View style={{ padding: 20}}></View>
                <Button onPress={this.getInfo()} title="Get Info" />
                {this.state.hasWords & <FlatList data={this.state.wordMap} renderItem={this.renderItem}/>}
            </View>
        )
    }
}
