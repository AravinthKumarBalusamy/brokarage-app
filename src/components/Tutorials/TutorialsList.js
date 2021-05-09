import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {sideBarData} from '../../constants/constants';

const TutorialsList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  console.log(sideBarData);

  useEffect(() => {
    // retrieveTutorials();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {
    
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    
  };

  const findByTitle = item =>  typeof item === 'object' ? findByTitle(item.levels) : item;
      
  return (
    <div className="list row">
      <div className="col-md-8">
        <h1>{sideBarData.beginner.heading}</h1>
        {
          sideBarData.intermediate.levels.map((item, index) => <p>
            {
              item.header.map((subItem, key) => <p>
                {
                  <p>{findByTitle(subItem)} </p>
                }
              </p>
              )
            }
          </p>)
        }
      </div>
    </div>
  );
};

export default TutorialsList;
