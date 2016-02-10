'use strict'

import  React from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import DesktopContainer from 'app/components/desktop-container'

import Button from 'app/components/button'

import {fetchCategories} from 'app/actions/categories'

var {
  View,
  Text,
  ScrollView
} = React

class CategorySelector extends React.Component {
  renderCategory = (category) => {
    return (
      <View key={`category-${category.id}`}>
        <Button style={styles.categoryBtn}>
          <Text style={styles.categoryBtnText}>{category.name}</Text>
        </Button>
      </View>
    )
  };

  componentDidMount () {
    this.props.dispatch(fetchCategories())
  }

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <DesktopContainer maxWidth={600}>
          <Text style={[styles.heading, styles.brand]}>HelpFinder</Text>
          <Text style={styles.heading}>Please select a category:</Text>
          {this.props.categories.valueSeq().map(this.renderCategory)}
        </DesktopContainer>
      </ScrollView>
    )
  }
}

export default connect(state => {
  return {
    categories: state.getIn(['categories', 'categories'])
  }
})(CategorySelector);
