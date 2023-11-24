import React from "react";

const CharacterBody = ({ value }) => {
  return (
    <div className="characterBody">
      <div className="grid-container">
        <div className="row">
            <h1>{value.Character_Name}</h1>
            <a href="/profiles">View All Character</a>
          <div className="col-4">
            <img className="avatar" src={value.Character_Image} alt={value.Character_Name} />
            <img className="avatar" src={value.Character_Image} alt={value.Character_Name} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2>Group 1: Character Attributes</h2>

            <p>
              <b>Nickname: </b>
              {value.Nickname}
            </p>
            <p>
              <b>Class_Names: </b>
              {value.Class_Names}
            </p>
            <p>
              <b>Headshot_Image: </b>
              {value.Headshot_Image}
            </p>
            <p>
              <b>Short_desc: </b>
              {value.Short_desc}
            </p>
            <p>
              <b>Colors: </b>
              {value.Colors}
            </p>
            <p>
              <b>Anti-colors: </b>
              {value.Anti_colors}
            </p>
            <p>
              <b>Codename: </b>
              {value.Codename}
            </p>
            <p>
              <b>Type: </b>
              {value.Type}
            </p>
            <p>
              <b>Fighting_Style: </b>
              {value.Fighting_Style}
            </p>
            <p>
              <b>Fighting_background: </b>
              {value.Fighting_background}
            </p>
            <p>
              <b>Faction: </b>
              {value.Faction}
            </p>
            <p>
              <b>Anti-Faction: </b>
              {value.Anti_Faction}
            </p>
          </div>
          <div className="col-6">
            <h2>Group 2: Powers and Abilities</h2>

            <p>
              <b>Pick_a_power: </b>
              {value.Pick_a_power}
            </p>
            <p>
              <b>Power_Starz: </b>
              {value.Power_Starz}
            </p>
            <p>
              <b>Power_Level_1: </b>
              {value.Power_Level_1}
            </p>
            <p>
              <b>Power_Level_2: </b>
              {value.Power_Level_2}
            </p>
            <p>
              <b>Power_Level_3: </b>
              {value.Power_Level_3}
            </p>
            <p>
              <b>Power_Level_4: </b>
              {value.Power_Level_4}
            </p>
            <p>
              <b>Power_Level_5: </b>
              {value.Power_Level_5}
            </p>
            <p>
              <b>Weaknesses: </b>
              {value.Weaknesses}
            </p>
            <p>
              <b>Mechanic: </b>
              {value.Mechanic}
            </p>
            <p>
              <b>Locamotion: </b>
              {value.Locamotion}
            </p>
            <p>
              <b>Balance: </b>
              {value.Balance}
            </p>
            <p>
              <b>Chin: </b>
              {value.Chin}
            </p>
            <p>
              <b>Agility: </b>
              {value.Agility}
            </p>
            <p>
              <b>Engineering: </b>
              {value.Engineering}
            </p>
            <p>
              <b>Precision: </b>
              {value.Precision}
            </p>
            <p>
              <b>Dexterity: </b>
              {value.Dexterity}
            </p>
            <p>
              <b>Intuition: </b>
              {value.Intuition}
            </p>
            <p>
              <b>Base_stats: </b>
              {value.Base_stats}
            </p>
            <p>
              <b>ATK: </b>
              {value.ATK}
            </p>
            <p>
              <b>SPD: </b>
              {value.SPD}
            </p>
            <p>
              <b>SCI-fi: </b>
              {value.SCI_fi}
            </p>
            <p>
              <b>DEF: </b>
              {value.DEF}
            </p>
            <p>
              <b>ENERGY: </b>
              {value.ENERGY}
            </p>
            <p>
              <b>ENhanded: </b>
              {value.ENhanded}
            </p>
            <p>
              <b>TECH: </b>
              {value.TECH}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2>Group 3: Missions and Locations</h2>

            <p>
              <b>Locations: </b>
              {value.Locations}
            </p>
            <p>
              <b>Class_missions_1: </b>
              {value.Class_missions_1}
            </p>
            <p>
              <b>Class_missions_2: </b>
              {value.Class_missions_2}
            </p>
            <p>
              <b>Group_Missions_1: </b>
              {value.Group_Missions_1}
            </p>
            <p>
              <b>Group_Missions_2: </b>
              {value.Group_Missions_2}
            </p>
            <p>
              <b>Group_Missions_3: </b>
              {value.Group_Missions_3}
            </p>
            <p>
              <b>Group_Missions_4: </b>
              {value.Group_Missions_4}
            </p>
            <p>
              <b>Group_Missions_5: </b>
              {value.Group_Missions_5}
            </p>
            <p>
              <b>Group_Missions_6: </b>
              {value.Group_Missions_6}
            </p>
            <p>
              <b>Group_Missions_7: </b>
              {value.Group_Missions_7}
            </p>
            <p>
              <b>Group_Missions_8: </b>
              {value.Group_Missions_8}
            </p>
            <p>
              <b>Group_Missions_9: </b>
              {value.Group_Missions_9}
            </p>
            <p>
              <b>Group_Missions_10: </b>
              {value.Group_Missions_10}
            </p>
            <p>
              <b>Unique_Missions_1: </b>
              {value.Unique_Missions_1}
            </p>
            <p>
              <b>Unique_Missions_2: </b>
              {value.Unique_Missions_2}
            </p>
            <p>
              <b>Area_of_Operations: </b>
              {value.Area_of_Operations}
            </p>
          </div>
          <div className="col-6">
            <h2>Group 4: Combat and Techniques</h2>

            <p>
              <b>Weapons: </b>
              {value.Weapons}
            </p>
            <p>
              <b>Weapon_Name: </b>
              {value.Weapon_Name}
            </p>
            <p>
              <b>Weapon_Type: </b>
              {value.Weapon_Type}
            </p>
            <p>
              <b>Weapon_B: </b>
              {value.Weapon_B}
            </p>
            <p>
              <b>Reference_Playstyle: </b>
              {value.Reference_Playstyle}
            </p>
            <p>
              <b>Weapon_playstyle: </b>
              {value.Weapon_playstyle}
            </p>
            <p>
              <b>Some_attacks: </b>
              {value.Some_attacks}
            </p>
            <p>
              <b>Attack_movement: </b>
              {value.Attack_movement}
            </p>
            <p>
              <b>Combat_Movement: </b>
              {value.Combat_Movement}
            </p>
            <p>
              <b>Reference_1: </b>
              {value.Reference_1}
            </p>
            <p>
              <b>Reference_2: </b>
              {value.Reference_2}
            </p>
            <p>
              <b>Reference_3: </b>
              {value.Reference_3}
            </p>
            <p>
              <b>Reference_4: </b>
              {value.Reference_4}
            </p>
            <p>
              <b>Reference_5: </b>
              {value.Reference_5}
            </p>
            <p>
              <b>Reference_6: </b>
              {value.Reference_6}
            </p>
            <p>
              <b>Reference_7: </b>
              {value.Reference_7}
            </p>
            <p>
              <b>Reference_8: </b>
              {value.Reference_8}
            </p>
            <p>
              <b>Reference_9: </b>
              {value.Reference_9}
            </p>
            <p>
              <b>Stat_tree: </b>
              {value.Stat_tree}
            </p>
            <p>
              <b>Skill_Tree: </b>
              {value.Skill_Tree}
            </p>
            <p>
              <b>Ultimate_Techniques_1: </b>
              {value.Ultimate_Techniques_1}
            </p>
            <p>
              <b>Ultimate_Techniques_2: </b>
              {value.Ultimate_Techniques_2}
            </p>
            <p>
              <b>Ultimate_Techniques_3: </b>
              {value.Ultimate_Techniques_3}
            </p>
            <p>
              <b>Ultimate_Techniques_4: </b>
              {value.Ultimate_Techniques_4}
            </p>
            <p>
              <b>Basic_Techniques_0: </b>
              {value.Basic_Techniques_0}
            </p>
            <p>
              <b>Basic_Techniques_1: </b>
              {value.Basic_Techniques_1}
            </p>
            <p>
              <b>Basic_Techniques_2: </b>
              {value.Basic_Techniques_2}
            </p>
            <p>
              <b>Basic_Techniques_3: </b>
              {value.Basic_Techniques_3}
            </p>
            <p>
              <b>Advanced_Grappling_0: </b>
              {value.Advanced_Grappling_0}
            </p>
            <p>
              <b>Advanced_Grappling_1: </b>
              {value.Advanced_Grappling_1}
            </p>
            <p>
              <b>Advanced_Grappling_2: </b>
              {value.Advanced_Grappling_2}
            </p>
            <p>
              <b>Advanced_Grappling_3: </b>
              {value.Advanced_Grappling_3}
            </p>
            <p>
              <b>Advanced_Grappling_4: </b>
              {value.Advanced_Grappling_4}
            </p>
            <p>
              <b>Advanced_Grappling_5: </b>
              {value.Advanced_Grappling_5}
            </p>
            <p>
              <b>Advanced_Grappling_6: </b>
              {value.Advanced_Grappling_6}
            </p>
            <p>
              <b>Advanced_Grappling_7: </b>
              {value.Advanced_Grappling_7}
            </p>
            <p>
              <b>Advanced_Grappling_8: </b>
              {value.Advanced_Grappling_8}
            </p>
            <p>
              <b>Advanced_Grappling_9: </b>
              {value.Advanced_Grappling_9}
            </p>
            <p>
              <b>Advanced_Grappling_10: </b>
              {value.Advanced_Grappling_10}
            </p>
            <p>
              <b>Advanced_Grappling_11: </b>
              {value.Advanced_Grappling_11}
            </p>
            <p>
              <b>Advanced_Grappling_12: </b>
              {value.Advanced_Grappling_12}
            </p>
            <p>
              <b>Advanced_Grappling_13: </b>
              {value.Advanced_Grappling_13}
            </p>
            <p>
              <b>Advanced_Grappling_14: </b>
              {value.Advanced_Grappling_14}
            </p>
            <p>
              <b>Reference_Attack_1: </b>
              {value.Reference_Attack_1}
            </p>
            <p>
              <b>Reference_Attack_2: </b>
              {value.Reference_Attack_2}
            </p>
            <p>
              <b>Reference_Attack_3: </b>
              {value.Reference_Attack_3}
            </p>
            <p>
              <b>Reference_Attack_4: </b>
              {value.Reference_Attack_4}
            </p>
            <p>
              <b>Reference_Attack_5: </b>
              {value.Reference_Attack_5}
            </p>
            <p>
              <b>Reference_Attack_6: </b>
              {value.Reference_Attack_6}
            </p>
            <p>
              <b>Reference_Attack_7: </b>
              {value.Reference_Attack_7}
            </p>
            <p>
              <b>Reference_Attack_8: </b>
              {value.Reference_Attack_8}
            </p>
            <p>
              <b>Reference_Attack_9: </b>
              {value.Reference_Attack_9}
            </p>
          </div>
        </div>
        <a href="/profiles">View All Character</a>

      </div>

      {/* 
            {Object.entries(value).map((ability, index) => (
               <p>
                    {ability}
                </p>
            ))    
            } */}
    </div>
  );
};

export default CharacterBody;
