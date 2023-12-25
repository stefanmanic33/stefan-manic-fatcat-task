import React from "react";
import PropTypes from "prop-types";
import { Hero } from "../Hero";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";

export const PageGenerator = ({ sections }: any) => {
  return (
    <div>
      {sections.map((section: any, index: number) => (
        <div
          key={index}
          style={{
            backgroundColor: section.props?.backgroundColor,
            backgroundImage: section.props?.backgroundImage,
            display: section.props?.display,
            justifyContent: section.props?.justifyContent,
            alignItems: section.props?.alignItems,
            padding: "50px",
            height: "100vh",
          }}
        >
          {renderSection(section)}
        </div>
      ))}
    </div>
  );
};

const renderSection = (section: { type?: any; components?: any }) => {
  const { type, components } = section;

  if (!Array.isArray(components)) {
    console.error(`Invalid components array for section with type: ${type}`);
    return null;
  }

  switch (type) {
    case "singleColumn":
      return (
        <div style={styles.singleContainer}>{renderComponents(components)}</div>
      );
    case "twoColumns":
      if (
        components.length === 2 &&
        Array.isArray(components[0].items) &&
        Array.isArray(components[1].items)
      ) {
        return (
          <div style={{ display: "flex" }}>
            <div style={styles.twColumnsContainer}>
              {renderComponents(components[0].items)}
            </div>
            <div style={styles.twColumnsContainer}>
              {renderComponents(components[1].items)}
            </div>
          </div>
        );
      } else {
        console.error(
          `Invalid components structure for section with type 'twoColumns'`
        );
        return null;
      }

    default:
      return null;
  }
};

const renderComponents = (components: any) => {
  return components.map((component: any, index: number) => {
    switch (component.type) {
      case "Hero":
        return <Hero key={index} {...component.props} />;
      case "UserForm":
        return <UserForm key={index} {...component.props} />;
      case "UserList":
        return <UserList key={index} {...component.props} />;

      default:
        return null;
    }
  });
};

PageGenerator.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      components: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          items: PropTypes.arrayOf(
            PropTypes.shape({
              type: PropTypes.string,
              props: PropTypes.object,
            })
          ),
          props: PropTypes.object,
        })
      ),
      props: PropTypes.object,
    })
  ).isRequired,
};

const styles = {
  singleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  twColumnsContainer: {
    flex: 1,
    padding: "10px",
    marginRight: "30px",
  },
};
