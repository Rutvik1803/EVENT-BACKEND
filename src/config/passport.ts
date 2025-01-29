import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import db from '../database/models';
import jwt from 'jsonwebtoken';

dotenv.config();
const { User } = db

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: 'http://localhost:4000/api/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Save user to database or retrieve existing user
                const existingUser = await User.findOne({ where: { email: profile.emails?.[0].value } });
                if (existingUser) {
                    // Generate JWT token for this existing user
                    const token = jwt.sign(
                        { id: existingUser.id, email: existingUser.email, role: existingUser.role },
                        process.env.JWT_SECRET as string,
                        { expiresIn: '1h' }
                    );
                    return done(null, { user: existingUser, token });
                }

                // Create a new user
                const newUser = await User.create({
                    name: profile.displayName,
                    email: profile.emails?.[0].value,
                    number: '123456789',
                    password: 'defaultpassword',
                    role: 'user',
                });

                // Generate JWT token for this new user
                const token = jwt.sign(
                    { id: newUser.id, email: newUser.email, role: newUser.role },
                    process.env.JWT_SECRET as string,
                    { expiresIn: '1h' }
                );
                return done(null, { user: newUser, token });
            } catch (error) {
                return done(error, false);
            }
        }
    )
);

// Serialize & Deserialize User
passport.serializeUser((user: any, done) => {
    done(null, user);
});

passport.deserializeUser((user: any, done) => {
    done(null, user);
});
