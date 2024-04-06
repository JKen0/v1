import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://jken0.github.io/mysite/">
                JKen0
            </Link>{' '}
            {new Date().getFullYear()}
            {'.\n'}
            <img src="https://cdn.betterttv.net/emote/626df7c83c6f14b68846b1f1/1x.webp" />
        </Typography>
    );
}

interface FooterProps {
    description: string;
    title: string;
}

export default function Footer(props: FooterProps) {
    const { description, title } = props;

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}