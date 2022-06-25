import React from "react";
import PropTypes from "prop-types";
import "./avatar.css";

/**
 * round UI component for user interaction
 */
export const Avatar = ({
    round,
    disabled,
    backgroundColor,
    size,
    name,
    content,
    ...props
}) => {
    const roundOrSquareClass = round
        ? "storybook-avatar--round"
        : "storybook-avatar--square";
    const disabledClass = disabled ? "storybook-avatar--disabled" : "";
    // TODO: add letters logics
    
    const getInitials = (name) => {
        let initials = ""
        if (name.split(" ").length >= 2) {
            const [firstName, lastName] = name.toUpperCase().split(" ");
            initials = firstName[0] + lastName[0];
        } else {
            initials = name[0];
        }
        return initials
    }

    let renderContent = "";
    if (content === "Letters") {
        renderContent = getInitials(name);
    } else if (content === "Pictures") {
        renderContent = "IM"
    } else {
        renderContent = "IC"
    }
    return (
        <button
            type="button"
            className={[
                "storybook-avatar",
                `storybook-avatar--${size}`,
                roundOrSquareClass,
                disabledClass,
            ].join(" ")}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {renderContent}
        </button>
    );
};

Avatar.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    round: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    content: PropTypes.oneOf(["Pictures", "Letters", "Icon"]),
    /**
     * Button contents
     */
    name: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Avatar.defaultProps = {
    backgroundColor: null,
    name: "Avatar Name",
    content: "Letters",
    round: true,
    disabled: false,
    size: "medium",
    onClick: undefined,
};
