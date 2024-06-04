import React from "react";
import { TabStyles } from "./ChooseHeroStyles"
import data from "./data.json";
import {imageLoader} from "../../helpers/utils";

type TP = {
    choose: string
    onChange: (type: string)=> void
}

export const ChooseHeroTabs: React.FC<TP> = ({ choose, onChange }) => {
    return (
        <TabStyles>
            {data.characters.map((hero: any) => (
              <li key={hero.id}>
                  <button
                      onClick={()=> onChange(hero.heroCall)}
                      className={choose === hero.heroCall ? "is-active": ""}
                  >
                      <span className="tab-img">
                        <img src={imageLoader(hero.image)} alt=""/>
                      </span>
                      <span className="tab-name">{hero.name}</span>
                  </button>
              </li>
            ))}
        </TabStyles>
    )
}
