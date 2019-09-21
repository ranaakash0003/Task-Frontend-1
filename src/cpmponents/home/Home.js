import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="card">
        <h2>Country</h2>
        <p>
          A country is a region that is identified as a distinct entity in
          political geography. A country may be an independent sovereign state
          or part of a larger state, as a non-sovereign or formerly sovereign
          political division, a physical territory with a government, or a
          geographic region associated with sets of previously independent or
          differently associated people with distinct political characteristics.
          Regardless of the physical geography, in the modern internationally
          accepted legal definition as defined by the League of Nations in 1937
          and reaffirmed by the United Nations in 1945, a resident of a country
          is subject to the independent exercise of legal jurisdiction. There is
          no hard and fast definition of what regions are countries and which
          are not. Countries can refer both to sovereign states and to other
          political entities, while other times it can refer only to states. For
          example, the CIA World Factbook uses the word in its "Country name"
          field to refer to "a wide variety of dependencies, areas of special
          sovereignty, uninhabited islands, and other entities in addition to
          the traditional countries or independent states"
        </p>
        <br/>
        <h2>Etymology and usage</h2>
        <p>
          The word country comes from Old French contrée, which derives from
          Vulgar Latin (terra) contrata ("(land) lying opposite"; "(land) spread
          before"), derived from contra ("against, opposite"). It most likely
          entered the English language after the Franco-Norman invasion during
          the 11th century. In English the word has increasingly become
          associated with political divisions, so that one sense, associated
          with the indefinite article – "a country" – through misuse and
          subsequent conflation is now a synonym for state, or a former
          sovereign state, in the sense of sovereign territory or "district,
          native land". Areas much smaller than a political state may be
          called by names such as the West Country in England, the Black Country
          (a heavily industrialized part of England), "Constable Country" (a
          part of East Anglia painted by John Constable), the "big country"
          (used in various contexts of the American West), "coal country" (used
          of parts of the US and elsewhere) and many other terms. The
          equivalent terms in French and other Romance languages (pays and
          variants) have not carried the process of being identified with
          political sovereign states as far as the English "country", instead
          derived from, pagus, which designated the territory controlled by a
          medieval count, a title originally granted by the Roman Church. In
          many European countries the words are used for sub-divisions of the
          national territory, as in the German Bundesländer, as well as a less
          formal term for a sovereign state. France has very many "pays" that
          are officially recognized at some level, and are either natural
          regions, like the Pays de Bray, or reflect old political or economic
          entities, like the Pays de la Loire. A version of "country" can be
          found in the modern French language as contrée, based on the word
          cuntrée in Old French, that is used similarly to the word "pays" to
          define non-state regions, but can also be used to describe a political
          state in some particular cases. The modern Italian contrada is a word
          with its meaning varying locally, but usually meaning a ward or
          similar small division of a town, or a village or hamlet in the
          countryside.
        </p>
      </div>
        <Link to="/countries">
          <button className="btn" type="button">
            Countries
          </button>
        </Link>
      
    </div>
  );
}
