const routes = {
  "./": {
    linkLabel: "WITG",
    content: `<div class="what-is-gativus-second">
        <div class="second-gativus-view-title-container">
          <img
            class="second-gativus-view-icon"
            src="./img/2-lines-to-right.svg"
            alt=""
          />
          <h1 class="second-gativus-view-title">Gativus</h1>
          <img
            class="second-gativus-view-icon"
            src="./img/2-lines-to-left.svg"
            alt=""
          />
        </div>
        <h2 class="gativus-description">
          enviroment for research in a technical mind area
        </h2>
        <img src="./img/two-arrows-down.svg" alt="" />
        <div class="second-gativus-view-section">
          <div class="second-gativus-view-section-upper-part">
            <h2 class="second-gativus-view-section-first-title">
              The subject of the project
            </h2>
          </div>
          <div class="second-gativus-view-section-main-part">
            <div class="second-gativus-view-section-main-part-top">
              <!-- wtg = what is the gativus -->
              <div class="gtom wtg_view_item" id="GTOM">
                <div class="wtg_view_img_container wtg_gtom"></div>
                <div class="wtg_view_title">
                  <b>G</b>ativus <b>T</b>heory <b>O</b>f <b>M</b>ind -
                  <b>GTOM</b>
                </div>
                <div class="wtg_view_description">
                  A set of facts and conclusions used to explain phenomenon of
                  human conscience. From cellular level to the knowledge.
                </div>
              </div>
              <div class="gnet wtg_view_item" id="GANM">
                <div class="wtg_view_img_container wtg_gnet_spec"></div>
                <div class="wtg_view_title">
                  <b>G</b>ativus <b>N</b>etwork <b>M</b>odel <b>S</b>pecification - <b>GNMS</b>
                </div>
                <div class="wtg_view_description">
                  Specification of GNET, detailed requirements description, constructions and functionality.
                </div>
              </div>
              <div class="gate wtg_view_item" id="GATE">
                <div class="wtg_view_img_container wtg_gate"></div>
                <div class="wtg_view_title">
                  <b>GAT</b>ivus <b>E</b>dge - <b>GATE</b>
                </div>
                <div class="wtg_view_description">
                  Material piece of equipment, capable to host the GNET network
                  entities.
                </div>
              </div>
              <div class="gnet wtg_view_item" id="GNET">
                <div class="wtg_view_img_container wtg_gnet"></div>
                <div class="wtg_view_title">
                  <b>G</b>ativus <b>NET</b>work - <b>GNET</b>
                </div>
                <div class="wtg_view_description">
                  The Network of unified digital instances, which covers all
                  known layers, such as cellular, spike, learning and knowledge,
                  defined in GTOM.
                </div>
              </div>
            </div>
            <div class="second-gativus-view-section-main-part-bottom">
              <div class="wtg_view_purpose_item convergence">
                <div class="wtg_view_purpose_item_title_container">
                  <h2 class="wtg_view_purpose_item_title">Convergence</h2>
                  <img src="./img/convergence.png" height="40px" alt="" />
                </div>
                <hr color="#C0C0C0" />
                <p class="wtg_view_purpose_item_description">
                  GTOM’s describes as fact existence of cellular/spike networks
                  and knowledge graph/network in one organ – human brain.
                  However, current technical implementations provide only one or
                  a few layers with substantial gap between knowledge and
                  cellular/spike networks. Gativus aims to develop technical
                  machine wich will encourage community to research and find
                  connection between these layers, and eventually converge all
                  of the in the single unified network.
                </p>
              </div>
              <div class="wtg_view_purpose_item neuromorphic">
                <div class="wtg_view_purpose_item_title_container">
                  <h2 class="wtg_view_purpose_item_title">
                    Neuromorphic device
                  </h2>
                  <img src="./img/neuromorphic.png" height="40px" alt="" />
                </div>
                <hr color="#C0C0C0" />
                <p class="wtg_view_purpose_item_description">
                  The success of GPT and LLM is obvious, but it is not entirely
                  neuromorphic. It is more a mathematical model, substantially
                  reduced from real world, as we assume it. Gativus aims to
                  catch up with these achievements, and run as neuromorphic
                  network with much more similarity with biological one.
                </p>
              </div>
            </div>
          </div>
          <div class="second-gativus-view-section-bottom-part">
            <h2 class="second-gativus-view-section-second-title">The purpose</h2>
          </div>
        </div>
      </div>`,
  },
  "./gtom": {
    linkLabel: "GTOM",
    content: `<div class="gativus-page-container">
        <div class="second-gativus-view-title-container">
          <img
            class="second-gativus-view-icon"
            src="./img/2-lines-to-right.svg"
            alt=""
          />
          <h1 class="gativus-title-40px">Gativus Theory Of Mind</h1>
          <img
            class="second-gativus-view-icon"
            src="./img/2-lines-to-left.svg"
            alt=""
          />
        </div>
        <img src="./img/two-arrows-down.svg" alt="" />

        <div class="fit-content-gativus-network-card">
          <div class="gativus-network-card-title-container">
            <h2 class="gativus-network-card-title">
              <b>Gativus Theory of Mind</b> has a vision of artificial
              intelligence based on
              nature of human consciousness.
            </h2>
          </div>

          <div class="fit-content-gativus-network-card-main">
            <p class="gativus-card-subtitle">
              Most fundamental is the fact, that human’s brain simultaneously
              host two quite different networks: <b>neural network</b> and
              <b>concept network.</b>
            </p>
            <div class="gativus-card-image-block">
              <div class="gativus-card-image">
                <div class="left-card-image">
                  <b>Consciousness</b>(concept network)
                </div>
                <img src="./img/brain-out.png" height="300px" alt="" />
                <div class="right-card-image">
                  <b>Neural network</b>(cellular, spike and parameter network)
                </div>
              </div>
              <p>Figure 1: Two Networks in one brain</p>
            </div>
            <p class="gativus-card-subtitle">
              Research in neural networks has a lot of achievements (such as
              GPT, LLM, etc.), whilst the concept/knowledge networks can’t boast
              significant results (very restricted solution, such as RDF/OWL
              description).
            </p>
            <p class="gativus-card-subtitle">
              Gativus is making attempt to
              <b>converge these two networks into</b>
              <u>unified common network</u> and give the researches
              <b>an opportunity to find association between</b>
              <u>neural</u> and <u>concept</u> layers.
            </p>
          </div>
        </div>
        <img src="./img/two-arrows-down.svg" alt="" />
        <div class="fit-content-gativus-network-card">
          <div class="gativus-network-card-title-container">
            <h2 class="gativus-network-card-title">
              <b>G</b>ativus <b>L</b>ow <b>L</b>evel <b>N</b>etwork -
              <b>GLLN</b>
            </h2>
          </div>
          <div class="fit-content-gativus-network-card-main">
            <p class="gativus-card-subtitle">
              <b>Gativus Theory of Mind</b> outlines <b>GLLN</b> - three
              low-level networks (associated with neural networks term),
              comprising of S-V-A components:
            </p>
            <div class="gtom-glln-cards">
              <div class="gtom-card">
                <p>S - Structure (Cell information)</p>
                <p>
                  Cell information, actually coded by DNA, propagated and
                  further creating cellular network;
                </p>
                <hr width="100%" class="hr" />
                <p style="height: 100px">
                  We have formed an understanding of the existence of a cellular
                  network, having a specific description using
                  <b>S-components.</b>
                </p>
              </div>
              <div class="gtom-card">
                <p>V - Value (Learning Parameters)</p>
                <p>
                  Learning parameters, which would modify behavior of the cell.
                </p>
                <hr width="100%" class="hr" />
                <p style="height: 100px">
                  The created cellular network is capable of receiving and
                  transmitting signals <b>(V values)</b> using corresponding
                  <b>V-relations.</b> In a sense, this is analogous to a memory
                  cell and an electrical wire connecting the output to the
                  input.
                </p>
              </div>
              <div class="gtom-card">
                <p>A - Activity (Spikes)</p>
                <p>
                  Spikes between axons and dendrites, creating another network
                  above cellular one;
                </p>
                <hr width="100%" class="hr" />
                <p style="height: 100px">
                  To ensure the processing of inputs, we have
                  <b>A-components</b>
                  (activities) - analogues of code (programs) that can be
                  executed by an existing data processor.
                </p>
              </div>
            </div>
            <p class="gativus-card-subtitle"><b>Additions:</b></p>
            <p class="gativus-card-text">
              Only spike network have the association of electrical conductivity
              of signals, and would be seemed as something similar to electrical
              networks relaying signals through the network. As soon as spikes
              signify the value of the cell’s function – they are considered as
              of the value and defined as v-relations in Gativus terms.
            </p>
            <p class="gativus-card-text">
              But at the same time, structural code – even though is not
              conducted in spike-like way, but still propagates the network.
              Therefore, structure data or S-relation, in Gativus terms, is
              considered to be a virtual delivery of structure construction data
              to the hosting environment, allowing growth virtual (digital)
              cell.
            </p>
            <p class="gativus-card-text">
              Some values, such as dendrites weights, can be defined as a
              content of internal containers, which would be changed or
              memorized as a process of learning. As soon as Gativus already
              introduced value containers, these learning data can be stored in
              those containers. However, there is no v-relation, but new
              capability of the cell.
            </p>
          </div>
        </div>
        <img src="./img/two-arrows-down.svg" alt="" />
        <div class="fit-content-gativus-network-card">
          <div class="gativus-network-card-title-container">
            <h2 class="gativus-network-card-title">
              <b>G</b>ativus <b>CO</b>gnitive <b>N</b>etwork - <b>GCON</b>
            </h2>
          </div>
          <div class="fit-content-gativus-network-card-main">
            <p class="gativus-card-subtitle">
              GTOM considers human mind based on a few foundations:
            </p>
            <ul class="gativus-ul" style="margin: auto">
              <li class="gativus-card-text">
                <u>knowledge phenomenon</u>, as a primary foundation;
              </li>
              <li class="gativus-card-text">
                <u>time-space paradigm</u>, as a perception feature/interface.
              </li>
            </ul>
          </div>
          <div class="gativus-network-card-another-title-container">
            <h2 class="gativus-network-card-another-title">Knowledge</h2>
          </div>

          <div class="fit-content-gativus-network-card-main">
            <p class="gativus-card-text">
              Existence of knowledge entities (concepts) – is a fact.
            </p>
            <p class="gativus-card-text">
              Knowledge entities KLEN form GCON (Gativus Cognitive network) – as
              sub-network of GNET.
            </p>
            <p class="gativus-card-subtitle">
              GTOM consider that Knowledge entities KLEN are based on RDF’s
              triples, with some extensions:
            </p>
            <ul class="gativus-card-text" class="gativus-ul">
              <li>
                the predicate – would be various types, and represents Targets,
                Activities or Events;
              </li>
              <li>
                Subjects and Objects – would be numerous in one entity.
                Technically, they are not included into KLEN, but taking part in
                it by special participation relation (PARR), which are the part
                of KLEN;
              </li>
              <li>
                KLEN also includes sequence relations (SEQR) between Targets;
              </li>
              <li>
                KLEN has a sequence status: future, present, and past. The
                sequence status is the only time association in GTOM.
              </li>
            </ul>
            <p class="gativus-card-subtitle"><b>Additions:</b></p>
            <p class="gativus-card-text">
              Technically, the Knowledge entity – is the behavior, which changes
              the existing network by amending of existing or creating a new
              entities (subjects or targets). The changes are relayed by PARR
              relations.
            </p>
            <p class="gativus-card-text">
              The identification of KLEN – is same of NDDI containing the
              T-component. Creation of a New concept (target or subject) could
              result in creation the new NDDI with corresponding T/C components,
              or corresponding components can be hosted in the same NDDI.
            </p>
          </div>

          <div class="gativus-network-card-another-title-container">
            <h2 class="gativus-network-card-another-title">Time-space</h2>
          </div>

          <div class="fit-content-gativus-network-card-main">
            <p class="gativus-card-text">
              Gativus GTOM considers time/space as interface for knowledge
              exchange between two or more subjects with consciousness (like
              homo sapiens). The basic prototype is based on UML: class and
              activity diagrams. Activity diagram is associated with sequence
              relation SEQR between Targets, while class diagram can be seen as
              participation relations PARR between subject Concepts and
              consuming them Targets.
            </p>
          </div>
        </div>
      </div>`,
  },
  "./gnet": {
    linkLabel: "GNET",
    content: `<div class="gativus-network-page-container">
        <div class="gativus-network-title-container">
          <div class="gativus-network-title-container-sub">
            <img
              class="gativus-network-title-icon"
              src="./img/2-lines-to-right.svg"
              alt=""
            />
            <h1 class="gativus-network-title">Gativus network</h1>
            <img
              class="gativus-network-title-icon"
              src="./img/2-lines-to-left.svg"
              alt=""
            />
          </div>
          <img src="./img/two-arrows-down.svg" alt="" />
        </div>

        <div class="gativus-network-first-card gativus-network-card">
          <div class="gativus-network-card-title-container">
            <h2 class="gativus-network-card-title">
              <b>GNET</b> is specification based on a set of related
              conclusions:
            </h2>
          </div>
          <div class="gativus-network-card-main">
            <p class="gativus-network-card-main-description">
              GNET is a formalized reflection of the <br>
              <u><b>Gativus Theory of Mind</b></u>
            </p>
            <div class="gtom-gnet-nddis">
              <div class="gtom-gnet-nddis-block">
                <img
                  class="gtom-gnet-nddis-img"
                  src="./img/121px-Logo 1.png"
                  alt=""
                />
                <p>GTOM</p>
              </div>
              <img src="./img/arrow-right.svg" height="15px" alt="" />
              <div class="gtom-gnet-nddis-block">
                <img
                  class="gtom-gnet-nddis-img"
                  src="./img/gnet-main.png"
                  alt=""
                />
                <p>GANM</p>
              </div>
              <div class="two-arrows-towards">
                <!-- <img
                  src="./img/arrow-right.svg"
                  style="transform: rotate(180deg)"
                  height="15px"
                  alt=""
                /> --!>
                <img src="./img/arrow-right.svg" height="15px" alt="" />
              </div>
              <div class="gtom-gnet-nddis-block"> 
                  <img
                  class="gtom-gnet-nddis-img"
                  src="./img/gate.jpg"
                  alt=""
                />
                <p>GATE</p>
              </div>
              <div class="two-arrows-towards">
                <!-- <img
                  src="./img/arrow-right.svg"
                  style="transform: rotate(180deg)"
                  height="15px"
                  alt=""
                /> --!>
                <img src="./img/arrow-right.svg" height="15px" alt="" />
              </div>
              <div class="gtom-gnet-nddis-block">
                <img
                  class="gtom-gnet-nddis-img"
                  src="./img/gnet-second-view.png"
                  alt=""
                />
                <p>GNET</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second view -->

        <img src="./img/two-arrows-down.svg" alt="" />

        <div class="nddi-container">
          <div class="nddi-container-title-container">
            <p class="nddi-container-title">
              The entire network is built from a unified <b>NDDI's</b> for all
              layers of the overall network.
            </p>
          </div>

          <div class="nddi-info">
            <img src="./img/nddi.png" alt="" />
            <div class="nddi-description">
              <p>
                <b>NDDI</b> (<b>N</b>etwork <b>D</b>igital <b>D</b>omain
                <b>I</b>nstance) – Is an addressable instance, created and
                persistently existing under the Gativus domain. <br /><br />Each
                NDDI has a global unique name (UNON - Unique Node Name). UNON's
                are IPv6 addresses. The relationship between NDDI's are
                established between the internal components of NDDI's which form
                connection points (Point Of Connection - POCN) to participate in
                a Relationship. Point of Connection (POCN) brings a specific
                internal component of NDDI's to the surface of the node and
                allows it to participate in the construction of a Gativus
                Network (GATN). <br /><br />Currently, 6 types of functional
                internal components have been identified, grouped into
                corresponding sections. The components within each section have
                different properties and are interconnected with each other to
                achieve the required implementation of an NDDI.

                <br /><br />These types are:
              </p>
              <ol>
                <li>
                  V - Information Values stored in addressable containers.
                </li>
                <li>
                  B - Autonomous Behavior — the internal response of an NDDI
                  when receiving new changes in Information Values.
                </li>
                <li>
                  S - Structure — The skeletal information of an NDDI sufficient
                  to create another instance of itself on a Gativus Edge device
                  (GATE).
                </li>
                <li>
                  G - Network Behavior Security Management - Rules and security
                  acting as the controller of relationships between NDDI's.
                </li>
                <li>
                  T - Network Behavior Target Management - The external response
                  of an NDDI when receiving changes in Information Values.
                </li>
                <li>A - Aggregation</li>
              </ol>
            </div>
          </div>

          <div class="nddi-info-principles">
            <div class="nddi-container-title-container">
              <p class="nddi-container-title">Basic principles of NDDI's</p>
            </div>
            <div class="nddi-info-principles-container">
              <p>
                <b>1. NDDI have a subject-behavioral structure.</b>
                <br />
                > From a network perspective, this means that they can act as
                purely object-oriented or purely process-oriented.
              </p>
              <p>
                <b
                  >2. Relationships are formed between NDDI components, which
                  serve as connections between nodes, analogous to synapses.</b
                >
                <br />
                > Since there are different types of components, which will be
                listed below, and relationships are necessary for data
                transmission, there are different types of relationships between
                components. Each type of component has its own type of
                relationship.
              </p>
              <p>
                <b
                  >3. NDDI are always part of some group and can create groups
                  themselves. The group level determines the level of network
                  abstraction.</b
                >
                <br />
                > NDDI cannot exist in a network as a standalone element without
                relationships with components of other NDDI.
              </p>
            </div>
          </div>
          <div class="nddi-sections-title">
            <p>
              <b>NDDI</b> is container for components and has three visible
              sections
            </p>
          </div>
          <!-- <div class="nddi-sections"> -->
            <div class="nddi-vbs">
              <div class="nddi-vbs-info">
                <div class="nddi-vbs-info-left">
                  <p>
                    <b>1. First section:</b> <u>Values-Behaviors-Structure</u>
                  </p>
                  <p>> Neural network layer</p>
                </div>
                <p class="nddi-vbs-info-icon">VBS</p>
              </div>

              <div class="nddi-v-title">
                <p><b>NDDI’s data segment.</b></p>
                <p>V – Values – components to store variables of the node</p>
              </div>
              <div class="v-section-container">
                <div class="v-section-left">
                  <div class="v-section-left-image">
                    <img src="./img/v-section.png" height="500px" alt="" />
                  </div>
                  <p><b>V - section of NDDI</b></p>
                  <p>Description of V - section.............</p>
                </div>
                <div class="v-section-right">
                  <div class="v-component">
                    <div class="v-section-left-image">
                      <img src="./img/v-component.png" height="200px" alt="" />
                    </div>
                    <p><b>V - component</b></p>
                    <p class="v-component-description">
                      > A container that can hold multiple values
                      <br />
                      > The values ​​are the contents of the container. In
                      general, such contents are characters or their sets
                      (arrays)
                      <br />
                      > The amount of relations is infinite
                    </p>
                  </div>
                  <div class="v-connectors">
                    <div class="v-section-right-image">
                      <img
                        src="./img/v-connector-output.png"
                        height="100px"
                        alt=""
                      />
                      <img
                        src="./img/v-connector-input.png"
                        height="100px"
                        alt=""
                      />
                    </div>
                    <p><b>V - connectors/terminals</b></p>
                    <div class="v-connectors-text">
                      <div class="v-connector-output-text">
                        <p class="v-component-description">
                          <b>Output connector</b>
                        </p>
                        <p class="v-component-description">Some info......</p>
                      </div>
                      <div class="v-connector-input-text">
                        <p class="v-component-description">
                          <b>Input connector</b>
                        </p>
                        <p class="v-component-description">Some info......</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nddi-v-title">
                <p><b>NDDI’s behavior (code) segment.</b></p>
                <p>B – Behaviors – components to store node activity</p>
              </div>
              <div class="b-section-container">
                <div class="b-section-left">
                  <div class="b-section-left-image">
                    <img src="./img/b-section.png" height="500px" alt="" />
                  </div>
                  <p><b>B - section of NDDI</b></p>
                  <p class="b-component-description">
                    Responsible for signal processing and....
                  </p>
                </div>
                <div class="b-section-right">
                  <div class="b-package">
                    <div class="b-section-left-image">
                      <img src="./img/b-package.png" height="200px" alt="" />
                    </div>
                    <p><b>B - package</b></p>
                    <p class="b-component-description">
                      > The package of actions with signals, something similar
                      to a perceptron.
                    </p>
                  </div>
                  <div class="b-yota">
                    <div class="b-section-left-image">
                      <img src="./img/b-yota.png" height="200px" alt="" />
                    </div>
                    <p><b>B - yota</b></p>
                    <p class="b-component-description">
                      > Depending on the incoming signal, it directs it in the
                      selected direction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          <!-- </div> -->
        </div>
      </div>`,
  },
  "./gate": {
    linkLabel: "GATE",
    content: `<div class="gativus-page-container-center" style="width: 500px"> 
                <div class="fit-content-gativus-network-card">
          <div class="gativus-network-card-title-container">
            <h2 class="gativus-network-card-title">
              Is in the development stage
            </h2>
          </div>
          <div class="fit-content-gativus-network-card-main">
           <img src="./img/in_dev.png" height="200px" alt="" style="filter: saturate(0)">
          </div>
        </div>`,
  },
  "./gaar": {
    linkLabel: "GAAR",
    content: `<div class="gativus-page-container-center" style="width: 500px"> 
                <div class="fit-content-gativus-network-card">
          <div class="gativus-network-card-title-container">
            <h2 class="gativus-network-card-title">
              Is in the development stage
            </h2>
          </div>
          <div class="fit-content-gativus-network-card-main">
           <img src="./img/in_dev.png" height="200px" alt="" style="filter: saturate(0)">
          </div>
        </div>`,
  },
  "./contact": {
    linkLabel: "contact_us_link",
    content: `<div class="gativus-page-container-center"> 
                <div class="fit-content-gativus-network-card">
          <div class="gativus-network-card-title-container">
            <h2 class="gativus-network-card-title">
              If you have any questions or suggestions, you can contact us:
            </h2>
          </div>

          <div class="fit-content-gativus-network-card-main">
            <div class="contact-email-block">
              <img src="./img/logo.jpg" class="logo-section-img" alt="" />  
              <p class="gativus-card-subtitle">
              Email: contact@gativus.com
              </p>
            </div>
          </div>
          <div class="gativus-network-card-title-container_w_t_border">
          <h2 class="gativus-network-card-title">
          You can also fill out the form below to send us a message.
          </h2>
          </div>
          <div class="fit-content-gativus-network-card-main">
            <form class="contact-form">
              <label for="email">Your name:</label>
              <input class="contact-form-input" type="email" id="email" name="email" required>
              <label for="email">Your email:</label>
              <input class="contact-form-input" type="email" id="email" name="email" required>
              <label for="message">Message:</label>
              <textarea class="contact-form-input" id="message" name="message" required></textarea>
              <input class="contact-form-input-button" type="submit" value="Contact Us">
            </form>
          </div>
        </div>
               </div>`,
  },
};

const app = document.querySelector("#app");
const nav = document.querySelector("#nav");

const renderContent = (route) => {
  app.innerHTML = routes[route].content;
  if (route === "./"){
    document.querySelectorAll(".wtg_view_item").forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.classList.add("hovered");
      });
      item.addEventListener("mouseout", () => {
        item.classList.remove("hovered");
      });
      item.addEventListener('click', ()=>{

        if (item.id === "GANM"){
          window.location.href = "https://zh.wiki.gativus.com/index.php/GNET";
        }
        document.querySelectorAll('.header-link').forEach((link_item)=>{
          if (link_item.id === item.id){
            link_item.click();
          }
        })
      })
    });
  }
};
const navigate = (url) => {
  if (url === getRouteByUrl(window.location.href)){
    return;
  }
  let particles = document.querySelector("#particles-js");
  window.history.pushState({}, "", url);
  app.style.opacity = 0;
  app.style.transform = "translateY(-3px)";
  particles.style.opacity = 0;
  setTimeout(() => {
    scrollTo({ top: 0 });
    renderContent(url);
    app.style.transform = "translateY(0)";
    app.style.opacity = 1;
    particles.style.opacity = 1;
  }, 500);
};

const registerPageScripts = () => {
  document.querySelector(".gativus-header").addEventListener("click", (e) => {
    if (e.target.classList.contains("header-link")) {
      e.preventDefault();
      const { id } = e.target;
      let url = "";
      for (route in routes) {
        if (routes[route].linkLabel === id) {
          url = route;
        }
      }
      document.querySelectorAll(".header-link").forEach((item) => {
        item.classList.remove("active-link");
      });
      e.target.classList.add("active-link");
      navigate(url);
    } else if (e.target.parentElement.classList.contains("header-link")) {
      e.preventDefault();
      const { id } = e.target.parentElement;
      let url = "";
      for (route in routes) {
        if (routes[route].linkLabel === id) {
          url = route;
        }
      }
      document.querySelectorAll(".header-link").forEach((item) => {
        item.classList.remove("active-link");
      });
      e.target.parentElement.classList.add("active-link");
      navigate(url);
    }
  });
};

const getRouteByUrl = (url) => {
    let start_index = url.lastIndexOf('/');
    let str = url.substring(start_index, url.length);
    return "." + str;
}


const registerBrowserBackAndForth = () => {
  window.onpopstate = function (e) {
    const url = window.location.pathname;
    const route = getRouteByUrl(url);
    renderContent(route);
  };
};

const renderInitialPage = () => {
  const url = window.location.pathname;
  const route = getRouteByUrl(url);
  renderContent(route);
};

(function bootup() {
  registerPageScripts();
  registerBrowserBackAndForth();
  renderInitialPage();
})();