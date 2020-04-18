import React from "react";
import { object, bool, string } from "prop-types";
import Styled from "styled-components"; // UI

import { H6 } from "@uprise/headings";
import { Tiny } from "@uprise/text";
import { extended, backgrounds } from "@uprise/colors";
import { spacing } from "@uprise/spacing";
const TaskStyle = Styled.div`
	padding: ${props => props.last ? spacing.s5 : `${spacing.s5} ${spacing.s5} 0 ${spacing.s5}`};
      width: 100%;
      height: 100%;
	background-color: ${props => props.active ? extended.purple.five : backgrounds.white};


	&:hover {
		background-color: ${extended.purple.five};
		cursor: pointer;
	}

	@media (max-width: 1024px) {
		padding: ${props => props.last ? spacing.s3 : `${spacing.s3} ${spacing.s3} 0 ${spacing.s3}`};

	}
`;
const Content = Styled.div`
      border-bottom: ${props => props.last ? 0 : `1px solid ${extended.purple.five}`};
      display: flex;
      flex-direction: row;
`;
const TaskLeftStyle = Styled.div`
      width: 100%;
      height: 100%;
	display: flex;
	flex-direction: row;
`;
const TaskRightStyle = Styled.div`
	align-self: flex-start;
      display: flex;
	flex-direction: row;
`;
const TaskTextStyle = Styled.div`
      width: 210px;
	display: flex;
	flex-direction: column;
`;
const IconLeftImage = Styled.img`
	margin-top: ${spacing.s31};
	margin-right: ${spacing.s5};
      height: 20px;
      width: 20px;
`;
const IconRightImage = Styled.img`
	margin-top: ${spacing.s3};
      height: 20px;
      width: 20px;
`;
export const TaskButton = ({
  index,
  active,
  last,
  type,
  activity,
  task,
  skillId,
  iconLeft,
  completedIcon,
  handleClick
}) => {
  var _activity$task$taskId;

  let title, subTitle;

  switch (type) {
    case "lessons":
      title = task.title;
      break;

    case "homework":
      title = `Exercise:  ${index + 1}`;
      subTitle = task.altTitle || task.title;
      break;

    case "faqs":
      title = `FAQs`;
      break;

    case "practice":
      title = `Practice`;
      break;

    case "summary":
      title = `Summary`;
      break;

    case "examples":
      title = `Exercise:  ${index + 1}`;
      break;

    case "bonus":
      title = task.title;
      break;
  }

  return (
    /*#__PURE__*/
    React.createElement(TaskStyle, {
      key: index,
      last: last,
      active: active,
      onClick: () => handleClick()
    },
    /*#__PURE__*/
    React.createElement(Content, {
      last: last
    },
    /*#__PURE__*/
    React.createElement(TaskLeftStyle, null,
    /*#__PURE__*/
    React.createElement(IconLeftImage, {
      src: iconLeft
    }),
    /*#__PURE__*/
    React.createElement(TaskTextStyle, null,
    /*#__PURE__*/
    React.createElement(H6, {
      className: "m-b-0 m-t-0"
    }, title), subTitle &&
    /*#__PURE__*/
    React.createElement(H6, {
      className: "m-b-0 m-t-0",
      weight: "normal"
    }, subTitle),
    /*#__PURE__*/
    React.createElement(Tiny, {
      className: `${last ? "m-b-0 m-t-0 " : "m-b-3 m-t-0 "}`
    }, type === "bonus" || type === "homework" || type === "lessons" ? task.time + "min" : ""))),
    /*#__PURE__*/
    React.createElement(TaskRightStyle, null, task.taskId && ((_activity$task$taskId = activity[task.taskId]) === null || _activity$task$taskId === void 0 ? void 0 : _activity$task$taskId.completed) &&
    /*#__PURE__*/
    React.createElement(IconRightImage, {
      "data-testid": `completed-${task.taskId}-icon`,
      src: completedIcon
    }))))
  );
};
TaskButton.propTypes = {
  activity: object.isRequired,
  last: bool.isRequired,
  active: bool,
  skillId: string.isRequired,
  iconLeft: string.isRequired,
  completedIcon: string
};