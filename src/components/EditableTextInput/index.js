import {Component} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  InputContainer,
  InputField,
  ParagraphText,
  Button,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    inputText: '',
    isSave: false,
  }

  onClickSaveEdit = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText, isSave} = this.state

    const saveOrEditText = isSave ? 'Edit' : 'Save'
    return (
      <MainContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isSave ? (
              <ParagraphText>{inputText}</ParagraphText>
            ) : (
              <InputField value={inputText} onChange={this.onChangeText} />
            )}

            <Button onClick={this.onClickSaveEdit}>{saveOrEditText}</Button>
          </InputContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}
export default EditableTextInput
