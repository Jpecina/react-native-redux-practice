import React, { Component } from "react";
import { CardSection } from "./Common";
import { connect } from "react-redux";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import * as actions from "../actions";

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
// const mapStateToProps = state => {
//   return {};
// };

export default connect(null, actions)(ListItem);
