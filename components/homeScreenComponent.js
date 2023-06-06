import { Text, View } from "react-native";
import { ListItem, Avatar } from '@rneui/themed';
import React, { useState } from 'react';

export const HomeScreenComponent = () => {

    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    return (
        <>
        <ListItem.Accordion
            content={
            <ListItem.Content>
                <ListItem.Title>Top Users</ListItem.Title>
                <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
            </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
            setExpanded(!expanded);
            }}
        > 
            <View
                style={{ flexDirection: 'row', height: 100, padding: 0,}}>
                <ListItem>
                    <Avatar
                        rounded
                        source={{
                        uri: 'https://randomuser.me/api/portraits/men/32.jpg',
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>John Doe</ListItem.Title>
                        <ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                    <ListItem>
                    <Avatar
                        rounded
                        source={{
                        uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>Albert</ListItem.Title>
                        <ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        </ListItem.Accordion>
        <ListItem.Accordion
            content={
            <ListItem.Content>
                <ListItem.Title>Top Users</ListItem.Title>
                <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
            </ListItem.Content>
            }
            isExpanded={expanded1}
            onPress={() => {
            setExpanded1(!expanded1);
            }}
        > 
            <View
                style={{ flexDirection: 'row', height: 100, padding: 0,}}>
                <ListItem>
                    <Avatar
                        rounded
                        source={{
                        uri: 'https://randomuser.me/api/portraits/men/32.jpg',
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>John Doe</ListItem.Title>
                        <ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                    <ListItem>
                    <Avatar
                        rounded
                        source={{
                        uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>Albert</ListItem.Title>
                        <ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        </ListItem.Accordion>
        </>
    );
}

