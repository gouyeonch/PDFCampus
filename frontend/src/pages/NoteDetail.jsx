import React from "react";
import styled from "styled-components";
import { View, Alert } from "react-native";

import Header from "../organisms/Header";
import UpperDetail from "../organisms/UpperDetail";
import LowerDetail from "../organisms/LowerDetail";

const Container = styled.View`
	width: 100%;
	display: flex;

	align-items: center;
`;
const BookTitleContainer = styled.View`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: flex-start;
	margin: 34px 0;
`;
const BookTitleTypo = styled.Text`
	font-size: 50px;
	font-weight: 800;
	margin-left: 40px;
`;
const ContentContainer = styled.View`
	width: 80%;
	height: 60%;
	flex-direction: column;
	box-sizing: border-box;
	margin: 24px 0;
`;

const DetailInfoDivider = styled.View`
	width: 100%;
	height: 2px;
	background: #bebebe;
	box-sizing: border-box;
	margin-bottom: 17px;
`;

const NoteInfo = {
	bookTitle: "운영체제 필기자료",
	bookCover:
		"https://simage.mujikorea.net/goods/31/11/79/07/4550002435097_N_N_400.jpg",
	isStored: false,
	publicationDate: "0000년 0월 0일 오후 00:00",
	modifiedDate: "0000년 0월 0일 오후 00:00",
	DetailInfo: "상세정보입니다~~~~~",
};

const Move2Library = () => {
	return Alert.alert("나의 서재로 이동");
};

const AddBookLibrary = () => {
	return Alert.alert("나의 서재에 추가");
};

const NoteDetail = () => {
	return (
		<Container>
			<Header />
			<BookTitleContainer>
				<BookTitleTypo>{NoteInfo.bookTitle}</BookTitleTypo>
			</BookTitleContainer>
			<ContentContainer>
				<UpperDetail
					contentInfo={NoteInfo}
					truepress={Move2Library}
					falsepress={AddBookLibrary}
					isBook={false}
				/>
				<DetailInfoDivider />
				<LowerDetail
					img1={NoteInfo.bookCover}
					img2={NoteInfo.bookCover}
					img3={NoteInfo.bookCover}
					bookDetailContent={NoteInfo.DetailInfo}
				/>
			</ContentContainer>
		</Container>
	);
};

export default NoteDetail;