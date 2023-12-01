import React, { Component } from 'react';
import ProjectsMenu from "./projectsMenu";
import Social from '../social/Social';

export default class Projects extends Component {
  render() {
    return <>
        <ProjectsMenu />
        <Social />
    </>
    
  }
}
